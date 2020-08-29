import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import fetchArt from '../actionCreators/artistsActions';
import fetchAlb from '../actionCreators/albumsActions';
import fetchSim from '../actionCreators/similarArtists';
import ArtistInfo from './ArtistInfo';
import Similar from './Similar';
import TopAlbums from './TopAlbums';
import ArtistDetails from './ArtistDetails';
import FormStyles from '../styles/FormStyles.styles.tw';
import SimilarStyles from '../styles/SimilarStyles.tw';
import ArtistInfoStyles from '../styles/ArtistiInfo.styles.tw';
import ArtistDetailsStyles from '../styles/ArtistDetails.styles.tw';

const SearchArtist = () => {
  const { fetchArtists } = fetchArt;
  const { fetchAlbums } = fetchAlb;
  const { fetchSimilarArtists } = fetchSim;
  const dispatch = useDispatch();

  const Formik = useFormik({
    initialValues: { artist: '', topAlbums: '' },
    onSubmit: values => {
      dispatch(fetchArtists(values.artist));
      dispatch(fetchAlbums(values.artist));
      dispatch(fetchSimilarArtists(values.artist));
    },
  });

  return (
    <>
      <FormStyles>
        <div className="containerForm">
          <form onSubmit={Formik.handleSubmit}>
            <label htmlFor="artist" className="artistForm">
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
            <button type="submit">Search</button>
          </form>
        </div>
      </FormStyles>

      <ArtistInfoStyles>
        <ArtistInfo />
      </ArtistInfoStyles>

      <ArtistDetailsStyles>
        <h3>Stats</h3>
        <ArtistDetails />
      </ArtistDetailsStyles>

      <TopAlbums />

      <SimilarStyles>
        <Similar />
      </SimilarStyles>
    </>
  );
};

export default SearchArtist;
