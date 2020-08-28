import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

require('dotenv').config({ path: '../.env' });

const apiKey = process.env.REACT_APP_API_KEY;

const fetchArtists = createAsyncThunk('artists/fetchArtist', async args => {
  const options = {
    method: 'GET',
    url: `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${args}&api_key=${apiKey}&format=json`,
  };
  const response = await axios(options);
  return response.data;
});

export default { fetchArtists };
