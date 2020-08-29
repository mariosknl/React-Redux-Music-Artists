import React from 'react';
import { useSelector } from 'react-redux';

function TopAlbums() {
  const topAlbums = useSelector(state => state.artists.albums);

  return (
    <>
      {topAlbums.length === 0 ? '' : <h2>Top Albums</h2>}
      <ul>
        {topAlbums.map(top => (
          <li key={top.playcount}>{top.name}</li>
        ))}
      </ul>
    </>
  );
}

export default TopAlbums;
