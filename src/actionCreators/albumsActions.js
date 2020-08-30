import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

require('dotenv').config({ path: '../.env' });

const fetchAlbums = createAsyncThunk('artists/fetchAlbums', async args => {
  const options = {
    method: 'GET',
    url: `https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=${args}`,
  };
  const response = await axios(options);
  return response.data.album;
});

export default { fetchAlbums };
