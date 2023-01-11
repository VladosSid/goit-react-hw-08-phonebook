import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';

import { EmailInput } from 'components/Authorization/EmailInput/EmailInput';
import { PasswordInput } from 'components/Authorization/PasswordInput/PasswordInput';
import { contactsOperations } from 'redux/contacts';

export function FormAddContacts() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const sendContsct = e => {
    e.preventDefault();
    console.log(e.target);
    dispatch(contactsOperations.addContacts({ name, number }));
  };

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
        <Button variant="ghost" onClick={sendContsct}>
          Send contact
        </Button>
      </ModalFooter>
    </>
  );
}

export default FormAddContacts;
