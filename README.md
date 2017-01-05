# react-mobile-boilerplate
A simple boilerplate for build mobile web app. Server side and client side rendering support.

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
  - [React Router Redux](https://github.com/reactjs/react-router-redux) (Helps you keep that bit of state in sync with your Redux store)
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
    - [Webpack Dev Middleware](https://github.com/webpack/webpack-dev-middleware) (Offers a dev middleware for webpack, which arguments a live bundle to a directory)
    - [Webpack Hot Middleware](https://github.com/glenjamin/webpack-hot-middleware) (Webpack hot reloading you can attach to your own server)
    - [React Hot Loader](http://gaearon.github.io/react-hot-loader/) (Tweak React components in real time.)
    - [url-loader](https://github.com/webpack/url-loader) (Can return a Data Url if the file is smaller than a limit.)
    - [json-loader](https://github.com/webpack/json-loader) (Loads file as JSON)
    - [style-loader](https://github.com/webpack/style-loader) (Add exports of a module as style to DOM)
    - [css-loader](https://github.com/webpack/css-loader) (Loads css file with resolved imports and returns css code) Can minimizes the css with [cssnano](http://cssnano.co/)
    - [eslint-loader](https://github.com/MoOx/eslint-loader) (eslint loader for webpack)
    - [image-webpack-loader](https://github.com/tcoopman/image-webpack-loader) (Minify PNG, JPEG, GIF and SVG images with imagemin)
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
    - [cssnano](http://cssnano.co/) (cssnano takes your nicely formatted CSS and runs it through many focused optimisations, to ensure that the final result is as small as possible for a production environment. ) cssnano is bundled with css-loader

#### Babel
  - [babel](http://babeljs.io/) (Babel is a generic multi-purpose compiler for JavaScript. Using Babel you can use the next generation of JavaScript, as well as the next generation of JavaScript tooling.)
  - [React preset](http://babeljs.io/docs/plugins/preset-react/) (Strip flow types and transform JSX into createElement calls.)
  - [ES2015 preset](http://babeljs.io/docs/plugins/preset-es2015/) (All you need to compile ES2015 to ES5)
  - [Stage 1 preset](http://babeljs.io/docs/plugins/preset-stage-1/) (use stage 1 [and greater] plugins)
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

#### Git
  - [git](https://git-scm.com/) (distributed version control system )
  - [github](https://github.com/) (You know!)
