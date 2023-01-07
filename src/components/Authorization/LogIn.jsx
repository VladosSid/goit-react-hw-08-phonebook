import { useState } from 'react';
import { Heading, FormControl, FormLabel, Button } from '@chakra-ui/react';

import Password from './PasswordInput';
import EmailInput from './EmailInput';

export function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Heading as="h2" size="xl">
        LogIn
      </Heading>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <EmailInput
          onChange={setEmail}
          value={email}
          name={'email'}
          variant={'filled'}
        />

        <FormLabel>Password</FormLabel>
        <Password
          onChenge={setPassword}
          name={'password'}
          value={password}
          variant={'unstyled'}
        />

        <Button
          disabled={password === '' ?? (email === '' && 'disabled')}
          type="submit"
        >
          SingIn
        </Button>
      </FormControl>
    </>
  );
}

export default LogIn;
