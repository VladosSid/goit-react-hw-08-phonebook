import { useDispatch, useSelector } from 'react-redux';
import { Text, Button, Flex } from '@chakra-ui/react';

import { authSelectors, authOperations } from 'redux/auth';

export function UserMenu() {
  const despatch = useDispatch();
  const userEmail = useSelector(authSelectors.getUserEmail);

  const handleLogOut = e => {
    e.preventDefault();
    console.log('LogOut User');
    despatch(authOperations.logOut());
  };

  return (
    <Flex gap="10px" align="center" justify="center">
      <b>
        <Text fontSize="20px" color="rgb(106, 17, 145)">
          {userEmail}
        </Text>
      </b>
      <Button
        onClick={handleLogOut}
        bg="rgb(106, 17, 145)"
        color="white"
        _hover={{
          color: 'rgb(249, 104, 1)',
          bg: '#ebedf0',
        }}
      >
        Logout
      </Button>
    </Flex>
  );
}

export default UserMenu;
