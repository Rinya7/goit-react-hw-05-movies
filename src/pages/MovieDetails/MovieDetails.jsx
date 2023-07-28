import { useParams, useLocation } from 'react-router-dom';
import { Outlet, NavLink } from 'react-router-dom';
import { filmsFromApiById } from '../../data/filmsFromApi';
import { useState, useEffect, useRef } from 'react';
import { AditionLi, BackLick, Conteiner } from './MovieDetals.styled';
import { Suspense } from 'react';
import defaultImage from '../../images/not-found-image.jpg';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [filmById, setFilmById] = useState('');

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    FilmInfo(movieId);
  }, [movieId]);

  const FilmInfo = async id => {
    try {
      const results = await filmsFromApiById(id);
      setFilmById(results);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <main>
      <Conteiner>
        <BackLick to={backLink.current}>Back</BackLick>
        <br></br>
        {filmById && (
          <img
            src={
              filmById.backdrop_path
                ? `https://image.tmdb.org/t/p/w500/${filmById.backdrop_path}`
                : defaultImage
            }
            alt="poster"
          />
        )}
        <div>
          <h1>{filmById.original_title}</h1>
          <p>Date reliase: {filmById.release_date}</p>

          <h2>OVERVIEW:</h2>
          {filmById.overview}
          <p></p>
          {filmById && (
            <>
              <h4>Genres: </h4>
              <p>{filmById.genres.map(({ name }) => name + ' ')}</p>
            </>
          )}
        </div>
        <h3>Adition information</h3>
        <ul>
          <AditionLi>
            <NavLink to="cast">click to Cast</NavLink>
          </AditionLi>
          <AditionLi>
            <NavLink to="rewiews">click to Rewiews</NavLink>
          </AditionLi>
        </ul>
        <Suspense fallback={<div>Please wait. Loading...</div>}>
          <Outlet />
        </Suspense>
      </Conteiner>
    </main>
  );
};

export default MovieDetails;
