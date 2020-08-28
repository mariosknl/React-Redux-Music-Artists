/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ArtistInfo() {
  const artists = useSelector(state => state.artists);

  if (artists.artists.length === 0);

  if (!artists.artists.artist) {
    return '';
  }
  const { name } = artists.artists.artist;
  const { url } = artists.artists.artist;

  const bio = artists.artists.artist.bio.summary;
  const stats = artists.artists.artist.stats.listeners;
  const plays = artists.artists.artist.stats.playcount;

  return (
    <Router>
      <h2>{name}</h2>
      <p>{bio}</p>
      <p>Listeners: {stats}</p>
      <p>Playcount: {plays}</p>
      <a href={`${url}`}>{name} @ Last.fm</a>
    </Router>
  );
}

export default ArtistInfo;
