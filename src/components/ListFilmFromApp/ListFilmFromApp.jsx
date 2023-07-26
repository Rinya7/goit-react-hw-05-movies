import { ListFilms } from './ListFilmFromApp.styled';
import { Link } from 'react-router-dom';
const ListFilmFromApp = ({ list }) => {
  return (
    <div className="container">
      <ListFilms>
        {list.map(({ original_title, id }) => (
          <Link to={`/movies/${id}`} key={id}>
            <li>{original_title}</li>
          </Link>
        ))}
      </ListFilms>
    </div>
  );
};

export default ListFilmFromApp;
