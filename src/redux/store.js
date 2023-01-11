import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth-slice';
import contactsReducer from './contacts/contacts-slice';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    contacts: contactsReducer,
  },
});

export const persistor = persistStore(store);
