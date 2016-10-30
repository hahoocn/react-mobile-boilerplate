const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const postcssNested = require('postcss-nested');
const postcssMixins = require('postcss-mixins');
const postcssSimpleVars = require('postcss-simple-vars');

const config = require('../src/config');
const rootPath = path.resolve(__dirname, '../');
const srcPath = path.join(rootPath, '/src/');
const distPath = path.join(rootPath, '/dist/');

const hostname = config.host || 'localhost';
const port = config.hotLoadPort;
const host = 'http://' + hostname + ':' + port + '/';

const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
const webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack.isomorphic.tools'));

const webpackConfig = {
  devtool: 'inline-source-map',
  context: path.resolve(__dirname, '..'),
  entry: {
    main: [
      'babel-polyfill',
      'webpack-hot-middleware/client?path=' + host + '__webpack_hmr',
      srcPath + 'index'
    ]
  },
  output: {
    path: distPath,
    filename: 'js/[name].js',
    publicPath: host
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)$/,
        include: srcPath,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel', 'eslint']
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
      },
      {
        test: webpackIsomorphicToolsPlugin.regular_expression('images'),
        loader: 'url?limit=8192&name=images/[name].[ext]!image-webpack?{ progressive:true, optimizationLevel: 7 }'
      },
      {
        test: /\.svg$/,
        include: srcPath,
        loader: 'url?limit=8192&name=svg/[name].[ext]&mimetype=image/svg+xml!image-webpack?{ svgo: {plugins: [{ removeUselessDefs: false }, { removeTitle: true }, { removeRasterImages: true }, { sortAttrs: true } ]} }'
      },
      {
        test: /\.svg(\?[\s\S]+)?$/,
        exclude: srcPath,
        loader: 'url?limit=8192&name=fonts/[name].[ext]&mimetype=image/svg+xml'
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url?limit=8192&name=fonts/[name].[ext]"
      },
      {
        test: /\.(ttf|eot)(\?[\s\S]+)?$/,
        loader: 'file?name=fonts/[name].[ext]'
      },
      {
        test: /\.hbs$/,
        include: srcPath,
        loader: 'handlebars'
      }
    ],
  },
  postcss: function () {
    return [postcssMixins, postcssSimpleVars, postcssNested, autoprefixer];
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: config.app.title,
      isWebpack: true,
      hash: true,
      template: srcPath + 'template/index.hbs',
      filename: distPath + 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    webpackIsomorphicToolsPlugin.development()
  ],
  progress: true,
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
};

module.exports = webpackConfig;
