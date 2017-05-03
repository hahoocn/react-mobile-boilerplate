import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from '../../routes';

const App = ({ route }) => {
  require('../../assets/css/main.css');
  return (
    <div>
      {renderRoutes(route.routes)}
    </div>
  );
};

App.propTypes = {
  route: PropTypes.object.isRequired,
};

export default App;
