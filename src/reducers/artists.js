import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from '../actions/api';

const slice = createSlice({
  name: 'artists',
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    artistsRequested: (artists, action) => {
      artists.loading = true;
    },
    artistsReceived: (artists, action) => {
      artists.list = action.payload;
      artists.loading = false;
    },
    artistRequestFailed: (artists, action) => {
      artists.loading = false;
    },
    artistsAdded: (artists, action) => {
      artists.list.push({
        description: action.payload.description,
      });
    },
  },
});

export const {
  artistsRequested,
  artistsReceived,
  artistRequestFailed,
  artistsAdded,
} = slice.actions;

export default slice.reducer;
