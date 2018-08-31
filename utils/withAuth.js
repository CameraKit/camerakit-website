import React, { Component } from 'react';
import Router from 'next/router';
import ReactLoading from 'react-loading';

import AuthService from './auth';

export default function withAuth(AuthComponent) {
  const Auth = new AuthService();
  return class Authenticated extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
      };
    }

    componentDidMount() {
      if (!Auth.loggedIn()) {
        Router.push('/login');
      } else {
        this.setState({ isLoading: false });
      }
    }

    render() {
      const { isLoading } = this.state;
      return (
        <div>
          {isLoading ? (
            <ReactLoading />
          ) : (
            <AuthComponent {...this.props} auth={Auth} />
          )}
        </div>
      );
    }
  };
}
