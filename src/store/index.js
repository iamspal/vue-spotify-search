import { createStore } from 'vuex';
import catalog from './modules/catalog';

export default createStore({
  modules: {
    catalog,
  },
});
