import React from 'react';

// Routing via React Router
import { Switch } from 'react-router-dom';

// <Helmet> component for setting the page title/meta tags
import Helmet from 'react-helmet';

import Public from './layouts/public';

import Home from './pages/public/home';

export default () => (
  <div>
    <Helmet
      title="ReactQL application"
      meta={[{
        name: 'description',
        content: 'ReactQL starter kit app',
      }]} />
    <Switch>
      <Public exact path="/" component={Home} />
    </Switch>
  </div>
);
