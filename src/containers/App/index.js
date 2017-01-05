import React from 'react';

const App = ({ children }) => {
  require('../../assets/css/main.css');

  return (
    <div>
      {children}
    </div>
  );
};

App.propTypes = {
  children: React.PropTypes.element
};

export default App;
