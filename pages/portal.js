import React from 'react';
import { connect } from 'react-redux';

import Nav from 'components/public/nav';
import Login from 'components/public/login';

import withAuth from '../utils/withAuth';

class Public extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.token);
  }

  render() {
    return (
      <div className="public">
        <Nav />
        <Login />
      </div>
    );
  }
}

export default connect()(withAuth(Public));
