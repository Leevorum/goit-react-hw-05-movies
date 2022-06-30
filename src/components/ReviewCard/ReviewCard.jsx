import s from './reviewCard.module.css';

export default function ReviewCard({ review }) {
  const { author, content } = review;
  return (
    <div className={s.wrapper}>
      <p>{author}</p>
      <p>{content}</p>
    </div>
  );
}
