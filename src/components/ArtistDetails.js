/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ArtistDetails() {
  const artists = useSelector(state => state.artists);

  if (!artists.artists.artist) {
    return '';
  }

  const { name, url } = artists.artists.artist;

  const stats = artists.artists.artist.stats.listeners;
  const plays = artists.artists.artist.stats.playcount;

  return (
    <Router>
      <>
        <span>Listeners {stats}</span>
        <span>Playcount {plays}</span>
        <a href={`${url}`}>{name} @ Last.fm</a>
      </>
    </Router>
  );
}

export default ArtistDetails;
