import React from 'react';
import { connect } from 'react-redux';
import Payment from 'components/public/payment/index';

class Sponsor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Payment />
    );
  }
}

export default connect()(Sponsor);
