import state from './catalog.state';
import mutations from './catalog.mutations';
import actions from './catalog.actions';

const catalog = {
  state: () => (state),
  mutations,
  actions,
};

export default catalog;
