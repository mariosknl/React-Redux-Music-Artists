import React from 'react';
import { useSelector } from 'react-redux';

function ArtistImage() {
  const image = useSelector(state => state.artists);

  if (!image) {
    return '';
  }

  return (
    <>
      <img src={`${image}`} alt={`${image}`} />
    </>
  );
}

export default ArtistImage;
