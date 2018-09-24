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

  getAmount() {
    const amount = this.amountInput.value;
    const parsedAmount = parseFloat(amount);
    if (Number.isFinite(parsedAmount)) {
      return Math.floor(parsedAmount * 100);
    }
    return null;
  }

  async submit() {
    const { stripe } = this.props;
    const { error, token } = await stripe.createToken({ name: 'Name' });
    const amount = this.getAmount();
    if (amount == null) {
      return this.setState({ error: 'Invalid amount' });
    }
    if (error) {
      return this.setState({ error: error.message || 'Sorry! We could not process your payment.' });
    }
    const response = await Auth.callApi(`http://localhost:3001/users/sponsor`, {
      method: 'POST',
      body: JSON.stringify({ token: token.id, amount }),
    }, true);

    if (!response.ok) {
      return this.setState({ error: 'Sorry! We could not process your payment.' });
    }
    return this.setState({ complete: true, error: '' });
  }

  render() {
    const { complete, error } = this.state;
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
              <h2>
                {'Sponsor CameraKit!'}
              </h2>
              <CardElement
                className={styles.StripeElement}
                {...createOptions('1em', '5px')}
              />
              <div className={styles.submit}>
                <span className={styles.amount}>
                  {/* {'Amount'} */}
                </span>
                <span className={styles.usd}>
                  <input ref={ref => { this.amountInput = ref; }} className={styles.label} defaultValue="5" />
                </span>
                {error && (
                  <span className={styles.error}>
                    {error}
                  </span>
                )}
                <button className={styles.sponsor} onClick={this.submit} type="submit">
                  <span>
                    {'Sponsor'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default injectStripe(CheckoutForm);
