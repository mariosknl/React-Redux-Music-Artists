import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../App';
import AlbumDetails from './AlbumDetails';

export default function RouteFile() {
  return (
    <>
      <Switch>
        <Route path="/album/:id">
          <AlbumDetails />
        </Route>
        <Route exact path="/">
          <App />
        </Route>
      </Switch>
    </>
  );
}
