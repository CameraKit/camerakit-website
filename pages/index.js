import React from 'react';
import { connect } from 'react-redux';

import Nav from '../components/nav';
import Home from '../components/home/home';
import Footer from '../components/footer';

import * as Feed from '../lib/feed';

class Public extends React.Component {
  static async getInitialProps() {
    let feed = [];
    
    try {
      feed = await Feed.get();
    } catch(err) {
      console.error('Error while downloading feed: %s', err);
    }

    return { feed };
  }

  render() {
    const { feed } = this.props;
    return (
      <div className="public">
        <Nav />
        <Home feed={feed.items} />
        <Footer />
      </div>
    );
  }
}

export default connect()(Public);
