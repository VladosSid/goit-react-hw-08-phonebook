import { Outlet } from 'react-router-dom';
// import { Suspense } from 'react';

import Nav from '../Nav';

export function SharedLayout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default SharedLayout;
