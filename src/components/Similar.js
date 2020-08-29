import React from 'react';
import { useSelector } from 'react-redux';

function Similar() {
  const similarArtists = useSelector(state => state.artists.similar);

  return (
    <>
      <h1>Similar Artists</h1>
      <ul>
        {similarArtists.map(similar => (
          <li key={similar.name}>{similar.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Similar;
