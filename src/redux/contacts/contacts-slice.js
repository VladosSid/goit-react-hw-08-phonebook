import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contacts-operations';

const initialState = {
  contacts: [],
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactsOperations.fetchContacts.fulfilled](state, action) {},
    [contactsOperations.fetchContacts.fulfilled](state, action) {
      state.error = action.payload;
    },

    [contactsOperations.addContacts.fulfilled](state, action) {},
    [contactsOperations.addContacts.rejected](state, action) {
      state.error = action.payload;
    },

    [contactsOperations.removeContacts.fulfilled](state, action) {},
    [contactsOperations.removeContacts.fulfilled](state, action) {
      state.error = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
