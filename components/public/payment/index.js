import React from 'react';
import { connect } from 'react-redux';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from 'components/public/payment/CheckoutForm';

class Payment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StripeProvider apiKey={process.env.STRIPE_PUBLISHABLE_API_KEY || 'stripe'}>
        <Elements>
          <CheckoutForm />
        </Elements>
      </StripeProvider>
    );
  }
}

export default connect()(Payment);
