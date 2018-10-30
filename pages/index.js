import React from 'react';
import Page from '../components/page';
import Header from '../components/header';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Notification from '../components/notification';
import SocialMeta from '../components/social-meta';
import { MediaQueryConsumer } from '../components/media-query';

import Home from '../components/home/home';
import Intro from '../components/home/intro';

export default () => (
  <Page title="CameraKit | Unified Camera Library for Android">
    <SocialMeta
      image={'/static/il_footer.png'}
      title="CameraKit"
      url="https://camerakit.io"
      description="CameraKit is an open-source library to support the Android Camera 1 and 2 APIs. Massively increase stability and reliability of photo and video capture on all Android devices."
    />
    <MediaQueryConsumer>
      {({ isMobile }) => (
        <Header
          height={32}
          offset={-32}
          distance={32}
          shadow
          active={isMobile ? 32 : 320}
        >
          <Navbar />
        </Header>
      )}
    </MediaQueryConsumer>
    <Intro />
    <Home />
    <Footer />
  </Page>
);
