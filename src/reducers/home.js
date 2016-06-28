import { createReducer } from 'redux-act-reducer';
import { SHOW_HELLO, SHOW_HELLO_ASYNC, SHOW_MOVIES_ASYNC } from '../actions/home';

const defaultState = {
  isFetching: false,
  lastUpdated: undefined,
  err: undefined,
  info: undefined,
  infoAsync: undefined,
  name: undefined
};

const home = createReducer({
  [SHOW_HELLO_ASYNC](state, action) {
    return {
      'REQUEST'() {
        return {
          isFetching: true
        };
      },
      'SUCCESS'() {
        return {
          isFetching: false,
          lastUpdated: action.receivedAt,
          err: undefined,
          ...action.res
        };
      },
      'FAILURE'() {
        return {
          isFetching: false,
          err: action.err
        };
      }
    };
  },
  [SHOW_MOVIES_ASYNC](state, action) {
    return {
      moviesTotal: action.res.body.total
    };
  },
  [SHOW_HELLO](state, action) {
    return {
      info: action.info
    };
  },
}, defaultState);

export default home;
