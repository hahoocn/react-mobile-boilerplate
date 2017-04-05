import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import { About, Home, NotFound } from './containers';

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    component: NotFound
  }
];

export const renderRoutes = () => (
  <Switch>
    {routes.map((route, i) => (
      <Route
        key={i}
        path={route.path}
        exact={route.exact}
        strict={route.strict}
        component={route.component}
      />
    ))}
  </Switch>
);
