import React from 'react';
import { useSelector } from 'react-redux';

function Similar() {
  const similarArtists = useSelector(state => state.artists.similar);

  return (
    <>
      {similarArtists.map(similar => (
        <p key={similar.name}>{similar.name}</p>
      ))}
    </>
  );
}

export default Similar;
