import { useState } from 'react';
import {
  FormLabel,
  InputRightElement,
  InputGroup,
  Input,
  Button,
} from '@chakra-ui/react';

export const PasswordInput = ({
  onChange,
  name,
  value,
  variant,
  type,
  show,
}) => {
  const [showPass, setShowPass] = useState(false);

  const handleClickPass = () => setShowPass(!showPass);

  return (
    <>
      <FormLabel>
        <InputGroup size="md">
          <Input
            value={value}
            onChange={e => {
              onChange(e.target.value);
            }}
            type={showPass ? 'text' : `${type}`}
            placeholder={`Enter ${name}`}
            variant={variant}
            size="md"
            name={name}
          />

          <InputRightElement width="4.5rem">
            {show ? (
              <Button h="1.75rem" size="sm" onClick={handleClickPass}>
                {showPass ? 'Hide' : 'Show'}
              </Button>
            ) : null}
          </InputRightElement>
        </InputGroup>
      </FormLabel>
    </>
  );
};

export default PasswordInput;
