import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
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

    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      // console.log(action.payload);
      state.user = { ...action.payload };
      state.isLoggedIn = true;
    },
    [authOperations.fetchCurrentUser.rejected](state, action) {
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
