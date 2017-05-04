import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import historyApiFallback from 'connect-history-api-fallback';
import config from '../src/config';
import webpackConfig from './webpack.config.dev';

const compiler = webpack(webpackConfig);
const host = config.host;
const port = config.hotLoadPort;
const serverOptions = {
  noInfo: true,
  quiet: true,
  lazy: false,
  publicPath: webpackConfig.output.publicPath,
  index: 'index.html',
  headers: { 'Access-Control-Allow-Origin': '*' },
  stats: { colors: true }
};

const app = express();
app.use(historyApiFallback());
app.use(webpackDevMiddleware(compiler, serverOptions));
app.use(webpackHotMiddleware(compiler));

app.listen(port, (err) => {
  if (err) {
    console.error(`=> OMG!!! 🙀 ${err}`);
  } else {
    console.info('==> 🚧  Webpack development server listening at http://%s:%s', host, port);
  }
});
