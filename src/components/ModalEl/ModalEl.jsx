import { Modal, ModalOverlay, ModalContent } from '@chakra-ui/react';

import { FormAddContacts } from './FormAddContact/FormAddContacts';

export function ModalEl({ isOpen, onClose, children }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>{children}</ModalContent>
    </Modal>
  );
}

export default ModalEl;
