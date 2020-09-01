/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useSelector } from 'react-redux';
// import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
// import ArtistDetails from './Details';
// import Modal from './Modal';

function ArtistInfo() {
  const artists = useSelector(state => state.artists);

  if (!artists.artists.artist) {
    return '';
  }
  const { name } = artists.artists.artist;
  const bio = artists.artists.artist.bio.summary;
  const copyBio = bio.split('<');

  return (
    <>
      {artists.length === 0 ? (
        ''
      ) : (
        <h2 className="sm:text-center sm:mt-16 sm:text-5xl">{name}</h2>
      )}
      <p className="bio">{copyBio[0]}</p>
      {/* <Router>
        <Link to={`/${name}`}>{name} More Details</Link>
        <Switch>
          <Route exact path="/album/:id">
            <Modal />
          </Route>
          <Route exact path="/details">
            <ArtistDetails />
          </Route>
        </Switch>
      </Router> */}
    </>
  );
}

export default ArtistInfo;
