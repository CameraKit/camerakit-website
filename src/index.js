import React from 'react';

// Routing via React Router
import { Switch, Route } from 'react-router-dom';

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
        content: 'CameraKit is an open-source library to support the Android Camera 1 and 2 APIs. Massively increase stability and reliability of photo and video capture on all Android devices.',
      }]} />
    <Switch>
      <Public exact path="/" component={Home} />
      <Route path="/jpegkit" component={() => window.location = 'https://github.com/CameraKit/jpegkit-android'}/>
    </Switch>
  </div>
);
