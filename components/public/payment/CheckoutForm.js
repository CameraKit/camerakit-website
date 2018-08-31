import React, { Component } from 'react';

import { CardElement, injectStripe } from 'react-stripe-elements';
import AuthService from 'utils/auth';

import globalStylesheet from 'styles/styles.global.scss';
import styles from './payment.scss';

const Auth = new AuthService();

const createOptions = (fontSize, padding) => ({
  style: {
    base: {
      fontSize,
      color: '#424770',
      letterSpacing: '0.025em',
      fontFamily: 'Source Code Pro, monospace',
      '::placeholder': {
        color: '#aab7c4',
      },
      padding,
    },
    invalid: {
      color: '#9e2146',
    },
  },
});

class CheckoutForm extends Component {
  constructor(props) {
    super(props);

    this.state = { complete: false };
    this.submit = this.submit.bind(this);
  }

  async submit() {
    const { stripe } = this.props;
    const { error, token } = await stripe.createToken({ name: 'Name' });
    if (error) {
      console.log(error);
    } else {
      const response = await Auth.callApi('http://localhost:3001/users/sponsor', {
        method: 'POST',
        body: JSON.stringify({ token: token.id }),
      });

      if (response.ok) this.setState({ complete: true });
    }
  }

  render() {
    const { complete } = this.state;
    if (complete) {
      return (
        <h1>
          {'Purchase Complete'}
        </h1>
      );
    }
    return (
      <section className={styles.payment}>
        <div className={globalStylesheet.container}>
          <div className={styles.container}>
            <div className="checkout">
              <p>
                {'Sponsor CameraKit!'}
              </p>
              <CardElement
                className={styles.StripeElement}
                {...createOptions('1em', '5px')}
              />
              <button type="submit" onClick={this.submit}>
                {'Sponsor'}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default injectStripe(CheckoutForm);
