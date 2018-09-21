import React from 'react';
import { connect } from 'react-redux';
import Dashboard from '../components/public/portal/dashboard';

import withAuth from '../utils/withAuth';

class Portal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="portal">
        <Dashboard />
      </div>
    );
  }
}

export default connect()(withAuth(Portal));
