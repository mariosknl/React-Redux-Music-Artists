/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useSelector } from 'react-redux';

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
      <h2>{name}</h2>
      <p>{copyBio[0]}</p>
    </>
  );
}

export default ArtistInfo;
