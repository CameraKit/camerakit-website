import { withRouter } from 'next/router';

import Page from '../components/page';

import Header from '../components/header';
import Navbar from '../components/navbar';
import GetStarted from '../components/getstarted';
import Footer from '../components/footer';
import { MediaQueryConsumer } from '../components/media-query';

function GetStartedPage({ router }) {
  const { item, from } = router.query;
  return (
    <Page title="CameraKit | Getting Started">
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
      <GetStarted />
      <Footer />
    </Page>
  );
}

export default withRouter(GetStartedPage);
