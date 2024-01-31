import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { fetchTrendingMovies } from 'components/Api';

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
    <div>
      <h2>Trending today</h2>
      {isLoading && <p>Loading...</p>}
      {error && (
        <p>Oops, something went wrong... Please, try reloading this page!</p>
      )}
      <ul>
        {trendingMovies.length > 0 &&
          trendingMovies.map((trendingMovie, index) => {
            const { title, id, poster_path } = trendingMovie;
            const posterBaseURL = 'https://image.tmdb.org/t/p/w200';
            const poster = posterBaseURL + poster_path;
            return (
              <li key={index}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {poster && <img src={poster} alt={title} />}
                  {title}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
