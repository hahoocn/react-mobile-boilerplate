import React from 'react'

class App extends React.Component{
  static propTypes = {
    children: React.PropTypes.element,
  };

  render() {
    return (
      <div>
        {this.props.children}
      </div>
		)
  }
}

export default App;
