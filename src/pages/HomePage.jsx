import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../components/Api';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      setIsLoading(true);
      try {
        const { results } = await fetchTrendingMovies();
        setTrendingMovies(prevState => [...prevState, ...results]);
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
            const { title } = trendingMovie;
            return <li key={index}>{title}</li>;
          })}
      </ul>
    </div>
  );
}
