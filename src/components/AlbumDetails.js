/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function AlbumDetails() {
  const { id } = useParams();
  const topAlbums = useSelector(state => state.artists.albums);
  const album = topAlbums[id];

  return (
    <div>
      <h3>{album.strAlbum}</h3>
      <p>
        {album.strGenre} | {album.strStyle}
      </p>
      <img src={`${album.strAlbumThumb}`} alt={`${album.strAlbum}`} />
      <img src={`${album.strAlbumCDart}`} alt={`${album.strAlbum}`} />
      <p>{album.strDescriptionEN}</p>
      <Link exact to="/">
        Back
      </Link>
    </div>
  );
}

export default AlbumDetails;
