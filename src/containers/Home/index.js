import React from 'react';
import { connect } from 'react-redux';
import Link from 'react-router/lib/Link';
import Helmet from 'react-helmet';
import { showHello, showHelloAsync, showMoviesAsync } from './actions';
import logoImg from '../../assets/images/logo.jpg';
import config from '../../config';
import { selectInfo, selectHome } from './selectors';

class Home extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    home: React.PropTypes.object,
    homeinfo: React.PropTypes.string,
  }

  state = {
    info: 'Hahoo App!'
  }

  componentDidMount() {
    const { dispatch } = this.props;
    if (!this.props.homeinfo) dispatch(showHello('About'));
    if (!this.props.home.moviesTotal) dispatch(showMoviesAsync());
    if (!this.props.home.name || !this.props.home.infoAsync) {
      dispatch(showHelloAsync('This is the content of'));
    }
  }

  shouldComponentUpdate(nextProps) {
    return this.props.home !== nextProps.home;
  }

  render() {
    const styles = require('./styles.css');

    const { home, homeinfo } = this.props;
    return (
      <div className={styles.main}>
        <Helmet title={config.app.title} />
        <div className={styles.logo}><img src={logoImg} alt="" /></div>
        <h1>{this.state.info}</h1>
        <h2 className={styles.aboutBox}>
          <Link to={'/about'} className={styles.about}>{homeinfo}</Link>
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

const mapStateToProps = state => ({
  home: selectHome(state).toObject(),
  homeinfo: selectInfo(state),
});

export default connect(mapStateToProps)(Home);
