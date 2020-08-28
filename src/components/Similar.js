import React from 'react';

function Similar(props) {
  const { name, image } = props;
  return (
    <>
      <p>{name}</p>
      <img src={{ image }} alt="" width={100} height={100} />
    </>
  );
}

export default Similar;
