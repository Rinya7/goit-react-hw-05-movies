import { castFromApiById } from '../../data/filmsFromApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import defaultImage from '../../images/not-found-image.jpg';
import { CastImg } from './Cast.styled';
import Loader from '../../components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [filmCastList, setFilmCastList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    FilmCast(movieId);
  }, [movieId]);

  const FilmCast = async id => {
    setIsLoading(true);
    try {
      const { cast } = await castFromApiById(id);
      setFilmCastList(cast);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isError && <p>Oops..Somesing went wrong..</p>}
      {isLoading && <Loader></Loader>}
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
    </div>
  );
};

export default Cast;
