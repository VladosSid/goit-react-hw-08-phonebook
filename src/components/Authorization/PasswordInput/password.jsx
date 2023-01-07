import { useState } from 'react';
import {
  FormLabel,
  InputRightElement,
  InputGroup,
  Input,
  Button,
} from '@chakra-ui/react';

export const Password = ({ onChenge, name, value, variant }) => {
  const [showPass, setShowPass] = useState(false);

  const handleClickPass = () => setShowPass(!showPass);

  return (
    <>
      <FormLabel>
        <InputGroup size="md">
          <Input
            value={value}
            onChange={e => {
              onChenge(e.target.value);
            }}
            type={showPass ? 'text' : 'password'}
            placeholder="Enter password"
            variant={variant}
            size="md"
            name={name}
          />

          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClickPass}>
              {showPass ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormLabel>
    </>
  );
};

export default Password;
