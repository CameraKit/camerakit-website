import React from 'react';
import { connect } from 'react-redux';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from 'components/public/payment/CheckoutForm';

import Nav from 'components/public/nav';

import withAuth from '../utils/withAuth';

class Portal extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.token);
  }

  render() {
    return (
      <div className="portal">
        <Nav />
        <StripeProvider apiKey={process.env.STRIPE_PUBLISHABLE_API_KEY}>
          <Elements>
            <CheckoutForm />
          </Elements>
        </StripeProvider>
      </div>
    );
  }
}

export default connect()(withAuth(Portal));
