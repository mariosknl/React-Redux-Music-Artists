import React from 'react';
import { useSelector } from 'react-redux';

function ArtistImage() {
  const imageState = useSelector(state => state.artists);

  if (!imageState) {
    return '';
  }

  const imageUrl = imageState.image;

  return (
    <>
      <img
        src={`${imageUrl}`}
        alt={`${imageUrl}`}
        className="mt-2 w-8/12 mx-auto"
      />
    </>
  );
}

export default ArtistImage;
