/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useSelector } from 'react-redux';

function TopAlbums() {
  const topAlbums = useSelector(state => state.artists.albums);

  return (
    <>
      {topAlbums.length === 0 ? '' : <h2>Famous Albums</h2>}
      <ul>
        {topAlbums.map(top => (
          <>
            <li key={top.idAlbum}>
              <h3>{top.strAlbum}</h3>
              <img
                key={top.strAlbumThumb}
                src={`${top.strAlbumThumb}`}
                alt={`${top.strAlbum}`}
              />
              {top.intYearReleased === null ? (
                ''
              ) : (
                <span key={top.strAllMusicID}>{`${top.intYearReleased}`}</span>
              )}
              {top.strLabel === null ? (
                ''
              ) : (
                <span key={top.strDiscogsID}> | {`${top.strLabel}`}</span>
              )}
            </li>
          </>
        ))}
      </ul>
    </>
  );
}

export default TopAlbums;
