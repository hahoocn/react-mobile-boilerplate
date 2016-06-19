import React from 'react';

class Home extends React.Component {
  state = {
    info: 'Hello World!'
  }

  render() {
    return (
      <div>
        <h1>{this.state.info}</h1>
      </div>
		);
  }
}

export default Home;
