import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCast } from 'components/Api';
import { Loader } from 'components/Loader/Loader';
import { StyledItem, StyledList } from './MovieCast.styled';

export const MovieCast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movieCast, setMovieCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const getMovieCast = async () => {
      setIsLoading(true);
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
      {isLoading && <Loader />}
      {error && <p>Oops, something went wrong...</p>}
      {movieCast.length > 0 && (
        <StyledList>
          {movieCast.map(actor => (
            <StyledItem key={`${actor.character}-${actor.id}`}>
              <img
                src={getProfilePoster(actor.profile_path)}
                alt={actor.name}
              />
              <h4>{actor.name}</h4>
              <p>Character: {actor.character}</p>
            </StyledItem>
          ))}
        </StyledList>
      )}
    </div>
  );
};
