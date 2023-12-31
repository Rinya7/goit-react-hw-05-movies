import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header></Header>
      <Suspense fallback={<div>Please wait. Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
