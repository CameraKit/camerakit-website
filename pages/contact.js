import React from 'react';

import Page from '../components/page';
import SocialMeta from '../components/social-meta';
import { MediaQueryConsumer } from '../components/media-query';
import Header from '../components/header';
import Navbar from '../components/navbar';
import ContactForm from '../components/contact/contact-form';
import Footer from '../components/footer';

export default () => (
  <Page title="CameraKit | Contact our Team">
    <SocialMeta
      image="/static/il_footer.png"
      title="CameraKit"
      url="https://camerakit.io"
      description="CameraKit is an open-source library to support the Android Camera 1 and 2 APIs. Massively increase stability and reliability of photo and video capture on all Android devices."
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
    <ContactForm />
    <Footer />
  </Page>
);
