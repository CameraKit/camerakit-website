// from https://github.com/markolofsen/nextjs-toolkit/blob/master/pages/_document.js
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import Helmet from 'react-helmet';

import { GA_TRACKING_ID } from '../lib/gtag'

class MyDocument extends Document {
  static async getInitialProps(...args) {
    const documentProps = await super.getInitialProps(...args);
    // see https://github.com/nfl/react-helmet#server-usage for more information
    // 'head' was occupied by 'renderPage().head', we cannot use it
    return { ...documentProps, helmet: Helmet.renderStatic() };
  }

  // should render on <html>
  get helmetHtmlAttrComponents() {
    return this.props.helmet.htmlAttributes.toComponent();
  }

  // should render on <body>
  get helmetBodyAttrComponents() {
    return this.props.helmet.bodyAttributes.toComponent();
  }

  // should render on <head>
  get helmetHeadComponents() {
    return Object.keys(this.props.helmet)
      .filter(el => el !== 'htmlAttributes' && el !== 'bodyAttributes')
      .map(el => this.props.helmet[el].toComponent());
  }


  get helmetJsx () {
    return (<Helmet
      htmlAttributes={{lang: 'en'}}
      title='CameraKit | Unified Camera Library for Android'
      meta={[
        { name: 'viewport', content: 'user-scalable=0, initial-scale=1, minimum-scale=1, width=device-width, height=device-height' },
        { name: 'description', content: 'CameraKit is an open-source library to support the Android Camera 1 and 2 APIs. Massively increase stability and reliability of photo and video capture on all Android devices.' },
        { property: 'og:title', content: 'CameraKit | Unified Camera Library for Android' }
      ]}
    />)
  }

  render() {
    return (
      <html lang="en" dir="ltr" {...this.helmetHtmlAttrComponents}>
        <Head>
          <title>CameraKit | Unified Camera Library for Android</title>
          <meta name="description" content="CameraKit is an open-source library to support the Android Camera 1 and 2 APIs. Massively increase stability and reliability of photo and video capture on all Android devices." />
          <meta property="og:type" content="website" />
          <meta name="viewport" content="user-scalable=0, initial-scale=1, minimum-scale=1, width=device-width, height=device-height" />
          { this.helmetHeadComponents }
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link rel="apple-touch-icon-precomposed" sizes="57x57" href="/static/favicon/apple-touch-icon-57x57.png" />
          <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/static/favicon/apple-touch-icon-114x114.png" />
          <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/static/favicon/apple-touch-icon-72x72.png" />
          <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/static/favicon/apple-touch-icon-144x144.png" />
          <link rel="apple-touch-icon-precomposed" sizes="60x60" href="/static/favicon/apple-touch-icon-60x60.png" />
          <link rel="apple-touch-icon-precomposed" sizes="120x120" href="/static/favicon/apple-touch-icon-120x120.png" />
          <link rel="apple-touch-icon-precomposed" sizes="76x76" href="/static/favicon/apple-touch-icon-76x76.png" />
          <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/static/favicon/apple-touch-icon-152x152.png" />
          <link rel="icon" type="image/png" href="/static/favicon/favicon-196x196.png" sizes="196x196" />
          <link rel="icon" type="image/png" href="/static/favicon/favicon-96x96.png" sizes="96x96" />
          <link rel="icon" type="image/png" href="/static/favicon/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/static/favicon/favicon-16x16.png" sizes="16x16" />
          <link rel="icon" type="image/png" href="/static/favicon/favicon-128.png" sizes="128x128" />
          <meta name="application-name" content="CameraKit"/>
          <meta name="msapplication-TileColor" content="#FFFFFF" />
          <meta name="msapplication-TileImage" content="/static/favicon/mstile-144x144.png" />
          <meta name="msapplication-square70x70logo" content="/static/favicon/mstile-70x70.png" />
          <meta name="msapplication-square150x150logo" content="/static/favicon/mstile-150x150.png" />
          <meta name="msapplication-wide310x150logo" content="/static/favicon/mstile-310x150.png" />
          <meta name="msapplication-square310x310logo" content="/static/favicon/mstile-310x310.png" />
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}}
          />
        </Head>
        <body {...this.helmetBodyAttrComponents}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
