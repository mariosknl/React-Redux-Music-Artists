/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Modal from './Modal';
import '../styles/Modal.css';

function TopAlbums() {
  const topAlbums = useSelector(state => state.artists.albums);
  const [showModal, setModal] = useState(false);

  const toggleModal = () => setModal({ showModal: !showModal });

  return (
    <>
      {topAlbums.length === 0 ? '' : <h2>Famous Albums</h2>}
      <ul>
        {topAlbums.map(top => (
          <React.Fragment key={uuidv4()}>
            <li key={top.strMusicBrainzID}>
              <h3 key={uuidv4()}>{top.strAlbum}</h3>
              <img
                src={`${top.strAlbumThumb}`}
                alt={`${top.strAlbum}`}
                key={uuidv4()}
              />
              <button type="button" onClick={() => toggleModal()}>
                {showModal ? (
                  <Modal>
                    <div>
                      <p>{top.strDescriptionEN}</p>
                      <button type="button" onClick={() => toggleModal()}>
                        X
                      </button>
                    </div>
                  </Modal>
                ) : (
                  <small>Album Info</small>
                )}
              </button>
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
