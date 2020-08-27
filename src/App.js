import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import actions from './actionCreators/artistsActions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.fetchArtists());
  }, []);
  return <p>rendering</p>;
};

export default App;
