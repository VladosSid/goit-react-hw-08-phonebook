import { NavLink, useMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  useDisclosure,
} from '@chakra-ui/react';

import { authSelectors } from 'redux/auth';
import LinkNav from '../../style/NavLinks/NavLinkComponent';
import UserMenu from 'components/UserMenu';
import ModalEl from 'components/ModalEl';
import FormAddContacts from 'components/ModalEl/FormAddContact';

export function Nav() {
  const { onOpen, isOpen, onClose } = useDisclosure({ id: 'addContacts' });

  const match = useMatch('/contacts');

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const istGetingCurentUser = useSelector(authSelectors.getGetingCurentUser);

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

          {isLoggedIn || istGetingCurentUser ? (
            <BreadcrumbItem fontSize="28px" color="rgb(106, 17, 145)">
              <b>
                <BreadcrumbLink as={NavLink} to="/contacts">
                  Contacts
                </BreadcrumbLink>
              </b>
            </BreadcrumbItem>
          ) : null}
        </Breadcrumb>

        {match ? <Button onClick={onOpen}>Add contact</Button> : null}
        <ModalEl
          isOpen={isOpen}
          onClose={onClose}
          children={<FormAddContacts />}
        />
        {!istGetingCurentUser ? (
          isLoggedIn ? (
            <UserMenu />
          ) : (
            <LinkNav as={NavLink} to="/authorization">
              Authorization
            </LinkNav>
          )
        ) : null}
      </Flex>
    </Flex>
  );
}

export default Nav;
