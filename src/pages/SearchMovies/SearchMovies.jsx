import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { searchhMovies } from '../../service/api-service';
import MoviesSmallCard from 'components/MoviesSmallCard/MoviesSmallCard';
import s from './searchMovies.module.css';

export default function SearchMovies() {
  const [input, setInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [fetchError, setFetchError] = useState(false);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const queryInput = searchParams.get('searchquery') ?? '';
  // const prevSearch = new URLSearchParams(location.search).get('searchquery');

  // console.log(location);
  // rewrite searchquery if back from details to search
  useEffect(() => {
    if (location.search !== '') {
      setSearchParams(location.search);
      setSearchQuery(queryInput);
    }
  }, [location.search, queryInput, setSearchParams]);

  // rewrite searchquery if back from details to search
  // useEffect(() => {

  //   if (prevSearch !== null) {
  //     setSearchParams(prevSearch);
  //     setSearchQuery(queryInput);
  //   }
  // }, [ prevSearch, queryInput, setSearchParams]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchQuery === '') {
          return;
        }
        const moviesResponse = await searchhMovies(searchQuery);
        if (moviesResponse.data.results.length === 0) {
          alert('There is no movie with this name');
          setMovies([]);
          return;
        }
        setMovies(moviesResponse.data.results);
      } catch (error) {
        setFetchError(true);
      }
    };

    const updateQueryString = name => {
      const nextParams = name !== '' ? { searchquery: name } : {};

      setSearchParams(nextParams);
    };

    fetchData();
    updateQueryString(searchQuery);
  }, [queryInput, searchQuery, setSearchParams]);

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
      <div className={s.searchWrapper}>
        <form className={s.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            name="input"
            value={input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            onChange={handleChange}
          />
        </form>
      </div>
      <div className={s.moviesWrapper}>
        <ul className={s.moviesList}>
          {movies &&
            movies.map(movie => (
              <li key={movie.id} className={s.listItem}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
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
