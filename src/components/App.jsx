import { Routes, Route } from 'react-router-dom';

import SharedLayout from './Shared';
import Home from 'pages/Home';
import Contacts from 'pages/Contacts';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
};
