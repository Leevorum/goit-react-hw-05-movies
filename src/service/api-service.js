import axios from 'axios';

const API_KEY = '4cfbca3d61713e2ef2c4275dd6982dc3';

export async function searchhMovies(queryName) {
  return await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${queryName}&page=1&include_adult=false`,
  );
}

export async function fetchTrendingMovies() {
  return await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
  );
}

export async function fetchMovieDetails(movieId) {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  );
}
export async function fetchCastMovieDetails(movieId) {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
  );
}
export async function fetchReviewsMovieDetails(movieId) {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  );
}
