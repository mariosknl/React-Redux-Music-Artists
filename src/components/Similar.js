import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { fetchArtists, fetchImages } from '../actionCreators/artistsActions';
import fetchAlb from '../actionCreators/albumsActions';
import fetchSim from '../actionCreators/similarArtists';

function Similar() {
  const similarArtists = useSelector(state => state.artists.similar);
  const { fetchAlbums } = fetchAlb;
  const { fetchSimilarArtists } = fetchSim;
  const dispatch = useDispatch();

  return (
    <Router>
      <>
        {similarArtists.length === 0 ? '' : <h4>Similar Artists</h4>}
        <ul className="similar">
          {similarArtists.map(similar => (
            <button
              type="button"
              onClick={values => {
                dispatch(fetchArtists(values.currentTarget.innerText));
                dispatch(fetchAlbums(values.currentTarget.innerText));
                dispatch(fetchSimilarArtists(values.currentTarget.innerText));
                dispatch(fetchImages(values.currentTarget.innerText));
              }}
              key={similar.name}
              className="similarLi"
            >
              {similar.name}
            </button>
          ))}
        </ul>
      </>
    </Router>
  );
}

export default Similar;
