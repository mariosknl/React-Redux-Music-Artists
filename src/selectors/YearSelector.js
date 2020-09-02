import { createSelector } from 'reselect';

const YearSelect = createSelector(
  state => state.artists.albums,

  albums => {
    if (albums.length === 0) return [];
    return albums.map(album => album.intYearReleased);
  },
);

export default { YearSelect };
