import { withRouter } from 'next/router';

import Page from '../components/page';

import Nav from '../components/navbar';
import Welcome from '../components/getstarted/welcome';
import Footer from '../components/footer';

function Getstarted({ router }) {
  const { item, from } = router.query;
  return (
    <Page title="CameraKit | Getting Started">
      <Nav />
      <Welcome />
      <Footer />
    </Page>
  )};

export default withRouter(Getstarted);
