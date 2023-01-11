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
    [contactsOperations.fetchContacts.fulfilled](state, action) {
      state.contacts = action.payload;
    },
    [contactsOperations.fetchContacts.rejected](state, action) {
      // state.error = action.payload;
    },

    [contactsOperations.addContacts.fulfilled](state, action) {
      // console.log(action.payload);
    },
    [contactsOperations.addContacts.rejected](state, action) {
      state.error = action.payload;
    },

    [contactsOperations.removeContacts.fulfilled](state, action) {},
    [contactsOperations.removeContacts.rejected](state, action) {
      state.error = action.payload;
    },
  },
});

export default contactsSlice.reducer;
