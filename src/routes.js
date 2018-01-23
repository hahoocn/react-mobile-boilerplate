import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import { App, About, Home, NotFound } from './containers';

export const routes = [
  {
    component: App,
    routes: [
      { path: '/', exact: true, component: Home },
      { path: '/about', component: About },
      { component: NotFound }
    ]
  }
];

export const renderRoutes = (routesList) => {
  const list = routesList ? (
    <Switch>
      {routesList.map((route, i) => (
        <Route
          key={i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={props => <route.component {...props} route={route} />}
        />
      ))}
    </Switch>
  ) : null;
  return list;
};
