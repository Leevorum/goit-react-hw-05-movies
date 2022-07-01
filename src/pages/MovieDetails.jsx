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
      <button type="button" className={s.goBack}>
        <Link
          to={backLinkHref}
          state={{ searchQuery: location.state?.searchQuery }}
        >
          Go back
        </Link>
      </button>

      {isLoading && <p>Data is loading...</p>}

      {movie && <MovieCard movie={movie} />}

      {fetchError && <p>The movie is not avaible</p>}

      {movie && (
        <>
          <p>Addition Information</p>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
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
