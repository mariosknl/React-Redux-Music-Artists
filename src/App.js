import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import artists from './actionCreators/artistsActions';
import albums from './actionCreators/albumsActions';
import similar from './actionCreators/similarArtists';
import SearchArtist from './components/SearchArtist';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(artists.fetchArtists());
    dispatch(albums.fetchAlbums());
    dispatch(similar.fetchSimilarArtists());
  }, [dispatch]);
  return (
    <>
      <h1>Search for your favorite artist</h1>
      <SearchArtist />
    </>
  );
};

export default App;
