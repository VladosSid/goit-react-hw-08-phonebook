import { List, ListItem, Link, Flex } from '@chakra-ui/react';
import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import ButtonAuth from 'style/Button/ButtonComponent';

export function Authorization() {
  return (
    <Flex direction="column" align="center" gap="20px">
      <List
        display="flex"
        flexDirection="row"
        gap="80px"
        w="100%"
        justifyContent="space-around"
      >
        <ListItem>
          <ButtonAuth>
            <Link as={NavLink} to="SingIn">
              SingIn
            </Link>
          </ButtonAuth>
        </ListItem>
        <ListItem>
          <ButtonAuth>
            <Link as={NavLink} to="LogIn">
              LogIn
            </Link>
          </ButtonAuth>
        </ListItem>
      </List>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Flex>
  );
}
export default Authorization;
