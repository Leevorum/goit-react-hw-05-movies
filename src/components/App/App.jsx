import React, { Suspense, lazy } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import s from '../App/app.module.css';

const HomePage = lazy(
  () => import('../../pages/HomePage') /* webpackChunkName: "HomePage" */,
);
const MovieDetails = lazy(
  () =>
    import('../../pages/MovieDetails') /* webpackChunkName: "MovieDetails" */,
);
const SearchMovies = lazy(
  () => import('pages/SearchMovies') /* webpackChunkName: "SearchMovies" */,
);
const Reviews = lazy(
  () => import('components/Reviews/Reviews') /* webpackChunkName: "Reviews" */,
);
const Cast = lazy(
  () => import('components/Cast/Cast') /* webpackChunkName: "Cast" */,
);

export function App() {
  return (
    <div className={s.wrapper}>
      <nav className={s.navigation}>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/movies" className={s.navigationItem}>
          MOVIES
        </NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/movies/" element={<SearchMovies />} />
          <Route exact path="/movies/:movieId" element={<MovieDetails />}>
            <Route exact path="cast" element={<Cast />} />
            <Route exact path="reviews" element={<Reviews />} />
          </Route>
          <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found</h2>
              </div>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
}
