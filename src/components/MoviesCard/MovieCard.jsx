import logo from '../images/dummy_image.png';
import s from './movieCard.module.css';
import PropTypes from 'prop-types';

const baseUrl = 'https://image.tmdb.org/t/p/w400';

export default function MovieCard({ movie }) {
  const { backdrop_path, title, overview, genres, vote_average } = movie;
  const image = `${baseUrl}${backdrop_path}`;
  const noImage = 'https://image.tmdb.org/t/p/w400null';
  const useScore = Math.round(vote_average * 10);

  return (
    <div className={s.movieWrapper}>
      <img
        src={image !== noImage ? image : logo}
        alt=""
        className={s.movieImage}
      />
      <div className={s.movieDescription}>
        <h2>{title}</h2>
        <p>User Score {useScore}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul className={s.genresList}>
          {genres.map(genre => (
            <li key={genre.id} className={s.listItem}>
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
