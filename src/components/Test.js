import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Test() {
  const { id } = useParams();
  const topAlbums = useSelector(state => state.artists.albums);
  const album = topAlbums[id];

  return (
    <div>
      <h3>{album.strAblum}</h3>
      <img src={`${album.strAlbumThumb}`} alt={`${album.strAlbum}`} />
      <p>{album.strDescriptionEN}</p>
      <Link to="/">Back</Link>
    </div>
  );
}
