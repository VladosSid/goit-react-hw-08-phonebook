import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';

import {
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';

import { EmailInput } from 'components/Authorization/EmailInput/EmailInput';
import { PasswordInput } from 'components/Authorization/PasswordInput/PasswordInput';
import { contactsOperations, contactsSelectors } from 'redux/contacts';

export function FormAddContacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.allContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const sendContsct = () => {
    dispatch(contactsOperations.addContacts({ name, number }));
    setName('');
    setNumber('');
  };

  const checkMatches = e => {
    e.preventDefault();

    const normalizedFilter = name.toLocaleLowerCase();

    const checkName = contacts.some(
      contact => contact.name.toLocaleLowerCase() === normalizedFilter
    );

    checkName
      ? Notiflix.Notify.failure(`${name} is already in contacts.`)
      : sendContsct();
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
        <Button variant="ghost" onClick={checkMatches}>
          Send contact
        </Button>
      </ModalFooter>
    </>
  );
}

export default FormAddContacts;
