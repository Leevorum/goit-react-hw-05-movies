import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { searchhMovies } from '../service/api-service';
import MoviesSmallCard from 'components/MoviesSmallCard/MoviesSmallCard';
import s from './searchMovies.module.css';

export default function SearchMovies() {
  const [input, setInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [fetchError, setFetchError] = useState(false);
  const location = useLocation();

  //rewrite searchquery if back from details to search
  useEffect(() => {
    if (location.state) {
      setSearchQuery(location.state.searchQuery);
    }
  }, [location.state]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchQuery === '') {
          return;
        }
        const moviesResponce = await searchhMovies(searchQuery);
        if (moviesResponce.data.results.length === 0) {
          alert('There is no movie with this name');
          setMovies([]);
          return;
        }
        setMovies(moviesResponce.data.results);
      } catch (error) {
        setFetchError(true);
      }
    };
    fetchData();
  }, [searchQuery]);

  const handleChange = evt => {
    setInput(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (input === '') {
      return;
    }
    setSearchQuery(input);
    setInput('');
  };

  return (
    <div>
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          name="input"
          value={input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleChange}
        />
      </form>
      <div className={s.moviesWrapper}>
        <ul className={s.moviesList}>
          {movies &&
            movies.map(movie => (
              <li key={movie.id} className={s.listItem}>
                <Link
                  to={`/movies/${movie.id}`}
                  state={{ from: location, searchQuery: searchQuery }}
                >
                  <MoviesSmallCard movie={movie} />
                </Link>
              </li>
            ))}
        </ul>
      </div>
      {fetchError && <p>Somthing goes wrong! Let's try again later...</p>}
    </div>
  );
}
