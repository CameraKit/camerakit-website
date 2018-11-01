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
      docs = fs.readFileSync(`./components/docs/versions/${version}.md`, 'utf8');
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
