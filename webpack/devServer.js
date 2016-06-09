const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.dev');

const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 3000;

new WebpackDevServer(webpack(config), {
  hot: true,
  publicPath: config.output.publicPath,
  quiet: false,
  noInfo: false,
  historyApiFallback: true,
  compress: false,
  stats: {
    colors: true
  }
}).listen(port, hostname, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log('Listening at http://'+ hostname +':'+ port +'/');
});
