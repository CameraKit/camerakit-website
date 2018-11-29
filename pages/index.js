// @flow

import React from 'react';
import Page from '../components/page';
import Header from '../components/header';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import SocialMeta from '../components/social-meta';
import { MediaQueryConsumer } from '../components/media-query';

import Features from '../components/home/features';
import Intro from '../components/home/intro';
import CompanySlider from '../components/home/company-slider';

export default () => (
  <Page title="CameraKit | Unified Camera Platform">
    <SocialMeta
      image="/static/il_footer.png"
      title="CameraKit"
      url="https://camerakit.io"
      description="An open source camera platform that adds reliable photo and video capture to any application. Scalable, updated, and extensible camera functions instantly."
    />
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
    <Intro />
    <CompanySlider />
    <Features />
    <Footer />
  </Page>
);
