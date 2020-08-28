import React from 'react';
import { useSelector } from 'react-redux';

function ArtistInfo() {
  const artists = useSelector(state => state.artists);

  if (artists.artists.length === 0);
  console.log(artists.artists);

  let bio = false;
  if (!artists.artists.artist) {
    return '';
  }

  bio = artists.artists.artist.bio.summary;
  return (
    <>
      {/* <h2>{name}</h2> */}
      <p>{bio}</p>
      {/* <p>{stats}</p> */}
      {/* <p>{url}</p> */}
    </>
  );
}

export default ArtistInfo;
