import { fetchReviewsMovieDetails } from 'service/api-service';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import s from './reviews.module.css';

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const [fetchError, setFetchError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await fetchReviewsMovieDetails(movieId);
        if (reviewsData.data.results.length === 0) {
          return;
        }
        setReviews(reviewsData.data.results);
      } catch (error) {
        setFetchError(true);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <div>
      {fetchError && <p>There are no reviews about movie</p>}
      {reviews && <p>Reviews</p>}
      <ul className={s.reviewList}>
        {reviews &&
          reviews.map(review => (
            <li key={review.id}>
              <ReviewCard review={review} />
            </li>
          ))}
      </ul>
    </div>
  );
}
