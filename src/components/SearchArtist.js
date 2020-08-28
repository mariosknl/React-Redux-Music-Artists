import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import fetchArt from '../actionCreators/artistsActions';
import fetchAlb from '../actionCreators/albumsActions';
import fetchSim from '../actionCreators/similarArtists';
import Similar from './Similar';
import ArtistInfo from './ArtistInfo';

const SearchArtist = () => {
  const { fetchArtists } = fetchArt;
  const { fetchAlbums } = fetchAlb;
  const { fetchSimilarArtists } = fetchSim;
  const dispatch = useDispatch();

  const topAlbums = useSelector(state => state.artists.albums);

  const Formik = useFormik({
    initialValues: { artist: '', topAlbums: '' },
    onSubmit: values => {
      dispatch(fetchArtists(values.artist));
      dispatch(fetchAlbums(values.artist));
      dispatch(fetchSimilarArtists(values.artist));
    },
  });

  return (
    <div className="searchForm">
      <form onSubmit={Formik.handleSubmit}>
        <label htmlFor="artist">
          Artist
          <input
            type="text"
            id="artist"
            value={Formik.artist}
            placeholder="Search for an artist"
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
          />
        </label>
        <label htmlFor="albums">
          Top 10 Albums
          <select
            id="topAlbums"
            value={Formik.topAlbums}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
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
        <Similar />
      </div>
      <div>
        <ArtistInfo />
      </div>
    </div>
  );
};

export default SearchArtist;
