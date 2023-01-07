import { Heading, Flex, List, ListItem } from '@chakra-ui/react';

export function Home() {
  return (
    <Flex direction="column" gap="15px" align="center">
      <Heading as="h1" size="3xl">
        Your phone book.
      </Heading>
      <Heading as="h2" size="xl">
        Save your contacts to always be in touch:
      </Heading>

      <List fontSize={'26px'}>
        <ListItem>- personal account;</ListItem>
        <ListItem>- adding and removing contacts;</ListItem>
        <ListItem>- search by name;</ListItem>
      </List>
    </Flex>
  );
}

export default Home;
