import React from 'react';
import { connect } from 'react-redux';
import { showHello, showHelloAsync } from '../actions/home';

class Home extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    home: React.PropTypes.object,
  };

  state = {
    info: 'Hello World!'
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(showHello('Hello Redux!'));
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(showHelloAsync('Async!'));
  }

  shouldComponentUpdate(nextProps) {
    return this.props.home !== nextProps.home;
  }

  render() {
    const { home } = this.props;
    return (
      <div>
        <h1>{this.state.info}</h1>
        <h2>{home.info}</h2>
        <h2>{home.infoAsync} {home.name}</h2>
      </div>
		);
  }
}

function select(state) {
  return {
    home: state.home
  };
}

export default connect(select)(Home);
