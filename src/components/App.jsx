import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';

import SharedLayout from './Shared';
import { authOperations } from 'redux/auth';
import { useDispatch } from 'react-redux';

const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts'));
const Authorization = lazy(() => import('pages/Authorization'));
const SingIn = lazy(() => import('./Authorization/SingIn'));
const LogIn = lazy(() => import('./Authorization/LogIn'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/authorization" element={<Authorization />}>
            <Route path="SingIn" element={<SingIn />} />
            <Route path="LogIn" element={<LogIn />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
