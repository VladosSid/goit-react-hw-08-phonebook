import { Outlet } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';

// import { Suspense } from 'react';

import Nav from '../Nav';

export function SharedLayout() {
  return (
    <>
      <Nav />
      <Flex pl="15px" pr="15px">
        <Outlet />
      </Flex>
    </>
  );
}

export default SharedLayout;
