import React from 'react';
import configureStore from './store/configureStore';
import {
  artistsRequested,
  artistsReceived,
  artistRequestFailed,
  artistsAdded,
} from './reducers/artists';

const store = configureStore();

function App() {
  return <div className="App" />;
}

export default App;
