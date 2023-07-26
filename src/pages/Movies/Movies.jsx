import {
  SearchbarCss,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
} from './Movies.styled';
import { lazy } from 'react';
import { FcSearch } from 'react-icons/fc';
import { useState } from 'react';
import { searchFilmsFromApi } from '../../data/filmsFromApi';

const ListFilmFromApp = lazy(() =>
  import('../../components/ListFilmFromApp/ListFilmFromApp')
);
const Movies = () => {
  const [searchWord, setSearchWord] = useState('');
  const [listFilmsBySearch, setListFilmsBySearch] = useState([]);

  const handleInputSearch = evt => {
    const { value } = evt.currentTarget;
    setSearchWord(value);
  };

  const HomePageRender = async search => {
    setListFilmsBySearch([]);
    try {
      const { results } = await searchFilmsFromApi(search);
      if (results.length > 0) {
        setListFilmsBySearch(results);
      } else {
        alert('Sorry we dont found films with you request');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const hundelSearchSubmit = evt => {
    evt.preventDefault();
    if (searchWord.trim() === '') {
      return alert('Input what you search');
    }
    HomePageRender(searchWord);

    setSearchWord('');
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
            value={searchWord}
            placeholder="Search film"
            onChange={handleInputSearch}
          />
        </SearchForm>
      </SearchbarCss>

      <ListFilmFromApp list={listFilmsBySearch}></ListFilmFromApp>
    </main>
  );
};

export default Movies;
