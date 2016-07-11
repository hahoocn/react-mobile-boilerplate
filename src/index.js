import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';
import routes from './routes';

/* eslint no-underscore-dangle: 0 */
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);

const rootEl = document.getElementById('container');

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes()} history={history} />
  </Provider>,
  rootEl
);
