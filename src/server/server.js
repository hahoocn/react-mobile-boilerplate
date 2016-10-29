import path from 'path';
import http from 'http';
import express from 'express';
import React from 'react';
import { match, RouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import exphbs from 'express-handlebars';
import Helmet from 'react-helmet';
import configureStore from '../store/configureStore';
import routes from '../routes';
import config from '../config';

const app = express();
app.engine('hbs', exphbs({ extname: 'hbs' }));
app.set('views', path.join(__dirname, '../template'));
let port = config.port || 8080;
if (process.env.NODE_ENV === 'development') {
  app.use(express.static(path.join(__dirname, '../', 'public')));
  port = config.devPort || 3001;
} else {
  app.use(express.static(path.join(__dirname, '../../', 'public')));
}
app.set('view engine', 'hbs');
const server = new http.Server(app);

app.use((req, res) => {
  /* eslint no-undef: 0 */
  if (__DEVELOPMENT__) {
    webpackIsomorphicTools.refresh();
  }

  match({ routes: routes(), location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) {
      res.status(500).end(`Internal Server Error ${err}`);
    }

    if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }

    if (!renderProps) {
      res.status(404).end('Not found');
    }

    const components = renderProps.components;
    const Comp = components[components.length - 1].WrappedComponent;
    const fetchData = (Comp && Comp.fetchData) || (() => Promise.resolve());

    const store = configureStore();
    const { location, params, history } = renderProps;

    fetchData({ store, location, params, history })
    .then(() => {
      const body = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      );

      const head = Helmet.rewind();

      const state = store.getState();

      const data = {
        title: head.title.toString(),
        meta: head.meta.toString(),
        link: head.link.toString(),
        script: head.script.toString(),
        body,
        state: JSON.stringify(state),
        assets: webpackIsomorphicTools.assets(),
        layout: false
      };

      res.render('index', data);
    })
    .catch(e => next(e));
  });
});

if (port) {
  server.listen(port, (err) => {
    if (err) {
      console.error(err);
    }
    console.info('==> 💻  Open http://%s:%s in a browser to view the app.', config.host, port);
  });
} else {
  console.error('==>     ERROR: No PORT environment variable has been specified');
}
