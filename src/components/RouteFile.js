import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchArtist from './SearchArtist';
// import Modal from './Modal';
import Test from './Test';

export default function RouteFile() {
  return (
    <>
      <Switch>
        <Route path="/album/:id">
          <Test />
        </Route>
        <Route exact path="/">
          <SearchArtist />
        </Route>
      </Switch>
    </>
  );
}
