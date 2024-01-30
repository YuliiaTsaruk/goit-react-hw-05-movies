import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from 'components/Api';

export const MovieReviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movieReviews, setMovieReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const getMovieReviews = async () => {
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
      {isLoading && <p>Loading...</p>}
      {error && <p>Oops, something went wrong...</p>}
      {movieReviews.length > 0 && (
        <>
          {movieReviews.map(review => (
            <li key={review.author}>
              <h4>{review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </>
      )}
      {movieReviews.length === 0 && !isLoading && (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
};
