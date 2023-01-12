import {
  Alert,
  AlertIcon,
  AlertTitle,
  useDisclosure,
  Box,
  AlertDescription,
  CloseButton,
  Button,
} from '@chakra-ui/react';

export function AlertInfo({ status, text }) {
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true });

  return isVisible ? (
    <Alert status="success">
      <AlertIcon />
      <Box>
        <AlertTitle>Success!</AlertTitle>
        <AlertDescription>
          Your application has been received. We will review your application
          and respond within the next 48 hours.
        </AlertDescription>
      </Box>
      <CloseButton
        alignSelf="flex-start"
        position="relative"
        right={-1}
        top={-1}
        onClick={onClose}
      />
    </Alert>
  ) : (
    <Button onClick={onOpen}>Show Alert</Button>
  );
  //   return (
  //     <Alert status={status} variant="left-accent">
  //       <AlertIcon />
  //       <AlertTitle>{text}</AlertTitle>
  //     </Alert>
  //   );
}
export default AlertInfo;
