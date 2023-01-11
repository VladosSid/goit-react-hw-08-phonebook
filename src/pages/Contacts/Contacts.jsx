import { Heading, FormControl, FormLabel, Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { useDispatch, useSelector } from 'react-redux';

import EmailInput from 'components/Authorization/EmailInput';

export function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.allContacts);
  console.log(contacts);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, []);

  const searchContact = () => {
    console.log(search);
  };

  return (
    <Flex direction="column" align="center" justify="center" gap="20px">
      <Heading as="h1">Contacts</Heading>

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
