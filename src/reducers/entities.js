import { combineReducers } from 'redux';
import artistReducer from './artists';

export default combineReducers({
  artists: artistReducer,
});
