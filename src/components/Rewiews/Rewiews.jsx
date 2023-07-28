import { rewiewsFromApiById } from '../../data/filmsFromApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';

const Rewiews = () => {
  const { movieId } = useParams();
  const [filmRewiewsList, setFilmRewiewsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    FilmCast(movieId);
  }, [movieId]);

  const FilmCast = async id => {
    setIsLoading(true);
    try {
      const { results } = await rewiewsFromApiById(id);
      setFilmRewiewsList(results);
    } catch (error) {
      setIsError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isError && <p>Oops..Somesing went wrong..</p>}
      {isLoading && <Loader></Loader>}
      {filmRewiewsList.length > 0 ? (
        <ul>
          {filmRewiewsList.map(({ author, id, content }) => (
            <li key={id}>
              {author}
              <br></br>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews</p>
      )}
    </>
  );
};

export default Rewiews;
