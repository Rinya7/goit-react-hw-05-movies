import { rewiewsFromApiById } from '../../data/filmsFromApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Rewiews = () => {
  const { movieId } = useParams();
  const [filmRewiewsList, setFilmRewiewsList] = useState([]);

  useEffect(() => {
    FilmCast(movieId);
  }, [movieId]);

  const FilmCast = async id => {
    try {
      const { results } = await rewiewsFromApiById(id);
      setFilmRewiewsList(results);
    } catch (error) {
      alert(error.message);
    }
  };
  console.log('filmRewiewsList', filmRewiewsList);
  return (
    <>
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
        <p>Not information</p>
      )}
    </>
  );
};

export default Rewiews;
