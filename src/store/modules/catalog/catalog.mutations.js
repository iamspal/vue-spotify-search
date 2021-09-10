import { SET_ARTISTS, SET_TRACKS, SET_ALBUMS } from './catalog.mutations.types';

const mutations = {
  [SET_ARTISTS](state, artists) {
    state.artists = artists;
  },
  [SET_TRACKS](state, tracks) {
    state.tracks = tracks;
  },
  [SET_ALBUMS](state, albums) {
    state.albums = albums;
  },
};

export default mutations;
