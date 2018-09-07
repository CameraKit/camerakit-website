import React from 'react';

import Nav from '../components/public/nav';
import ContactForm from '../components/contact-form';
import Footer from '../components/public/footer';

const Contact = () => (
  <div className="public">
    <Nav />
    <ContactForm />
    <Footer />
  </div>
);

export default Contact;