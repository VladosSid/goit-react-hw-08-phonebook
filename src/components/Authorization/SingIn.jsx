import { useState } from 'react';
import { Heading, FormControl, Button, FormLabel } from '@chakra-ui/react';

import Password from './PasswordInput';
import EmailInput from './EmailInput';

export function SingIn() {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const submitUser = () => {
    console.log(login);
    console.log(email);
    console.log(password);
    console.log(passwordCheck);
  };

  return (
    <>
      <Heading as="h2" size="xl">
        SingIn
      </Heading>
      <FormControl onSubmit={submitUser}>
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
        <Password
          onChenge={setPassword}
          name={'password'}
          value={password}
          variant={'flushed'}
        />

        <FormLabel>Password</FormLabel>
        <Password
          onChenge={setPasswordCheck}
          name={'passwordCheck'}
          value={passwordCheck}
          variant={'unstyled'}
        />

        <Button
          disabled={passwordCheck === '' ?? (password === '' && 'disabled')}
          type="submit"
        >
          SingIn
        </Button>
      </FormControl>
    </>
  );
}

export default SingIn;
