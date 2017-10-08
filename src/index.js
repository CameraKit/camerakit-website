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
      title="CameraKit"
      meta={[{
        name: 'description',
        content: 'One of the hardest Android APIs made into a high level and easy to use library that solves all of your problems.',
      }]} />
    <Switch>
      <Public exact path="/" component={Home} />
    </Switch>
  </div>
);
