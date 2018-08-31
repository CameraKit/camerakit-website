import React from 'react';
import { connect } from 'react-redux';

import Nav from 'components/public/nav';
import LoginForm from 'components/public/login';

import withAuth from '../utils/withAuth';

class Login extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.token);
  }

  render() {
    return (
      <div className="login">
        <Nav />
        <LoginForm />
      </div>
    );
  }
}

export default connect()(withAuth(Login));
