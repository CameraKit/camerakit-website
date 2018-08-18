import React from 'react';
import { connect } from 'react-redux';

import Nav from 'components/public/nav';
import Login from 'components/public/login';

const Public = () => (
  <div className="public">
    <Nav />
    <Login />
  </div>
);

export default connect()(Public);
