import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import Head from 'next/head';

import { initStore, addCount } from '../lib/store';
import withApollo from '../lib/with-apollo-client';


class CameraKitWebsite extends App {
  static async getInitialProps({ Component, ctx }) {
    ctx.store.dispatch(addCount());

    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Head>
          <title>CameraKit | Unified Camera Library for Android</title>
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({ addCount: bindActionCreators(addCount, dispatch) });

export default withApollo(withRedux(initStore, null, mapDispatchToProps)(CameraKitWebsite));
