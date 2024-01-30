import { fetchSearchMovies } from 'components/Api';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);

  const [params, setParams] = useSearchParams();
  const searchMovie = params.get('movie') ?? '';

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
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="movie"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        {isLoading && <p>Loading...</p>}
        {error && <p>Oops, something went wrong...</p>}
        {movies.length > 0 &&
          movies.map(movie => {
            const { title, id, poster_path } = movie;
            const posterBaseURL = 'https://image.tmdb.org/t/p/w200';
            const poster = posterBaseURL + poster_path;
            return (
              <li key={id}>
                <Link to={`/movies/${id}`}>
                  {poster && <img src={poster} alt={title} />}
                  <h3>{title}</h3>
                </Link>
              </li>
            );
          })}
        {movies.length === 0 && searchMovie && !isLoading && (
          <p>Sorry, we don't find this {searchMovie} in our library</p>
        )}
      </ul>
    </div>
  );
}
