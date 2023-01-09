import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchContacts = createAsyncThunk(
  'contacts/addConatct',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/contacts`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
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
  'contacts/addConatct',
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
