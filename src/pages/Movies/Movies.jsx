import {
  SearchbarCss,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
} from './Movies.styled';
import Loader from '../../components/Loader/Loader';
import { lazy } from 'react';
import { FcSearch } from 'react-icons/fc';
import { useState } from 'react';
import { searchFilmsFromApi } from '../../data/filmsFromApi';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
const MoviesList = lazy(() => import('../../components/MoviesList/MoviesList'));

const Movies = () => {
  const [listFilmsBySearch, setListFilmsBySearch] = useState([]);
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [searchMovies, setSearchMovies] = useSearchParams();
  const query = searchMovies.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }
    const HomePageRender = async () => {
      setIsLoading(true);

      try {
        const { results } = await searchFilmsFromApi(query);

        if (results.length > 0) {
          setListFilmsBySearch(results);
        } else {
          alert('Sorry we dont found films with you request');
        }
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    HomePageRender(query);
  }, [query, searchMovies]);

  const handleInputSearch = evt => {
    const { value } = evt.currentTarget;
    setValue(value);
  };

  const hundelSearchSubmit = evt => {
    evt.preventDefault();
    if (value.trim() === '') {
      return alert('Input what you search');
    }
    setSearchMovies({ query: value });
  };

  return (
    <main>
      <SearchbarCss>
        <SearchForm onSubmit={hundelSearchSubmit}>
          <SearchFormBtn type="submit">
            <FcSearch></FcSearch>
            <SearchFormBtnLabel>Search</SearchFormBtnLabel>
          </SearchFormBtn>

          <SearchFormInput
            type="text"
            autocomplete="off"
            autoFocus
            value={value}
            placeholder="Search film"
            onChange={handleInputSearch}
          />
        </SearchForm>
      </SearchbarCss>
      {isLoading && <Loader></Loader>}
      {isError && <p>Oops..Somesing went wrong..</p>}

      {listFilmsBySearch.length > 0 && (
        <MoviesList list={listFilmsBySearch} query={value}></MoviesList>
      )}
    </main>
  );
};

export default Movies;
