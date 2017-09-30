import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Nav from 'components/public/nav';

const Public = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <div className="public">
        <Nav />
        <Component {...matchProps} />
        <div className="Footer">Footer</div>
      </div>
    )}
  />
);

Public.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]),
};

export default Public;
