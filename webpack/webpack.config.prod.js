const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');
const postcssNested = require('postcss-nested');
const postcssMixins = require('postcss-mixins');
const postcssSimpleVars = require('postcss-simple-vars');
const CleanPlugin = require('clean-webpack-plugin');

const config = require('../src/config');
const rootPath = path.resolve(__dirname, '../');
const srcPath = path.join(rootPath, '/src/');
const distPath = path.join(rootPath, '/build/');

var webpackConfig = {
  devtool: false,
  entry: {
    main: [srcPath + 'index']
  },
  output: {
    path: distPath,
    filename: 'js/[name].js',
    //publicPath: '/'
  },
  module: {
    loaders: [
      { test: /\.(jsx|js)$/, include: srcPath, loaders: ['babel']},
      { test: /\.json$/, include: srcPath, loader: 'json' },
      { test: /\.css$/, include: srcPath, loader: ExtractTextPlugin.extract('style', 'css?modules&minimize&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss') },
      { test: /\.(jpe?g|png|gif|svg)$/, include: srcPath, loader: 'url?limit=8192&name=images/[name].[ext]!image-webpack?{progressive:true, optimizationLevel: 7, svgo:{removeTitle:true,removeViewBox:false,removeRasterImages:true,sortAttrs:true,removeAttrs:false}}' },
      { test: /\.(woff2?|otf|eot|ttf)$/i, include: srcPath, loader: 'url?name=fonts/[name].[ext]' }
    ],
  },
  postcss: function () {
    return [postcssMixins, postcssSimpleVars, postcssNested, autoprefixer];
  },
  plugins: [
    new CleanPlugin([distPath], {
      root: rootPath
    }),
    new HtmlWebpackPlugin({
      title: config.appTitle,
      hash: true,
      template: srcPath + 'template/index.html',
      filename: distPath + 'index.html'
    }),
    new ExtractTextPlugin('css/[name].css'),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      },
      __SERVER__: false,
      __DEV__: false,
      __DEVTOOLS__: false
    }),
    // optimizations1
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        unused: true,
        dead_code: true,
        drop_debugger: true,
        drop_console: true
      }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
}

module.exports = webpackConfig;
