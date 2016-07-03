const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const postcssNested = require('postcss-nested');
const postcssMixins = require('postcss-mixins');
const postcssSimpleVars = require('postcss-simple-vars');

const config = require('../src/config');
const rootPath = path.resolve(__dirname, '../');
const srcPath = path.join(rootPath, '/src/');
const distPath = path.join(rootPath, '/dist/');

const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 3000;
const host = 'http://' + hostname + ':' + port;

const webpackConfig = {
  devtool: 'inline-source-map',
  entry: {
    main: [
      'babel-polyfill',
      'webpack-hot-middleware/client?path=' + host + '/__webpack_hmr',
      srcPath + 'index'
    ]
  },
  output: {
    path: distPath,
    filename: 'js/[name].js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)$/,
        include: srcPath,
        loaders: ['react-hot', 'babel', 'eslint']
      },
      {
        test: /\.json$/,
        include: srcPath,
        loader: 'json'
      },
      {
        test: /\.css$/,
        include: srcPath,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
        )
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        include: srcPath,
        loader: 'url?limit=8192&name=images/[name].[ext]!image-webpack?{progressive:true, optimizationLevel: 7, svgo:{removeTitle:true,removeViewBox:false,removeRasterImages:true,sortAttrs:true,removeAttrs:false}}'
      },
      { test: /\.(woff2?|otf|eot|ttf)$/i, include: srcPath, loader: 'url?name=fonts/[name].[ext]' }
    ],
  },
  postcss: function () {
    return [postcssMixins, postcssSimpleVars, postcssNested, autoprefixer];
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: config.appTitle,
      hash: false,
      template: srcPath + 'template/index.html',
      filename: distPath + 'index.html'
    }),
    new ExtractTextPlugin('css/[name].css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
};

module.exports = webpackConfig;
