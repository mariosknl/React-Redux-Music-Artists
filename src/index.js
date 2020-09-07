import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './store/configureStore';
import RouteFile from './components/RouteFile';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <RouteFile />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
