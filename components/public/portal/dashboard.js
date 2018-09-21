import React from 'react';
import { connect } from 'react-redux';

import Sidebar from './sidebar';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Sidebar />
        <div className="dashboard">
          <span>Dashboard content</span>
        </div>
      </div>
    );
  }
}

export default connect()(Dashboard);
