import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from 'components/Api';
import { Loader } from 'components/Loader/Loader';
import { StyledItem, StyledList } from './MovieReviews.styled';

export const MovieReviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movieReviews, setMovieReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const getMovieReviews = async () => {
      setIsLoading(true);
      try {
        const { results } = await fetchMoviesReviews(movieId);
        setMovieReviews([...results]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieReviews();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>Oops, something went wrong...</p>}
      <StyledList>
        {' '}
        {movieReviews.length > 0 && (
          <>
            {movieReviews.map(review => (
              <StyledItem key={review.id}>
                <h4>{review.author}</h4>
                <p>{review.content}</p>
              </StyledItem>
            ))}
          </>
        )}
      </StyledList>
      {movieReviews.length === 0 && !isLoading && (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
};
