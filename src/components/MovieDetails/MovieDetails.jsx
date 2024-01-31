import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesDetails } from 'components/Api';

export default function MovieDetails() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const getMoviesDetails = async () => {
      setIsLoading(true);
      try {
        const response = await fetchMoviesDetails(movieId);
        setMovie(response);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getMoviesDetails();
  }, [movieId]);

  const getPostersUrl = () => {
    const posterBaseURL = 'https://image.tmdb.org/t/p/w200';
    const poster = posterBaseURL + movie.poster_path;
    return poster;
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Oops, something went wrong...</p>}
      {movie && (
        <div>
          <img src={getPostersUrl()} alt={movie.title} />
          <div>
            <h2>{movie.title}</h2>
            <p>User Score: {movie.vote_average}</p>
            <p>
              <span>Overview</span> {movie.overview}
            </p>
            <p>
              <span>Genres</span>{' '}
              {movie.genres.map(genre => (
                <span key={genre.id}>{genre.name} </span>
              ))}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
