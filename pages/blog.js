import React from 'react';

import Page from '../components/page';
import Header from '../components/header';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Blog from '../components/blog';
import SocialMeta from '../components/social-meta';
import { MediaQueryConsumer } from '../components/media-query';

import * as Feed from '../lib/feed';

class BlogPage extends React.Component {
  static async getInitialProps() {
    let feed = {};

    try {
      feed = await Feed.get();
    } catch (err) {
      console.error('Error while downloading feed: %s', err);
    }

    return { feed };
  }

  render() {
    const { feed } = this.props;
    return (
      <Page title="CameraKit | Blog">
        <MediaQueryConsumer>
          {({ isMobile }) => (
            <Header
              height={0}
              offset={0}
              distance={32}
              shadow
              active={isMobile ? 32 : 320}
            >
              <Navbar />
            </Header>
          )}
        </MediaQueryConsumer>
        <Blog feed={feed.items} />
        <Footer />
      </Page>
    );
  }
}

export default BlogPage;
