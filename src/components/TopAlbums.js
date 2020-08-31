/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Modal from './Modal';
import '../styles/Modal.css';

function TopAlbums() {
  const topAlbums = useSelector(state => state.artists.albums);
  const [showModal, setModal] = useState(false);
  const [modelContent, setModelContent] = useState(false);

  const toggleModal = index => {
    setModal({ showModal: !showModal });
    setModelContent(index);
  };

  const displayModal = index => (
    <>
      {modelContent ? (
        <Modal className="h-full overflow-y-hidden">
          <div>
            <p className="text-base">{index}</p>
            <button type="button" onClick={() => toggleModal()}>
              X
            </button>
          </div>
        </Modal>
      ) : (
        ''
      )}
    </>
  );

  return (
    <>
      {displayModal(modelContent)}
      {topAlbums.length === 0 ? '' : <h2>Famous Albums</h2>}
      <ul>
        {topAlbums.map(top => (
          <React.Fragment key={uuidv4()}>
            <li key={top.strMusicBrainzID}>
              <h3 key={uuidv4()}>{top.strAlbum}</h3>
              {top.strAlbumThumb ? (
                <img
                  src={`${top.strAlbumThumb}`}
                  alt={`${top.strAlbum}`}
                  key={uuidv4()}
                />
              ) : (
                <img
                  src="https://www.indiaspora.org/wp-content/uploads/2018/10/image-not-available.jpg"
                  alt="N/A"
                />
              )}
              {top.strDescriptionEN ? (
                <button
                  type="button"
                  onClick={() => toggleModal(top.strDescriptionEN)}
                >
                  Album Info
                </button>
              ) : (
                ''
              )}
              {top.intYearReleased === null ? (
                ''
              ) : (
                <span key={uuidv4()}>{`${top.intYearReleased}`}</span>
              )}
              {top.strLabel === null ? (
                ''
              ) : (
                <span key={uuidv4()}> | {`${top.strLabel}`}</span>
              )}
            </li>
          </React.Fragment>
        ))}
      </ul>
    </>
  );
}

export default TopAlbums;
