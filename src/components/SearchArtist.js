import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { fetchArtists, fetchImages } from '../actionCreators/artistsActions';
import fetchAlb from '../actionCreators/albumsActions';
import fetchSim from '../actionCreators/similarArtists';
import ArtistInfo from './ArtistInfo';
import Similar from './Similar';
import TopAlbums from './TopAlbums';
import { resForm } from '../reducers/artistsSlice';
import ArtistDetails from './ArtistDetails';
import ArtistImage from './ArtistImage';
import FormStyles from '../styles/FormStyles.styles.tw';
import SimilarStyles from '../styles/SimilarStyles.tw';
import ArtistInfoStyles from '../styles/ArtistiInfo.styles.tw';
import ArtistDetailsStyles from '../styles/ArtistDetails.styles.tw';
import TopAlbumsStyles from '../styles/TopAlbums.styles.tw';

const SearchArtist = () => {
  const { fetchAlbums } = fetchAlb;
  const { fetchSimilarArtists } = fetchSim;

  const errorMessage = useSelector(state => state.artists.errorMessage);

  const dispatch = useDispatch();

  const Formik = useFormik({
    initialValues: { artist: '', topAlbums: '' },
    onSubmit: values => {
      dispatch(fetchArtists(values.artist));
      dispatch(fetchAlbums(values.artist));
      dispatch(fetchSimilarArtists(values.artist));
      dispatch(fetchImages(values.artist));
    },
  });
  if (errorMessage) {
    return (
      <>
        <h1>{errorMessage}</h1>
        <button onClick={() => dispatch(resForm())}>Search Again</button>
      </>
    );
  }

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
        <div>
          <ArtistInfo />
        </div>
        <div>
          <ArtistImage />
          <ArtistDetailsStyles>
            <ArtistDetails />
          </ArtistDetailsStyles>
        </div>
      </ArtistInfoStyles>

      <TopAlbumsStyles>
        <TopAlbums />
        <SimilarStyles>
          <Similar />
        </SimilarStyles>
      </TopAlbumsStyles>
    </>
  );
};

export default SearchArtist;
