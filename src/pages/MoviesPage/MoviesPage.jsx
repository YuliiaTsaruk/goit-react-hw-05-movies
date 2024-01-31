import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'components/Api';
import { Loader } from 'components/Loader/Loader';
import { Container, Error, Messege } from 'GlobalContainer.styled';
import {
  StyledFilmTitle,
  StyledForm,
  StyledItem,
  StyledLink,
  StyledList,
} from './MoviesPage.styled';

export default function MoviesPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);

  const [params, setParams] = useSearchParams();
  const searchMovie = params.get('movie') ?? '';

  const location = useLocation();

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      try {
        const { results } = await fetchSearchMovies(searchMovie);
        setMovies(results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, [searchMovie]);

  const onSubmit = evt => {
    evt.preventDefault();
    const searchedValue = evt.target.elements.movie.value;
    setParams({ movie: searchedValue });
    evt.target.reset();
  };

  return (
    <Container>
      <StyledForm onSubmit={onSubmit}>
        <input
          name="movie"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </StyledForm>

      <StyledList>
        {isLoading && <Loader />}
        {error && <Error>Oops, something went wrong...</Error>}

        {movies.length > 0 &&
          movies.map(movie => {
            const { title, id, poster_path } = movie;
            const posterBaseURL = 'https://image.tmdb.org/t/p/w200';
            const poster = posterBaseURL + poster_path;
            return (
              <StyledItem key={id}>
                <StyledLink to={`/movies/${id}`} state={{ from: location }}>
                  {poster_path ? (
                    <img src={poster} alt={title} />
                  ) : (
                    <img
                      src="https://via.placeholder.com/200"
                      alt="placeholder"
                      width={200}
                    />
                  )}

                  <StyledFilmTitle>{title}</StyledFilmTitle>
                </StyledLink>
              </StyledItem>
            );
          })}
        {movies.length === 0 && searchMovie && !isLoading && (
          <Messege>
            Sorry, we don't find this {searchMovie} in our library
          </Messege>
        )}
      </StyledList>
    </Container>
  );
}
