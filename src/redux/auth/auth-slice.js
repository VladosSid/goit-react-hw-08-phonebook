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
    [authOperations.register.fulfilled](state, action) {},
    [authOperations.register.rejected](state, action) {
      state.error = action.payload;
    },

    [authOperations.logIn.fulfilled](state, action) {},
    [authOperations.logIn.rejected](state, action) {
      state.error = action.payload;
    },

    [authOperations.logOut.fulfilled](state, action) {},
    [authOperations.logOut.rejected](state, action) {
      state.error = action.payload;
    },

    [authOperations.fetchCurrentUser.fulfilled](state, action) {},
    [authOperations.fetchCurrentUser.rejected](state, action) {
      state.error = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
