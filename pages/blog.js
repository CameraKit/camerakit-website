import React from 'react';

import Nav from '../components/navbar';
import Blog from '../components/blog';
import Footer from '../components/footer';

import * as Feed from '../lib/feed';

class BlogPage extends React.Component {
  static async getInitialProps() {
    let feed = {};
    
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
        <Blog feed={feed.items} />
        <Footer />
      </div>
    );
  }
}

export default BlogPage;
