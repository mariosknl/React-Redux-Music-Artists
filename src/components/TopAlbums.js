/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import FilterAlb from '../selectors/FilterAlbums';
import YearSel from '../selectors/YearSelector';
import { changeFilter } from '../reducers/artistsSlice';

function TopAlbums() {
  const { FilterAlbums } = FilterAlb;
  const { YearSelect } = YearSel;
  const dispatch = useDispatch();
  const topAlbums = useSelector(FilterAlbums);
  const years = useSelector(YearSelect);

  return (
    <>
      {topAlbums.length === 0 ? '' : <h2>Famous Albums</h2>}
      {years.length === 0 ? (
        ''
      ) : (
        <select
          value=""
          onChange={e => dispatch(changeFilter(e.currentTarget.value))}
          onBlur={e => dispatch(changeFilter(e.currentTarget.value))}
          disabled={years.length === 0}
        >
          <option>All</option>
          {years.map(year => (
            <option key={uuidv4()} value={year}>
              {year}
            </option>
          ))}
        </select>
      )}
      <ul>
        {topAlbums.map((top, index) => (
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
                <Link to={`/album/${index}`} className="info">
                  See more info
                </Link>
              ) : (
                ''
              )}
              <br />
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
