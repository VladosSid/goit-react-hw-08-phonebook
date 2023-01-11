import { useState } from 'react';
import { Heading, FormControl, Button, FormLabel } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';

import { authOperations } from 'redux/auth';

import PasswordInput from './PasswordInput';
import EmailInput from './EmailInput';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required().trim(),
  password: yup.string().min(7).required().trim(),
});

export function SingIn() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const submitUser = e => {
    e.preventDefault();
    const user = { name, email, password };
    if (password === passwordCheck) {
      schema
        .isValid({
          name,
          email,
          password,
        })
        .then(function (valid) {
          if (valid) {
            dispatch(authOperations.register(user));
            return;
          }
          console.log(
            'Не верный формат данных!!! Пароль должен быть 7+ символов, пароли должны совпадать!!!'
          );
        });
      return;
    }
    console.log('Пароли не совпадают!!!');
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
            onChange={setName}
            value={name}
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
            onChange={setPassword}
            name={'password'}
            value={password}
            variant={'flushed'}
            type={'password'}
            show={true}
          />

          <FormLabel>Password</FormLabel>
          <PasswordInput
            onChange={setPasswordCheck}
            name={'passwordCheck'}
            value={passwordCheck}
            variant={'unstyled'}
            type={'password'}
            show={true}
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
