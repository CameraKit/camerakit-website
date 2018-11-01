import React from 'react';

import Nav from '../components/navbar';
import Docs from '../components/docs/docs';
import Footer from '../components/footer';

class Contact extends React.Component {
  static async getInitialProps({ query }) {
    let docs;

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
      <div className="public">
        <Nav />
        <Docs docs={docs} version={version} />
        <Footer />
      </div>
    );
  }
}

export default Contact;
