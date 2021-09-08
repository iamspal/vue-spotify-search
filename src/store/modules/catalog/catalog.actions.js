import SEARCH_CATALOG from './catalog.actions.types';
import { SET_ARTISTS, SET_TRACKS, SET_ALBUMS } from './catalog.mutations.types';
import searchCatalog from './catalog.service';

const actions = {
  [SEARCH_CATALOG]({ commit }, query) {
    const [error, catalog] = searchCatalog(query);

    if (error) {
      commit(SET_ARTISTS, []);
      commit(SET_TRACKS, []);
      commit(SET_ALBUMS, []);
    } else {
      commit(SET_ARTISTS, catalog.artists);
      commit(SET_TRACKS, catalog.tracks);
      commit(SET_ALBUMS, catalog.albums);
    }

    return [error, catalog];
  },
};

export default actions;
