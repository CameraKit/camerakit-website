import React from 'react';
import Page from '../components/page';
import Header from '../components/header';
import Navbar from '../components/navbar';

import Docs from '../components/docs/docs';

export default class DocsPage extends React.Component {
  static async getInitialProps({ query }) {
    let docs = '';

    const version = query.v || '1.0.0-beta3.9';

    if (!process.browser) {
      const fs = require('fs');
      const root = `./components/docs/versions/${version}/`;

      const jsonPath = `${root  }pages.json`;
      if (fs.existsSync(jsonPath)) {
        const pages = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
        pages.forEach((page) => {
          const path = root + page;
          if (fs.existsSync(path)) {
            docs += fs.readFileSync(path, 'utf8');
          }
        });
      }
    }

    return { docs, version };
  }

  render() {
    const { docs, version } = this.props;
    return (
      <Page title="CameraKit | Documentation">
        <Header
          height={0}
          offset={0}
          distance={32}
          shadow
          active={0}
        >
          <Navbar />
        </Header>
        <Docs
          docs={docs}
          version={version}
        />
      </Page>
    );
  }
}
