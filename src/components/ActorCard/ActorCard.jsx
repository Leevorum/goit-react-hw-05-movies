import logo from '../images/dummy_image.png';
import s from './actorCard.module.css';
import PropTypes from 'prop-types';

const baseUrl = 'https://image.tmdb.org/t/p/w200';

export default function ActorCard({ actor }) {
  const { name, profile_path, character } = actor;
  const image = `${baseUrl}${profile_path}`;
  const noImage = 'https://image.tmdb.org/t/p/w200null';

  return (
    <div>
      <img
        src={image !== noImage ? image : logo}
        alt={name}
        className={s.actorImage}
      ></img>
      <p>{name}</p>
      <p className={s.characterText}>Character: {character}</p>
    </div>
  );
}
ActorCard.propTypes = {
  actor: PropTypes.object.isRequired,
};
