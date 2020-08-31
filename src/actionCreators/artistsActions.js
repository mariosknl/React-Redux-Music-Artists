import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

require('dotenv').config({ path: '../.env' });

const apiKey = process.env.REACT_APP_API_KEY;

export const fetchImages = createAsyncThunk(
  'artists/artistImage',
  async args => {
    const options = {
      url: `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${args}`,
    };
    const response = await axios(options);
    return response.data.artists[0].strArtistThumb;
  },
);

export const fetchArtists = createAsyncThunk(
  'artists/fetchArtist',
  async (args, thunkAPI) => {
    const options = {
      method: 'GET',
      url: `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${args}&api_key=${apiKey}&format=json`,
    };
    const response = await axios(options);
    thunkAPI.dispatch(fetchImages(args));
    return response.data;
  },
);
