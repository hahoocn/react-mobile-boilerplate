import { fromJS } from 'immutable';
import { createReducer } from 'redux-act-reducer';
import { SHOW_HELLO, SHOW_HELLO_ASYNC, SHOW_MOVIES_ASYNC } from './actions';

const defaultState = fromJS({
  isFetching: false,
  lastUpdated: undefined,
  err: undefined,
  info: undefined,
  infoAsync: undefined,
  name: undefined
});

const home = createReducer({
  [SHOW_HELLO_ASYNC](state, action) {
    return {
      'REQUEST'() {
        return state.merge({
          isFetching: true,
          err: undefined,
        });
      },
      'SUCCESS'() {
        return state.merge({
          isFetching: false,
          lastUpdated: Date.now(),
          err: undefined,
          ...action.res
        });
      },
      'FAILURE'() {
        return state.merge({
          isFetching: false,
          err: action.err
        });
      }
    };
  },
  [SHOW_MOVIES_ASYNC](state, action) {
    return {
      'SUCCESS'() {
        return state.set('moviesTotal', action.res.body.total);
      }
    };
  },
  [SHOW_HELLO](state, action) {
    return state.set('info', action.info);
  },
}, defaultState);

export default home;
