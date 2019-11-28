const API_KEY = '82381b1c79d0ad4bdb831ff891103a01';

const fetchAPITopMovies = (query = '') => {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`,
  )
    .then(res => res.json())
    .then(data => data.results);
};

export default fetchAPITopMovies;
