import { Routes, Route } from 'react-router-dom';

import SharedLayout from './Shared';
import Home from 'pages/Home';
import Contacts from 'pages/Contacts';
import Authorization from 'pages/Authorization';
import SingIn from './Authorization/SingIn';
import LogIn from './Authorization/LogIn';

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
