import React from 'react';
import { connect } from 'react-redux';

import Nav from '../components/public/nav';
import Home from '../components/home';
import Footer from '../components/public/footer';

const Public = () => (
  <div className="public">
    <Nav />
    <Home />
    <Footer />
  </div>
);

export default connect()(Public);
