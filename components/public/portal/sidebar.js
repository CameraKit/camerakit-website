import React from 'react';
import { connect } from 'react-redux';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar">
        <a>Dashboard</a>
        <a>Sponsorship</a>
        <a>Account</a>
      </div>
    );
  }
}

export default connect()(Sidebar);
