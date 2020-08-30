/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

function TopAlbums() {
  const topAlbums = useSelector(state => state.artists.albums);

  return (
    <>
      {topAlbums.length === 0 ? '' : <h2>Famous Albums</h2>}
      <ul>
        {topAlbums.map(top => (
          <>
            <li key={uuidv4()}>
              <h3 key={top.idAlbum}>{top.strAlbum}</h3>
              <img
                src={`${top.strAlbumThumb}`}
                alt={`${top.strAlbum}`}
                key={uuidv4()}
              />
              {top.intYearReleased === null ? (
                ''
              ) : (
                <span key={uuidv4()}>{`${top.intYearReleased}`}</span>
              )}
              {top.strLabel === null ? (
                ''
              ) : (
                <span key={uuidv4()}> | {`${top.strLabel}`}</span>
              )}
            </li>
          </>
        ))}
      </ul>
    </>
  );
}

export default TopAlbums;
