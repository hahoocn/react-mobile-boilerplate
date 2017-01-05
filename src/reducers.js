import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import home from './containers/Home/reducer';

// Initial routing state
const routeInitialState = fromJS({ locationBeforeTransitions: null });

// Merge route into the state
function routerReducer(state = routeInitialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.merge({ locationBeforeTransitions: action.payload });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  routing: routerReducer,
  home,
});

export default rootReducer;
