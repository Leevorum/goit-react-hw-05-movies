import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchCastMovieDetails } from 'service/api-service';
import ActorCard from 'components/ActorCard/ActorCard';
import s from './cast.module.css';

export default function Cast() {
  const [actors, setActors] = useState(null);
  const [fetchError, setFetchError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const actorsResponce = await fetchCastMovieDetails(movieId);
        if (actorsResponce.data.cast.length === 0) {
          return;
        }
        setActors(actorsResponce.data.cast);
      } catch (error) {
        setFetchError(true);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <div className={s.actorsWrapper}>
      {fetchError && <p>There is no infromation about actors</p>}
      <ul className={s.actorsList}>
        {actors &&
          actors.map(actor => (
            <li key={actor.id} className={s.listItem}>
              <ActorCard actor={actor} />
            </li>
          ))}
      </ul>
    </div>
  );
}
