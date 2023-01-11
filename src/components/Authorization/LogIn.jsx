import { useState } from 'react';
import { Heading, FormControl, FormLabel, Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';

import { authOperations } from 'redux/auth';

import PasswordInput from './PasswordInput';
import EmailInput from './EmailInput';

const schema = yup.object().shape({
  email: yup.string().email().required().trim(),
  password: yup.string().min(7).required().trim(),
});

export function LogIn() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitUser = e => {
    e.preventDefault();
    const user = { email, password };

    schema
      .isValid({
        email,
        password,
      })
      .then(function (valid) {
        if (valid) {
          dispatch(authOperations.logIn(user));

          return;
        }
        console.log(
          'Не верный формат данных!!! Пароль должен быть 7+ символов, пароли должны совпадать!!!'
        );
      });
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
            onChange={setPassword}
            name={'password'}
            value={password}
            variant={'unstyled'}
            type={'password'}
            show={true}
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
