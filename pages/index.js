import React from 'react';
import { connect } from 'react-redux';

import Nav from '../components/nav';
import Home from '../components/home/home';
import Footer from '../components/footer';

const Public = () => (
  <div className="public">
    <Nav />
    <Home />
    <Footer />
  </div>
);

export default connect()(Public);
