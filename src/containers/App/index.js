import React from 'react';
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
  route: React.PropTypes.object.isRequired,
};

export default App;
