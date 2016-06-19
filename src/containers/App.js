import React from 'react';

class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.element,
  };

  state = {
    info: 'for test' // test
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
		);
  }
}

export default App;
