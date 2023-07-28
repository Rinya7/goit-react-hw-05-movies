import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ListFilms } from './MoviesList.styled';
import { Link } from 'react-router-dom';
const MoviesList = ({ list }) => {
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

export default MoviesList;

MoviesList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
