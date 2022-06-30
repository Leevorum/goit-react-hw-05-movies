import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from 'service/api-service';

export default function HomePage(props) {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const moviesResponce = await fetchTrendingMovies();
      if (moviesResponce.data.results.length === 0) {
        return;
      }
      setMovies(moviesResponce.data.results);
    };
    fetchData();
  }, []);
  return (
    <div>
      {movies ? (
        <h1>Trending Today</h1>
      ) : (
        <p>There are no trending movies today</p>
      )}
      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie?.title ?? movie?.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
