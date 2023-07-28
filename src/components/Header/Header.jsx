import { NavLink } from 'react-router-dom';

import { HeaderLi, HeaderUl, HeaderNav } from './Header.styled';
const Header = () => {
  return (
    <>
      <HeaderNav>
        <HeaderUl>
          <HeaderLi>
            <NavLink to="/">Home</NavLink>
          </HeaderLi>
          <HeaderLi>
            <NavLink to="/movies">Movies</NavLink>
          </HeaderLi>
        </HeaderUl>
      </HeaderNav>
    </>
  );
};

export default Header;
