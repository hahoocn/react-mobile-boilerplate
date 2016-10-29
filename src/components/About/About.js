import React from 'react';
import Helmet from 'react-helmet';
import logoImg from '../../assets/images/logo.jpg';
import config from '../../config';

class About extends React.Component {
  state = {}

  render() {
    const homeStyles = require('../../containers/Home/Home.css');
    const styles = require('./About.css');

    const pageTitle = `About - ${config.app.title}`;
    return (
      <div className={homeStyles.main}>
        <Helmet title={pageTitle} />
        <div className={homeStyles.logo}><img src={logoImg} alt="" /></div>
        <h1>About</h1>
        <h3 className={styles.content}>
          A simple boilerplate for build mobile web app ( Node.js, React.js,
          Redux, Webpack, CSS Modules, PostCSS, Babel, ES2015, ESLint,
          EditorConfig ... )
        </h3>
      </div>
    );
  }
}

export default About;
