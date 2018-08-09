import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Nav from '../components/public/nav';
import Home from '../components/home';
import Footer from '../components/public/footer';

const Public = ({ component: Component, ...rest }) => (
  <div className="public">
    <Nav />
    <Home />
    <Footer />
  </div>
);

Public.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]),
};

export default Public;