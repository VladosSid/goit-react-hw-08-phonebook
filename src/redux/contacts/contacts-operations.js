import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/contacts`);
      return data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const addContacts = createAsyncThunk(
  'contacts/addConatct',
  async (dataContact, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', dataContact);
      Notiflix.Notify.success('Contact successfully added.');

      return data;
    } catch (error) {
      Notiflix.Notify.failure('Error adding contact!!!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const removeContacts = createAsyncThunk(
  'contacts/removeContacts',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      Notiflix.Notify.success('Contact deleted successfully.');

      return data;
    } catch (error) {
      Notiflix.Notify.failure('Error remove contact!!!');

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const operations = {
  fetchContacts,
  addContacts,
  removeContacts,
};

export default operations;
