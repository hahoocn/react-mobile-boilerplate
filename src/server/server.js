import path from 'path';
import http from 'http';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import exphbs from 'express-handlebars';
import Helmet from 'react-helmet';
import { StaticRouter } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import configureStore from '../store';
import { routes, renderRoutes } from '../routes';
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

  const matchData = matchRoutes(routes, req.url);
  if (!matchData || matchData.length === 0) {
    res.status(404).end('Not found');
    return;
  }
  const component = matchData[0].route.component;
  const fetchData = (component && component.fetchData) || (() => Promise.resolve());
  const match = matchData[0].match;
  const store = configureStore({});
  fetchData({ store, match })
  .then(() => {
    const context = {};
    const body = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          {renderRoutes()}
        </StaticRouter>
      </Provider>
    );

    if (context.url) {
      res.redirect(302, context.url);
      return;
    }

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
  .catch(e => console.log(e));
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
