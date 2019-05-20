import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createBrowserHistory } from 'history';
import configureStore from './store';
import Root from './containers/Root';

/* eslint no-underscore-dangle: 0 */
const initialState = window.__INITIAL_STATE__;
const history = createBrowserHistory();
const store = configureStore(initialState, history);

ReactDOM.render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('container')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root').default;
    ReactDOM.render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('container')
    );
  });
}
