import { useState } from 'react';
import { Heading, FormControl, Button, FormLabel } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

import { authOperations } from 'redux/auth';

import PasswordInput from './PasswordInput';
import EmailInput from './EmailInput';

export function SingIn() {
  const dispatch = useDispatch();

  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const submitUser = e => {
    e.preventDefault();
    const user = { name: login, email, password };
    dispatch(authOperations.register(user));
  };

  return (
    <>
      <Heading as="h2" size="xl">
        SingIn
      </Heading>
      <FormControl>
        <form onSubmit={submitUser}>
          <FormLabel>Name</FormLabel>
          <EmailInput
            onChange={setLogin}
            value={login}
            name={'Name'}
            variant={'filled'}
          />

          <FormLabel>Email</FormLabel>
          <EmailInput
            onChange={setEmail}
            value={email}
            name={'email'}
            variant={'outline'}
          />

          <FormLabel>Password</FormLabel>
          <PasswordInput
            onChenge={setPassword}
            name={'password'}
            value={password}
            variant={'flushed'}
          />

          <FormLabel>Password</FormLabel>
          <PasswordInput
            onChenge={setPasswordCheck}
            name={'passwordCheck'}
            value={passwordCheck}
            variant={'unstyled'}
          />

          <Button
            // disabled={passwordCheck === '' ?? (password === '' && 'disabled')}
            // tipe="submit"
            type="submit"
          >
            SingIn
          </Button>
        </form>
      </FormControl>
    </>
  );
}

export default SingIn;
