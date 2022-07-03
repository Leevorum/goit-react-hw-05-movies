import logo from '../images/dummy_image.png';
import s from './MoviesSmallCard.module.css';
import PropTypes from 'prop-types';

const baseUrl = 'https://image.tmdb.org/t/p/w400';

export default function MoviesSmallCard({ movie }) {
  const image = `${baseUrl}${movie.poster_path}`;
  const noImage = 'https://image.tmdb.org/t/p/w400null';
  const useScore = Math.round(movie.vote_average * 10);

  return (
    <div>
      <img
        src={image !== noImage ? image : logo}
        alt={movie?.title ?? movie?.namevie}
        className={s.image}
      ></img>
      <div className={s.textWrapper}>
        <p className={s.title}>{movie?.title ?? movie?.name}</p>
        <p className={s.score}>UserScore {useScore}%</p>
      </div>
    </div>
  );
}

MoviesSmallCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
