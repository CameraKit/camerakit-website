import React from 'react';
import Page from '../components/page';
import Header from '../components/header';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import SocialMeta from '../components/social-meta';
import { MediaQueryConsumer } from '../components/media-query';

import Docs from '../components/learn/learn';

export default() => (
  <Page title="CameraKit | Learn">
    <MediaQueryConsumer>
      {({ isMobile }) => (
        <Header
          height={0}
          offset={-32}
          distance={32}
          shadow
          active={isMobile ? 32 : 320}
        >
          <Navbar />
        </Header>
      )}
    </MediaQueryConsumer>
    <Docs />
    <Footer />
  </Page>
);