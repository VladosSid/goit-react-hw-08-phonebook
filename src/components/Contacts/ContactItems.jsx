import { Button, Text, Flex } from '@chakra-ui/react';

export function ContactItem({ id, name, number, remove }) {
  return (
    <>
      <Text fontSize="2xl">{name}:</Text>

      <Flex direction="row">
        <Text fontSize="2xl">{number}</Text>

        <Button type="button" onClick={() => remove(id)}>
          Delete
        </Button>
      </Flex>
    </>
  );
}

export default ContactItem;
