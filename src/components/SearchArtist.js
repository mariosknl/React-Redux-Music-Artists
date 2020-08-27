import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import topAlbums from '../actionCreators/albumsActions';

const SearchArtist = () => {
  const [artist, setArtist] = useState('Cher');
  const [albums, setAlbums] = useState('');

  const topAlbums = useSelector(state => state.artists.albums);
  const similarArtists = useSelector(state => state.artists.similar);

  if (!topAlbums) return <p>loading</p>;
  if (!similarArtists) return <p>loading similar...</p>;

  return (
    <div className="searchForm">
      <form>
        <label htmlFor="artist">
          Artist
          <input
            id="artist"
            value={artist}
            placeholder="Search for an artist"
            onChange={e => setArtist(e.target.value)}
            onBlur={e => setArtist(e.target.value)}
          />
        </label>
        <label htmlFor="genre">
          Top 10 Albums
          <select
            id="topAlbums"
            value={albums}
            onChange={e => setAlbums(e.target.value)}
            onBlur={e => setAlbums(e.target.value)}
          >
            <option>---</option>
            {topAlbums.map(topAlbum => (
              <option key={topAlbum.playcount} value={topAlbum.name}>
                {topAlbum.name}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Search</button>
      </form>
      <div>
        {similarArtists.map(similar => (
          <p key={similar.name}>{similar.name}</p>
        ))}
      </div>
    </div>
  );
};

export default SearchArtist;
