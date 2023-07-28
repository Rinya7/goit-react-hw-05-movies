import { Routes, Route } from 'react-router-dom';

import Movies from '../../pages/Movies/Movies';
import Layout from 'components/Layout/Layout';
import Errorpage from '../../pages/ErrorPage';
import { lazy } from 'react';
const Home = lazy(() => import('../../pages/Home/Home'));
const MovieDetails = lazy(() =>
  import('../../pages/MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('../Cast/Cast'));
const Rewiews = lazy(() => import('../Rewiews/Rewiews'));

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast></Cast>} />
            <Route path="rewiews" element={<Rewiews></Rewiews>} />
          </Route>
        </Route>
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </>
  );
}
