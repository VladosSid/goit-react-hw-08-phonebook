import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Flex } from '@chakra-ui/react';

import Loader from 'components/Loader';

import Nav from '../Nav';

export function SharedLayout() {
  return (
    <>
      <Nav />
      <Flex pl="15px" pr="15px" justify="center">
        <Suspense
          fallback={
            <div>
              <Loader />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </Flex>
    </>
  );
}

export default SharedLayout;
