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
//import { useSearchParams } from 'react-router-dom';

const ListFilmFromApp = lazy(() =>
  import('../../components/ListFilmFromApp/ListFilmFromApp')
);
const Movies = () => {
  const [listFilmsBySearch, setListFilmsBySearch] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchMovies, setSearchMovies] = useSearchParams();
  const query = searchMovies.get('query');

  useEffect(() => {
    !query && setSearchMovies({});
  }, [query, setSearchMovies]);

  const handleInputSearch = evt => {
    const { value } = evt.currentTarget;
    setSearchMovies({ query: value });
  };

  const HomePageRender = async search => {
    setListFilmsBySearch([]);
    setIsLoading(true);
    setIsError(false);
    try {
      const { results } = await searchFilmsFromApi(search);
      if (results.length > 0) {
        setListFilmsBySearch(results);
      } else {
        alert('Sorry we dont found films with you request');
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  const hundelSearchSubmit = evt => {
    evt.preventDefault();
    if (!query || query.trim() === '') {
      return alert('Input what you search');
    }
    HomePageRender(query);
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
            value={!query ? '' : query}
            placeholder="Search film"
            onChange={handleInputSearch}
          />
        </SearchForm>
      </SearchbarCss>
      {isLoading && <Loader></Loader>}
      {isError && <p>Oops..Somesing went wrong..</p>}

      {listFilmsBySearch.length > 0 && (
        <ListFilmFromApp
          list={listFilmsBySearch}
          query={query}
        ></ListFilmFromApp>
      )}
    </main>
  );
};

export default Movies;
