import React from 'react';
import { Route } from 'react-router-dom';

import Nav from '../components/public/nav';

const Public = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <div className="public">
        <Nav />
        <Component {...matchProps} />
        <div className="Footer">Footer</div>
      </div>
    )} />
);

export default Public;
