const API_KEY = '82381b1c79d0ad4bdb831ff891103a01';

const fetchAPITopMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`,
  )
    .then(res => res.json())
    .then(data => data.results);
};

const fetchAPIMovieDetails = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`,
  ).then(res => res.json());
};

const fetchAPIMovieCast = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`,
  ).then(res => res.json());
};

const fetchAPIMovies = query => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`,
  )
    .then(res => res.json())
    .then(data => data.results);
};

const fetchAPIMovieReviews = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`,
  )
    .then(res => res.json())
    .then(data => data.results);
};

export default {
  fetchAPITopMovies,
  fetchAPIMovieDetails,
  fetchAPIMovieCast,
  fetchAPIMovies,
  fetchAPIMovieReviews,
};
