import axios from 'axios';

const API_KEY = '4cfbca3d61713e2ef2c4275dd6982dc3';

export async function searchhMovies(queryName) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${queryName}&page=1&include_adult=false`,
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchTrendingMovies() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
    );

    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieDetails(movieId) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}
export async function fetchCastMovieDetails(movieId) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
    );

    return response;
  } catch (error) {
    console.error(error);
  }
}
export async function fetchReviewsMovieDetails(movieId) {
  try {
    const responce = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
    );

    return responce;
  } catch (error) {
    console.error(error);
  }
}
