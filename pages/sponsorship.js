import React from 'react';
import { connect } from 'react-redux';

import DashboardLayout from '../components/public/portal/dashboard';
import Sponsor from '../components/public/portal/view/sponsor';
import withAuth from '../utils/withAuth';

class Sponsorship extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const user = this.props.auth.getProfile();
    return (
      <DashboardLayout view="Sponsorship">
        <Sponsor authenticated={this.props.authenticated}/>
      </DashboardLayout>
    );
  }
}

export default connect()(withAuth(Sponsorship));
