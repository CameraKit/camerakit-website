import React from 'react';
import { connect } from 'react-redux';
import DashboardLayout from '../components/public/portal/dashboard';
import ComingSoon from '../components/public/portal/view/comingsoon';

import withAuth from '../utils/withAuth';

class Settings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DashboardLayout view="Settings">
        <ComingSoon />
      </DashboardLayout>
    );
  }
}

export default connect()(withAuth(Settings));
