import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './Shared';

const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts'));
const Authorization = lazy(() => import('pages/Authorization'));
const SingIn = lazy(() => import('./Authorization/SingIn'));
const LogIn = lazy(() => import('./Authorization/LogIn'));

export const App = () => {
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
