import React from 'react';

function SimilarArtists(props) {
  const [name, bio, image, stats] = props;
  return (
    <div>
      {name}
      {bio}
      {image}
      {stats}
    </div>
  );
}

export default SimilarArtists;
