import s from './reviewCard.module.css';
import PropTypes from 'prop-types';

export default function ReviewCard({ review }) {
  const { author, content } = review;
  return (
    <div className={s.wrapper}>
      <p>{author}</p>
      <p>{content}</p>
    </div>
  );
}

ReviewCard.propTypes = {
  review: PropTypes.object.isRequired,
};
