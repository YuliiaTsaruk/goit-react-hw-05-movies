import axios from 'axios';

const KEY = 'fd2e32963129124006e8f776a5bbabab';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${KEY}`);
  return response.data;
};

export const fetchSearchMovies = async query => {
  const response = await axios.get(
    `/search/movie?api_key=${KEY}&query=${query}`
  );
  return response.data;
};

export const fetchMoviesDetails = async movie_id => {
  const response = await axios.get(`/movie/${movie_id}?api_key=${KEY}`);
  return response.data;
};

export const fetchMoviesCast = async movie_id => {
  const response = await axios.get(`/movie/${movie_id}/credits?api_key=${KEY}`);
  return response.data;
};
export const fetchMoviesReviews = async movie_id => {
  const response = await axios.get(`/movie/${movie_id}/reviews?api_key=${KEY}`);
  return response.data;
};
