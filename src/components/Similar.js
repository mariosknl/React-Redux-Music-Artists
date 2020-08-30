import React from 'react';
import { useSelector } from 'react-redux';

function Similar() {
  const similarArtists = useSelector(state => state.artists.similar);

  return (
    <>
      {similarArtists.length === 0 ? '' : <h4>Similar Artists</h4>}
      <ul className="similar">
        {similarArtists.map(similar => (
          <li key={similar.name} className="similarLi">
            {similar.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Similar;
