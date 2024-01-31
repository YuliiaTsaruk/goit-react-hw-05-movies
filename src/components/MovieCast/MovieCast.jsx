import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCast } from 'components/Api';

export const MovieCast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movieCast, setMovieCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const { cast } = await fetchMoviesCast(movieId);
        setMovieCast([...cast]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieCast();
  }, [movieId]);

  const getProfilePoster = profile_path => {
    if (profile_path) {
      const posterBaseURL = 'https://image.tmdb.org/t/p/w200';
      const profilePoster = posterBaseURL + profile_path;
      return profilePoster;
    } else {
      return 'https://via.placeholder.com/200';
    }
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Oops, something went wrong...</p>}
      {movieCast.length > 0 && (
        <ul>
          {movieCast.map(actor => (
            <li key={`${actor.character}-${actor.id}`}>
              <img
                src={getProfilePoster(actor.profile_path)}
                alt={actor.name}
              />
              <h4>{actor.name}</h4>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
