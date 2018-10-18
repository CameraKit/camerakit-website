import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import ckLogo from '../../../static/favicon/favicon-196x196.png';
import AuthService from '../../../utils/auth';

class Payment extends React.Component {
  stripeProps = {
    image: ckLogo,
    stripeKey: process.env.STRIPE_PUBLISHABLE_API_KEY || 'stripe',
    token: this.submit.bind(this),
  }

  auth = new AuthService();

  constructor(props) {
    super(props);
    this.state = {
      error: '',
      complete: false,
      amount: 10,
      monthly: false,
    };
    this.onTypeClick = this.onTypeClick.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
  }

  onTypeClick() {
    this.setState(prevState => ({ monthly: !prevState.monthly }));
  }

  onAmountChange(e) {
    this.setState({ amount: e.target.value });
  }

  async submit(token) {
    const { amount, monthly } = this.state;
    const response = await this.auth.callApi(`${process.env.API_BASE_URL}/payment/support`, {
      method: 'POST',
      body: JSON.stringify({
        amount: amount * 100, monthly, token: token.id, email: token.email, plan: 'plan_Dmuw5XdiRkUseO', // using example 5 dollar/month plan
      }),
    }, true);

    if (!response.ok) {
      return this.setState({ error: 'Sorry! We could not process your payment.' });
    }
    return this.setState({ complete: true, error: '' });
  }

  render() {
    const {
      error, complete, monthly, amount,
    } = this.state;
    const name = `${monthly ? 'Monthly' : 'Custom one time'} donation.`;
    const description = `Help support CameraKit${monthly ? ' monthly!' : '!'}`;
    return (
      <div>
        { !complete ? (
          <div>
            <button type="button" onClick={this.onTypeClick}>{monthly ? 'Monthly' : 'One Time'}</button>
            <span>{name}</span>
            <br />
            <span>{description}</span>
            <br />
            {!monthly && <input value={amount} onChange={this.onAmountChange} />}
            <br />
            <StripeCheckout
              name={name}
              currency="USD"
              description={description}
              amount={monthly ? 500 : (amount * 100)} // using example 5 dollar/month plan
              {...this.stripeProps}
            />
            <span>{error}</span>
          </div>
        ) : <span>Thank you for the support! - The CameraKit team</span>
        }
      </div>
    );
  }
}

export default connect()(Payment);
