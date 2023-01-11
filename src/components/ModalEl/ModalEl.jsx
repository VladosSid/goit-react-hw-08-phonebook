import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';

import { FormAddContacts } from './FormAddContact/FormAddContacts';

export function ModalEl({ isOpen, onClose }) {
  // const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <FormAddContacts onClose={onClose} />
      </ModalContent>
    </Modal>
  );
}

export default ModalEl;
