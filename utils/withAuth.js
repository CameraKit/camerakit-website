import React, { Component } from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';

import { getCookie, setCookie } from './Cookies';

export default function withAuth(AuthComponent) {
  return class Authenticated extends Component {
    constructor(props) {
      super(props);

      const { isLoading, seshToken } = props;
      this.state = {
        isLoading,
        token: seshToken,
      };
    }

    componentDidMount() {
      if (!this.state.token) {
        Router.push('/');
      }
      this.setState({ isLoading: false });
    }

    static async getInitialProps(ctx) {
      const isServer = !!ctx.req;
      let token;
      if (!isServer) {
        token = cookie.get('token');
      } else {
        token = getCookie('token', ctx.req);
      }
      let isLoading = true;
      if (!token) {
        console.log('no token');
      } else {
        setCookie('token', token);
        isLoading = false;
      }
      const pageProps = AuthComponent.getInitialProps && await AuthComponent.getInitialProps(ctx);
      return {
        ...pageProps,
        isLoading,
        token,
      };
    }

    render() {
      const { isLoading, token } = this.state;
      return (
        <div>
          { isLoading ? (
            <div>
              { 'LOADING.... '}
            </div>
          ) : (
            <AuthComponent {...this.props} token={token} />
          )}
        </div>
      );
    }
  };
}
