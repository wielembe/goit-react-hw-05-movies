import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import css from './MovieInfo.module.css';

export const MovieInfo = () => {
  return (
    <>
      <div className={css.additionalInfContainer}>
        <p>Additional information</p>
        <ul>
          <li key="cast">
            <Link to="cast">Cast</Link>
          </li>
          <li key="reviews">
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <div>
        <Suspense fallback={<div>Loading information...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
