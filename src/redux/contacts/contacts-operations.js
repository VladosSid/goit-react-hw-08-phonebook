import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const removeContacts = createAsyncThunk(
  'contacts/removeContacts',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const operations = {
  fetchContacts,
  addContacts,
  removeContacts,
};

export default operations;
