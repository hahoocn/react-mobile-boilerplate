import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';

import home from './containers/Home/reducer';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  home,
});

export default rootReducer;
