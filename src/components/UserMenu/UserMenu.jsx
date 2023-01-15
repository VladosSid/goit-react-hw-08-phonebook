import { useDispatch, useSelector } from 'react-redux';
import { Text, Button, Flex } from '@chakra-ui/react';

import { authSelectors, authOperations } from 'redux/auth';
import { clearContacts } from 'redux/contacts/contacts-slice';

export function UserMenu() {
  const dispatch = useDispatch();
  const userEmail = useSelector(authSelectors.getUserEmail);

  const handleLogOut = e => {
    e.preventDefault();
    dispatch(authOperations.logOut());
    dispatch(clearContacts([]));
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
