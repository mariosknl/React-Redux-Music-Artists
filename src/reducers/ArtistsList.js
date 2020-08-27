import React from 'react';
import { useSelector } from 'react-redux';

export default function ArtistsList() {
  const artists = useSelector(state => state.artists);

  const renderedArtists = artists.map(artist => (
    <section key={artist.id}>
      <h3>{artist.name}</h3>
      <p>{artist.bio}</p>
    </section>
  ));

  return (
    <section>
      <h2>Artists</h2>
      {renderedArtists}
    </section>
  );
}
