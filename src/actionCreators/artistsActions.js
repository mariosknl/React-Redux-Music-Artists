import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

require('dotenv').config({ path: '../.env' });

const apiKey = process.env.REACT_APP_API_KEY;

const fetchImages = createAsyncThunk('artists/artistImage', async args => {
  const options = {
    method: 'GET',
    url:
      'https://cors-anywhere.herokuapp.com/https://musicbrainz.org/release/76df3287-6cda-33eb-8e9a-044b5e15ffdd',
    origin: '*',
    withCredentials: true,
    HOST: 'coverartarchive.org',
    'Content-Type': 'application/json',
    header: {
      'Access-Control-Allow-Origin': '*',
      'Cross-Domain': true,
    },
  };
  const response = await axios(options);
  console.log(response.data);
  return response.data;
});

const fetchArtists = createAsyncThunk(
  'artists/fetchArtist',
  async (args, thunkAPI) => {
    const options = {
      method: 'GET',
      url: `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${args}&api_key=${apiKey}&format=json`,
    };
    const response = await axios(options);
    console.log(response.data);
    thunkAPI.dispatch(fetchImages(response.data.artist.mbid));
    return response.data;
  },
);

export default { fetchArtists };
