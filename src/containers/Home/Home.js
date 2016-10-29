import React from 'react';
import { connect } from 'react-redux';
import Link from 'react-router/lib/Link';
import Helmet from 'react-helmet';
import { showHello, showHelloAsync, showMoviesAsync } from '../../actions/home';
import logoImg from '../../assets/images/logo.jpg';
import config from '../../config';

class Home extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    home: React.PropTypes.object,
  };

  state = {
    info: 'Hahoo App!'
  }

  componentDidMount() {
    const { dispatch } = this.props;
    if (!this.props.home.info) dispatch(showHello('About'));
    if (!this.props.home.moviesTotal) dispatch(showMoviesAsync());
    if (!this.props.home.name || !this.props.home.infoAsync) {
      dispatch(showHelloAsync('This is the content of'));
    }
  }

  shouldComponentUpdate(nextProps) {
    return this.props.home !== nextProps.home;
  }

  render() {
    const styles = require('./Home.css');

    const { home } = this.props;
    return (
      <div className={styles.main}>
        <Helmet title={config.app.title} />
        <div className={styles.logo}><img src={logoImg} alt="" /></div>
        <h1>{this.state.info}</h1>
        <h2 className={styles.aboutBox}>
          <Link to={'/about'} className={styles.about}>{home.info}</Link>
        </h2>
        <h2>Remote loading: Movies {home.moviesTotal}</h2>
        <h3>{home.name} {home.infoAsync}</h3>
      </div>
    );
  }
}

Home.fetchData = ({ store }) => {
  const fetch = Promise.all([
    store.dispatch(showHelloAsync('This is the content of')),
    store.dispatch(showMoviesAsync()),
    store.dispatch(showHello('About'))
  ]);
  return fetch;
};

const mapStateToProps = (state) => {
  const select = {
    home: state.home
  };
  return select;
};

export default connect(mapStateToProps)(Home);
