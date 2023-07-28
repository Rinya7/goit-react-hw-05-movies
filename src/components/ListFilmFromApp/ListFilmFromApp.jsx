import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ListFilms } from './ListFilmFromApp.styled';
import { Link } from 'react-router-dom';
const ListFilmFromApp = ({ list }) => {
  const location = useLocation();

  return (
    <div className="container">
      <ListFilms>
        {list.map(({ original_title, id }) => (
          <Link to={`/movies/${id}`} key={id} state={{ from: location }}>
            {' '}
            <li>{original_title}</li>
          </Link>
        ))}
      </ListFilms>
    </div>
  );
};

export default ListFilmFromApp;

ListFilmFromApp.propTypes = {
  list: PropTypes.array,
};
