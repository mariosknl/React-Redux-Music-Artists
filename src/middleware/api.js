import axios from 'axios';
import * as actions from '../actions/api';

require('dotenv').config({ path: '../.env' });

const apiKey = process.env.REACT_APP_API_KEY;

const api = ({ dispatch }) => next => async action => {
  if (action.type !== actions.apiCallStarted.type) return next(action);

  const { url, method, data, onStart, onSuccess, onError } = action.payload;

  if (onStart) dispatch({ type: onStart });

  next(action);

  try {
    const response = await axios.request({
      baseURL: `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Cher&api_key=${apiKey}&format=json`,
      url,
      method,
      data,
    });

    dispatch(actions.apiCallSuccess(response.data));
    if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    dispatch(actions.apiCallFailed(error.message));
    if (onError) dispatch({ type: onError, payload: error.message });
  }
};

console.log(api);
export default api;
