import { castFromApiById } from '../../data/filmsFromApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import defaultImage from '../../images/not-found-image.jpg';
import { CastImg } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [filmCastList, setFilmCastList] = useState([]);

  useEffect(() => {
    FilmCast(movieId);
  }, [movieId]);

  const FilmCast = async id => {
    try {
      const { cast } = await castFromApiById(id);

      setFilmCastList(cast);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ul>
      {filmCastList.map(({ name, id, profile_path }) => (
        <li key={id}>
          {name}
          <br></br>
          <CastImg
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                : defaultImage
            }
            alt=""
          />
        </li>
      ))}
    </ul>
  );
};

export default Cast;
