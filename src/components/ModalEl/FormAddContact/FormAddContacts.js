import { useState } from 'react';
import {
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';

import { EmailInput } from 'components/Authorization/EmailInput/EmailInput';
import { PasswordInput } from 'components/Authorization/PasswordInput/PasswordInput';

export function FormAddContacts({ onClose }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  return (
    <>
      <ModalHeader>Add contacts</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <EmailInput
          variant={'filled'}
          onChange={setName}
          name="name"
          value={name}
        />

        <PasswordInput
          variant={'outline'}
          onChange={setNumber}
          name="number"
          value={number}
          type={'tel'}
          show={false}
        />
      </ModalBody>

      <ModalFooter>
        <Button colorScheme="blue" mr={3} onClick={onClose}>
          Close
        </Button>
        <Button variant="ghost">Send contact</Button>
      </ModalFooter>
    </>
  );
}

export default FormAddContacts;
