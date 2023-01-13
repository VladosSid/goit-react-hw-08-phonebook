import {
  Heading,
  FormControl,
  FormLabel,
  Flex,
  OrderedList,
  ListItem,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { useDispatch, useSelector } from 'react-redux';

import EmailInput from 'components/Authorization/EmailInput';

import ContactItems from 'components/Contacts';

export function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.allContacts);

  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const removeContacts = id => {
    dispatch(contactsOperations.removeContacts(id));
  };

  return (
    <Flex direction="column" align="center" justify="center" gap="20px">
      <Heading as="h1" size="2xl">
        Contacts
      </Heading>

      <FormControl width="400px">
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

      <Heading as="h2" size="lg">
        Contacts List
      </Heading>
      <OrderedList display="flex" flexDirection="column" gap="10px">
        {contacts !== []
          ? contacts
              .filter(contact =>
                contact.name.toLowerCase().includes(search.toLocaleLowerCase())
              )
              .map(({ name, number, id }) => (
                <ListItem
                  display="flex"
                  justifyContent="space-between"
                  direction="row"
                  gap="20px"
                  key={id}
                >
                  <ContactItems
                    name={name}
                    number={number}
                    id={id}
                    remove={removeContacts}
                  />
                </ListItem>
              ))
          : null}
      </OrderedList>
    </Flex>
  );
}

export default Contacts;
