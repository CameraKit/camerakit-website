import React from 'react';

import Nav from '../components/navbar';
import ContactForm from '../components/contact/contact-form';
import Footer from '../components/footer';

const Contact = () => (
  <div className="public">
    <Nav />
    <ContactForm />
    <Footer />
  </div>
);

export default Contact;
