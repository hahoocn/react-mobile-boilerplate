import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { routes, renderRoutes } from '../../routes';

const Root = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {renderRoutes(routes)}
    </ConnectedRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default Root;
