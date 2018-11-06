import React from 'react';
import Page from '../components/page';

import Docs from '../components/docs/docs';

export default class DocsPage extends React.Component {
  static async getInitialProps({ query }) {
    let docs = '';

    const version = query.v || '0.1.0';
    
    if (!process.browser) {
      const fs = require('fs');
      const root = `./components/docs/versions/${version}/`;
      
      const jsonPath = root + 'pages.json';
      if (fs.existsSync(jsonPath)) {
        const pages = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
        pages.forEach(page => {
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
        <Docs docs={docs} version={version} />
      </Page>
    );
  }
}
