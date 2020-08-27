import { configureStore } from '@reduxjs/toolkit';
import artistsReducer from '../reducers/artistsSlice';

export default configureStore({
  reducer: {
    artists: artistsReducer,
  },
});
