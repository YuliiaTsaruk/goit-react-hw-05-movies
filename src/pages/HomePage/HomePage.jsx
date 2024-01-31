import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { fetchTrendingMovies } from 'components/Api';
import { Container, Error } from 'GlobalContainer.styled';
import { Loader } from 'components/Loader/Loader';
import {
  StyledFilmTitle,
  StyledItem,
  StyledLink,
  StyledList,
  StyledTitle,
} from './HomePage.styled';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [trendingMovies, setTrendingMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const getTrendingMovies = async () => {
      setIsLoading(true);
      try {
        const { results } = await fetchTrendingMovies();
        setTrendingMovies(results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <Container>
      <StyledTitle>Trending today</StyledTitle>
      {isLoading && <Loader />}
      {error && (
        <Error>
          Oops, something went wrong... Please, try reloading this page!
        </Error>
      )}
      <StyledList>
        {trendingMovies.length > 0 &&
          trendingMovies.map((trendingMovie, index) => {
            const { title, id, poster_path } = trendingMovie;
            const posterBaseURL = 'https://image.tmdb.org/t/p/w200';
            const poster = posterBaseURL + poster_path;
            return (
              <StyledItem key={index}>
                <StyledLink to={`/movies/${id}`} state={{ from: location }}>
                  {poster && <img src={poster} alt={title} />}
                  <StyledFilmTitle>{title}</StyledFilmTitle>
                </StyledLink>
              </StyledItem>
            );
          })}
      </StyledList>
    </Container>
  );
}
