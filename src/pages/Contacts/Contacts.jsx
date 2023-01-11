import {
  Heading,
  FormControl,
  FormLabel,
  Flex,
  Button,
  useDisclosure,
  // Modal,
  // ModalOverlay,
  // ModalContent,
  // ModalHeader,
  // ModalCloseButton,
  // ModalBody,
  // Lorem,
  // ModalFooter,
} from '@chakra-ui/react';
import { useState } from 'react';
import { contactsOperations } from 'redux/contacts';
import { ModalEl } from 'components/ModalEl//ModalEl';

import EmailInput from 'components/Authorization/EmailInput';

export function Contacts() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [search, setSearch] = useState('');

  const searchContact = () => {
    console.log(search);
  };

  return (
    <Flex direction="column" align="center" justify="center" gap="20px">
      <Heading as="h1">Contacts</Heading>

      <Button onClick={onOpen}>Add contact</Button>

      <ModalEl isOpen={isOpen} onClose={onClose} />

      <FormControl>
        <form>
          <FormLabel>Search Contacts</FormLabel>
          <EmailInput
            onChange={setSearch}
            value={search}
            name={'name'}
            variant={'filled'}
          />
        </form>
      </FormControl>

      <h2>Contacts List</h2>
      <ul>
        {/* {contacts.map({name, number, id} => <contactItem name={name} number={number} id={id} />)} */}
      </ul>
    </Flex>
  );
}

export default Contacts;
