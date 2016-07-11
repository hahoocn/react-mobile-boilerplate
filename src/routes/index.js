import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, Home, NotFound } from '../containers';
import { About } from '../components';

export default function Routes() {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
}
