import { createSelector } from 'reselect';

const FilterAlbums = createSelector(
  state => state.artists.albums,
  state => state.artists.filter,

  (albums, filter) => {
    if (albums.length === 0) return [];
    if (filter === 'All') return albums;
    return albums.filter(album => filter === album.intYearReleased);
  },
);

export default { FilterAlbums };
