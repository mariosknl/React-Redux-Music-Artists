/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
// import { apiCallBegan } from '../actions/api';
import fetchArt from '../actionCreators/artistsActions';

const { fetchArtists } = fetchArt;

const artistsSlice = createSlice({
  name: 'artists',
  initialState: {
    artists: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchArtists.pending]: state => {
      state.status = 'loading';
    },
    [fetchArtists.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.artists = state.artists.concat(action.payload);
    },
    [fetchArtists.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const {
  artistsRequested,
  artistsReceived,
  artistRequestFailed,
  artistsAdded,
} = artistsSlice.actions;

export default artistsSlice.reducer;

// export const loadArtists = () => dispatch => {
//   dispatch(
//     apiCallBegan({
//       onStart: artistsRequested.type,
//       onSuccess: artistsReceived.type,
//       orError: artistRequestFailed.type,
//     })
//   );
// };
