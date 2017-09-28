import React from 'react';
import { Route } from 'react-router-dom';

const Public = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <div className="public">
        <div className="Header">Header</div>
        <Component {...matchProps} />
        <div className="Footer">Footer</div>
      </div>
    )} />
);

export default Public;
