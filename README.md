# react-mobile-boilerplate
A simple boilerplate for build mobile web app. Server side and client side rendering support.

> webpack4, react-hot-loader4, react-router5

## Installation
You'll need to have [Node.js](https://nodejs.org) to get started.
````
$ git clone https://github.com/hahoocn/react-mobile-boilerplate.git
$ npm install
````

## Running Dev Server (Development)
````
$ npm run dev
````

## Building and Running Production Server
````
$ npm run build
$ npm run start
````

## Only build the client side
````
$ npm run build:client
````

## Clean Build Folder
````
$ npm run clean
````

##  Tech Stacks
#### React
  - [React](https://facebook.github.io/react/) (A JavaScript library for creating user interfaces by Facebook and Instagram. )
  - [React Router](https://github.com/reactjs/react-router) (Complete routing library for React.)
  - [Connected React Router](https://github.com/supasate/connected-react-router) (A Redux binding for React Router v4 and v5)
  - [React Redux](https://github.com/reactjs/react-redux) (Official React bindings for Redux.)
  - [React Helmet](https://github.com/nfl/react-helmet) (A document head manager for Reac)

#### Redux
  - [Redux](https://github.com/reactjs/redux) (A predictable state container for JavaScript apps.)
  - [redux-act-reducer](https://github.com/hahoocn/redux-act-reducer) (A lib to create actions and reducers for Redux)
  - [Redux Thunk](https://github.com/gaearon/redux-thunk) (Thunk middleware for Redux.)
  - [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension) (A chrome extension for redux)
  - [hahoorequest](https://github.com/hahoocn/hahoorequest) (A HTTP request abstract library, use other http request libraries in one way. Isomorphic request to work in Node or in the browser.)
  - [reselect](https://github.com/reactjs/reselect) (Simple selector library for Redux)
  - [redux-immutable](https://github.com/gajus/redux-immutable) (redux-immutable is used to create an equivalent function of Redux combineReducers that works with Immutable.js state.)

#### immutable
  - [immutable-js](http://facebook.github.io/immutable-js/) (Immutable persistent data collections for Javascript which increase efficiency and simplicity.)

#### Webpack
  - [Webpack](http://webpack.github.io/) (A module bundler.)
  - Webpack Loaders
    - [webpack-dev-server](https://github.com/webpack/webpack-dev-server) (Serves a webpack app. Updates the browser on changes.)
    - [React Hot Loader](http://gaearon.github.io/react-hot-loader/) (Tweak React components in real time.)
    - [url-loader](https://github.com/webpack/url-loader) (Can return a Data Url if the file is smaller than a limit.)
    - [json-loader](https://github.com/webpack/json-loader) (Loads file as JSON)
    - [style-loader](https://github.com/webpack/style-loader) (Add exports of a module as style to DOM)
    - [css-loader](https://github.com/webpack/css-loader) (Loads css file with resolved imports and returns css code)
    - [eslint-loader](https://github.com/MoOx/eslint-loader) (eslint loader for webpack)
    - [svgo-loader](https://github.com/rpominov/svgo-loader) (optimizing SVG vector graphics files)
    -  [postcss-loader](https://github.com/postcss/postcss-loader) (PostCSS loader for webpack to postprocesses your CSS with PostCSS plugins.)
    - [babel-loader](https://github.com/babel/babel-loader) (Transpiling JavaScript files using Babel and webpack.)
    - [handlebars-loader](https://github.com/pcardune/handlebars-loader) (A handlebars template loader for webpack.)
  - Webpack Plugins
    - [Clean for webpack](https://github.com/johnagan/clean-webpack-plugin) (A webpack plugin to remove/clean your build folder(s) before building)
    - [HTML Webpack Plugin](https://github.com/ampedandwired/html-webpack-plugin) (Simplifies creation of HTML files to serve your webpack bundles.)
    - [Extract text plugin for webpack](https://github.com/webpack/extract-text-webpack-plugin) (It moves every require("style.css") in entry chunks into a separate css output file.)
    - [DefinePlugin](http://webpack.github.io/docs/list-of-plugins.html#defineplugin) (Define free variables.)
    - [UglifyJsPlugin](http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin) (Minimize all JavaScript output of chunks.) [UglifyJS 2](https://github.com/mishoo/UglifyJS2)
    - [webpack-isomorphic-tools](https://github.com/halt-hammerzeit/webpack-isomorphic-tools) (Server-side rendering for your Webpack-built applications (e.g. React))
  - Style & CSS
    - [CSS Modules](https://github.com/css-modules/css-modules) (A CSS Module is a CSS file in which all class names and animation names are scoped locally by default.)
    - [PostCSS](http://postcss.org/) (PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.)
    - [Autoprefixer](https://github.com/postcss/autoprefixer) (PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use. It is recommended by Google and used in Twitter, and Taobao.)
    - [PostCSS Nested](https://github.com/postcss/postcss-nested) (PostCSS plugin to unwrap nested rules like how Sass does it.)
    - [PostCSS Mixins](https://github.com/postcss/postcss-mixins) (PostCSS plugin for mixins.)
    - [PostCSS Simple Variables](https://github.com/postcss/postcss-simple-vars) (PostCSS plugin for Sass-like variables.)
    - [svgo](https://github.com/svg/svgo) (SVG Optimizer is a Nodejs-based tool for optimizing SVG vector graphics files.) svgo is bundled with svgo-loader

#### Babel
  - [babel](http://babeljs.io/) (Babel is a generic multi-purpose compiler for JavaScript. Using Babel you can use the next generation of JavaScript, as well as the next generation of JavaScript tooling.)
  - [@babel/preset-react](http://babeljs.io/docs/plugins/preset-react/) (Strip flow types and transform JSX into createElement calls.)
  - [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) (a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s).)
  - [.babelrc](http://babeljs.io/docs/usage/babelrc/) (Babel config file)
  - [babel-eslint](https://github.com/babel/babel-eslint) (ESLint using Babel as the parser.)
  - [babel-loader](https://github.com/babel/babel-loader) (Transpiling JavaScript files using Babel and webpack.)
  - [babel-polyfill](http://babeljs.io/docs/usage/polyfill/) (This will emulate a full ES2015 environment and is intended to be used in an application rather than a library/tool.)

#### ESLint
  - [ESLint](http://eslint.org/) (The pluggable linting utility for JavaScript and JSX.)
  - [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) (This package provides Airbnb's .eslintrc as an extensible shared config. [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react): A mostly reasonable approach to React and JSX)

#### Stylelint
  - [stylelint](http://stylelint.io/) (A mighty, modern CSS linter that helps you enforce consistent conventions and avoid errors in your stylesheets.)

#### Express
  - [Express](http://expressjs.com/) (Fast, unopinionated, minimalist web framework for node.)
  - [Express Handlebars](https://github.com/ericf/express-handlebars) (A Handlebars view engine for Express which doesn't suck.)

#### EditorConfig
  - [EditorConfig](http://editorconfig.org/) (EditorConfig helps developers define and maintain consistent coding styles between different editors and IDEs.)
