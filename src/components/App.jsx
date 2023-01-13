import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';

import SharedLayout from './Shared';
import { authOperations } from 'redux/auth';
import { useDispatch, useSelector } from 'react-redux';

import { ProtectedRoute } from 'components/Routs';
import { PublicRoute } from 'components/Routs';
import { authSelectors } from 'redux/auth';

const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts'));
const Authorization = lazy(() => import('pages/Authorization'));
const SingIn = lazy(() => import('./Authorization/SingIn'));
const LogIn = lazy(() => import('./Authorization/LogIn'));

export const App = () => {
  const dispatch = useDispatch();
  const istGetingCurentUser = useSelector(authSelectors.getGetingCurentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {istGetingCurentUser ? null : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route
              path="/contacts"
              element={
                <ProtectedRoute redirectTo={'/authorization'}>
                  <Contacts />
                </ProtectedRoute>
              }
            />

            <Route
              path="/authorization"
              element={
                <PublicRoute restricted redirectTo="/contacts">
                  <Authorization />
                </PublicRoute>
              }
            >
              <Route path="SingIn" element={<SingIn />} />
              <Route path="LogIn" element={<LogIn />} />
            </Route>
          </Route>
        </Routes>
      )}
    </>
  );
};
