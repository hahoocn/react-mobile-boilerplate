const path = require('path');
const WebpackIsomorphicTools = require('webpack-isomorphic-tools');
const WebpackIsomorphicToolsConfig = require('../../webpack/webpack.isomorphic.tools');

const rootDir = path.resolve(__dirname, '../../');
/* eslint no-underscore-dangle: 0 */
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';
global.webpackIsomorphicTools = new WebpackIsomorphicTools(WebpackIsomorphicToolsConfig)
  .server(rootDir, () => {
    require('./server');
  });
