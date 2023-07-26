import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

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
      <Suspense fallback={<div>Please wait. Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
