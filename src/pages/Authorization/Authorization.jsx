import { List, ListItem } from '@chakra-ui/react';

import ButtonAuth from 'style/Button/ButtonComponent';

export function Authorization() {
  return (
    <List
      display="flex"
      flexDirection="row"
      gap="20px"
      w="100%"
      justifyContent="space-around"
    >
      <ListItem>
        <ButtonAuth>SingIn</ButtonAuth>
      </ListItem>
      <ListItem>
        <ButtonAuth>LogIn</ButtonAuth>
      </ListItem>
    </List>
  );
}
export default Authorization;
