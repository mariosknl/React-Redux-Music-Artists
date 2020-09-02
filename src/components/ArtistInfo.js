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
      {artists.length === 0 ? (
        ''
      ) : (
        <h5 className="sm:text-center sm:mt-20 sm:text-5xl md:text-5xl">
          {name}
        </h5>
      )}
      <p className="bio sm:text-base md:text-lg md:p-4">{copyBio[0]}</p>
    </>
  );
}

export default ArtistInfo;
