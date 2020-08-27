import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

require('dotenv').config({ path: '../.env' });

const apiKey = process.env.REACT_APP_API_KEY;

const fetchAlbums = createAsyncThunk('artists/fetchAlbums', async args => {
  const options = {
    method: 'GET',
    url: `http://ws.audioscrobbler.com//2.0/?method=artist.gettopalbums&artist=${args}&api_key=${apiKey}&format=json`,
  };
  const response = await axios(options);
  console.log(response.data.topalbums.album.slice(0, 5));
  return response.data.topalbums.album.slice(0, 5);
});

export default { fetchAlbums };
