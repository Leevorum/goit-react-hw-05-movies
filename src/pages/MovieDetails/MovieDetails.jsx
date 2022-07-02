import { useState, useEffect, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'service/api-service';
import MovieCard from 'components/MoviesCard/MovieCard';
import s from './movieDetails.module.css';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const moviesResponce = await fetchMovieDetails(movieId);
        setMovie(moviesResponce.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setFetchError(true);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <div className={s.movieCardWrapper}>
      <Link
        to={backLinkHref}
        state={{ searchQuery: location.state?.searchQuery }}
      >
        <button type="button" className={s.arrow}></button>
      </Link>

      {isLoading && <p>Data is loading...</p>}

      {movie && <MovieCard movie={movie} />}

      {fetchError && <p>The movie is not avaible</p>}

      {movie && (
        <>
          <h2>Addition Information</h2>
          <ul>
            <li>
              <Link to="cast">
                <button type="button" className={s.additionalInfo}>
                  Cast
                </button>
              </Link>
            </li>
            <li>
              <Link to="reviews">
                <button type="button" className={s.additionalInfo}>
                  Reviews
                </button>
              </Link>
            </li>
          </ul>
        </>
      )}
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
}
