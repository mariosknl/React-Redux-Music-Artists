/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/AlbumDetails.scss';

function AlbumDetails() {
  const { id } = useParams();
  const topAlbums = useSelector(state => state.artists.albums);
  const album = topAlbums[id];

  return (
    <div className="details-container">
      <h3>{album.strAlbum}</h3>
      <p>
        {album.strGenre} | {album.strStyle}
      </p>
      <Link exact to="/">
        Back
      </Link>
      <div className="img-container">
        <img src={`${album.strAlbumThumb}`} alt={`${album.strAlbum}`} />
        <img src={`${album.strAlbumCDart}`} alt={`${album.strAlbum}`} />
      </div>
      <p className="album-info">{album.strDescriptionEN}</p>
    </div>
  );
}

export default AlbumDetails;
