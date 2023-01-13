import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
  isGetingCurentUser: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = { ...action.payload.user };
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.register.rejected](state, action) {
      state.error = action.payload;
    },

    [authOperations.logIn.fulfilled](state, action) {
      state.user = { ...action.payload.user };
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.rejected](state, action) {
      state.error = action.payload;
    },

    [authOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.logOut.rejected](state, action) {
      state.error = action.payload;
    },

    [authOperations.fetchCurrentUser.pending](state, action) {
      state.isGetingCurentUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = { ...action.payload };
      state.isLoggedIn = true;
      state.isGetingCurentUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state, action) {
      state.error = action.payload;
      state.isGetingCurentUser = false;
    },
  },
});

export default authSlice.reducer;
