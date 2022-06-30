import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { searchhMovies } from '../service/api-service';

export default function SearchMovies(props) {
  const [input, setInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  //rewrite searchquery if back from details to search
  useEffect(() => {
    if (location.state) {
      setSearchQuery(location.state.searchQuery);
    }
  }, [location.state]);

  useEffect(() => {
    const fetchData = async () => {
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
      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={`/movies/${movie.id}`}
                state={{ from: location, searchQuery: searchQuery }}
              >
                {movie?.title ?? movie?.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
