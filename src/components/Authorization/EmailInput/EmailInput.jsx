import { FormLabel, Input } from '@chakra-ui/react';

export const EmailInput = ({ onChange, value, name, variant }) => {
  return (
    <>
      <FormLabel>
        <Input
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={`Enter ${name}`}
          variant={variant}
          size="md"
          type={name}
          name={name}
        />
      </FormLabel>
    </>
  );
};

export default EmailInput;
