import { NavLink } from 'react-router-dom';
import {
  Flex,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';

import LinkNav from '../../style/NavLinks/NavLinkComponent';

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
        <Breadcrumb>
          <BreadcrumbItem fontSize="28px" color="rgb(106, 17, 145)">
            <b>
              <BreadcrumbLink as={NavLink} to="/">
                Home
              </BreadcrumbLink>
            </b>
          </BreadcrumbItem>
          <BreadcrumbItem fontSize="28px" color="rgb(106, 17, 145)">
            <b>
              <BreadcrumbLink as={NavLink} to="/contacts">
                Contacts
              </BreadcrumbLink>
            </b>
          </BreadcrumbItem>
        </Breadcrumb>

        <LinkNav as={NavLink} to="/authorization">
          Authorization
        </LinkNav>

        <Text fontSize="20px">Welcome, NameUser</Text>
      </Flex>
    </Flex>
  );
}

export default Nav;
