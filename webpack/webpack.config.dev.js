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
  entry: {
    main: [
      '@babel/polyfill',
      srcPath + 'index'
    ]
  },
  output: {
    path: distPath,
    filename: 'js/[name].js',
    publicPath: host
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: srcPath,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [postcssMixins, postcssSimpleVars, postcssNested, autoprefixer]
            },
          },
        ]
      },
      {
        test: webpackIsomorphicToolsPlugin.regularExpression('images'),
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'images/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        include: srcPath,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'svg/[name].[ext]',
              mimetype: 'image/svg+xml'
            }
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                {
                  removeUselessDefs: false
                },
                {
                  removeTitle: true
                },
                {
                  removeRasterImages: true
                },
                {
                  sortAttrs: true
                }
              ]
            }
          },
        ]
      },
      {
        test: /\.svg(\?[\s\S]+)?$/,
        exclude: srcPath,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'fonts/[name].[ext]'
            }
          },
        ]
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'fonts/[name].[ext]'
            }
          },
        ]
      },
      {
        test: /\.(ttf|eot)(\?[\s\S]+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]'
            }
          },
        ]
      },
      {
        test: /\.hbs$/,
        include: srcPath,
        use: [
          {
            loader: 'handlebars-loader',
          },
        ]
      }
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        context: path.resolve(__dirname, '..')
      }
    }),
    new HtmlWebpackPlugin({
      title: config.app.title,
      isWebpack: true,
      hash: true,
      template: srcPath + 'template/index.hbs',
      filename: distPath + 'index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    webpackIsomorphicToolsPlugin.development()
  ],
  devServer: {
    host: hostname,
    port,
    historyApiFallback: true,
    hot: true,
    compress: true,
    contentBase: distPath,
    headers: { 'Access-Control-Allow-Origin': '*' },
    publicPath: host,
    quiet: false,
    noInfo: false,
    stats: { colors: true },
    index: 'index.html',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  mode: 'development'
};

module.exports = webpackConfig;
