import { NavLink } from 'react-router-dom';
import { Flex, List, ListItem, Text, Link } from '@chakra-ui/react';

export function Nav() {
  return (
    <Flex direction="column">
      <Flex
        direction="row"
        justify="space-between"
        align="center"
        bg="rgb(249, 104, 1)"
        pl="15px"
        pr="15px"
        mb="20px"
        h="80px"
      >
        <nav>
          <List flex-direction="row" display="flex" gap="20px">
            <ListItem fontSize="28px" color="rgb(106, 17, 145)">
              <b>
                <Link as={NavLink} to="/">
                  Home
                </Link>
              </b>
            </ListItem>
            <ListItem fontSize="28px" color="rgb(106, 17, 145)">
              <b>
                <Link as={NavLink} to="/contacts">
                  Contacts
                </Link>
              </b>
            </ListItem>
          </List>
        </nav>
        <List flex-direction="row" display="flex" gap="20px">
          <ListItem fontSize="28px" color="rgb(106, 17, 145)">
            <b>
              <Link as={NavLink} to="">
                Register
              </Link>
            </b>
          </ListItem>
          <ListItem fontSize="28px" color="rgb(106, 17, 145)">
            <b>
              <Link as={NavLink} to="">
                Login
              </Link>
            </b>
          </ListItem>
        </List>

        <Text fontSize="20px">Welcome, NameUser</Text>
      </Flex>
    </Flex>
  );
}

export default Nav;
