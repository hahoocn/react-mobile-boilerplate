import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { renderRoutes } from '../../routes';

const App = ({ store, history }) => {
  require('../../assets/css/main.css');
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {renderRoutes()}
      </ConnectedRouter>
    </Provider>
  );
};

App.propTypes = {
  store: React.PropTypes.object.isRequired,
  history: React.PropTypes.object.isRequired,
};

export default App;
