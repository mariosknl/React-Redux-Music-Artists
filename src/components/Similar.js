import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Similar() {
  const similarArtists = useSelector(state => state.artists.similar);

  return (
    <Router>
      <>
        {similarArtists.length === 0 ? '' : <h4>Similar Artists</h4>}
        <ul className="similar">
          {similarArtists.map(similar => (
            <a href={similar.url} key={similar.name} className="similarLi">
              {similar.name}
            </a>
          ))}
        </ul>
      </>
    </Router>
  );
}

export default Similar;
