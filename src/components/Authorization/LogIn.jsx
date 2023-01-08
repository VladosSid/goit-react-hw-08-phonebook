import { useState } from 'react';
import { Heading, FormControl, FormLabel, Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

import { authOperations } from 'redux/auth';

import PasswordInput from './PasswordInput';
import EmailInput from './EmailInput';

export function LogIn() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitUser = e => {
    e.preventDefault();
    const user = { email, password };
    dispatch(authOperations.logIn(user));
  };

  return (
    <>
      <Heading as="h2" size="xl">
        LogIn
      </Heading>
      <FormControl>
        <form onSubmit={submitUser}>
          <FormLabel>Email</FormLabel>
          <EmailInput
            onChange={setEmail}
            value={email}
            name={'email'}
            variant={'filled'}
          />

          <FormLabel>Password</FormLabel>
          <PasswordInput
            onChenge={setPassword}
            name={'password'}
            value={password}
            variant={'unstyled'}
          />

          <Button
            type="submit"
            disabled={password === '' ?? (email === '' && 'disabled')}
          >
            SingIn
          </Button>
        </form>
      </FormControl>
    </>
  );
}

export default LogIn;
