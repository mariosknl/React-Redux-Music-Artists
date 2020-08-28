import React from 'react';
import { useSelector } from 'react-redux';

function ArtistInfo() {
  const artists = useSelector(state => state.artists);

  if (artists.artists.length === 0);

  let bio = false;
  let name = '';
  let stats = '';
  let plays = '';
  let url = false;
  if (!artists.artists.artist) {
    return '';
  }
  name = artists.artists.artist.name;
  bio = artists.artists.artist.bio.summary;
  stats = artists.artists.artist.stats.listeners;
  plays = artists.artists.artist.stats.playcount;
  url = artists.artists.artist.url;

  return (
    <>
      <h2>{name}</h2>
      <p>{bio}</p>
      <p>{stats}</p>
      <p>{plays}</p>
      <p>{url}</p>
    </>
  );
}

export default ArtistInfo;
