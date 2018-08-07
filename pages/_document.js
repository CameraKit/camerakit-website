// from https://github.com/markolofsen/nextjs-toolkit/blob/master/pages/_document.js
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document'
import Helmet from 'react-helmet';

class MyDocument extends Document {
  static async getInitialProps (...args) {
    const documentProps = await super.getInitialProps(...args)
    // see https://github.com/nfl/react-helmet#server-usage for more information
    // 'head' was occupied by 'renderPage().head', we cannot use it
    return { ...documentProps, helmet: Helmet.renderStatic() }
  }

  // should render on <html>
  get helmetHtmlAttrComponents () {
    return this.props.helmet.htmlAttributes.toComponent()
  }

  // should render on <body>
  get helmetBodyAttrComponents () {
    return this.props.helmet.bodyAttributes.toComponent()
  }

  // should render on <head>
  get helmetHeadComponents () {
    return Object.keys(this.props.helmet)
      .filter(el => el !== 'htmlAttributes' && el !== 'bodyAttributes')
      .map(el => this.props.helmet[el].toComponent())
  }

  get helmetJsx () {
    return (<Helmet
      htmlAttributes={{lang: 'en'}}
      title='CameraKit'
      meta={[
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:title', content: 'CameraKit: Unified, Reliable, Camera API on Android' }
      ]}
    />)
  }
  render() {
    return (
      <html lang="en" dir="ltr" {...this.helmetHtmlAttrComponents}>
        <Head>
          { this.helmetJsx }
          { this.helmetHeadComponents }
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
          <title>CameraKit</title>
          <meta charSet="utf-8" /><meta
            name="viewport"
            content={
              'user-scalable=0, initial-scale=1, ' +
              'minimum-scale=1, width=device-width, height=device-height'
            }
          />
        </Head>
        <body {...this.helmetBodyAttrComponents}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument;