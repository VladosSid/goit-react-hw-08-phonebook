import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contacts-operations';

const initialState = {
  contacts: [],
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    clearContacts(state, action) {
      state.contacts = action.payload;
    },
  },
  extraReducers: {
    [contactsOperations.fetchContacts.fulfilled](state, action) {
      state.contacts = action.payload;
    },
    [contactsOperations.fetchContacts.rejected](state, action) {
      state.error = action.payload;
    },

    [contactsOperations.addContacts.fulfilled](state, action) {
      state.contacts = [action.payload, ...state.contacts];
    },
    [contactsOperations.addContacts.rejected](state, action) {
      state.error = action.payload;
    },

    [contactsOperations.removeContacts.fulfilled](state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );
    },
    [contactsOperations.removeContacts.rejected](state, action) {
      state.error = action.payload;
    },
  },
});

export const { clearContacts } = contactsSlice.actions;
export default contactsSlice.reducer;
