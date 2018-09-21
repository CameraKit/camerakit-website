import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';

const sidebarStyle = {
  height: '100%',
  display: 'flex',
  width: '300px',
  backgroundColor: '#eee',
  flexDirection: 'column',
};

const itemStyle = {
  padding: '2em',
  cursor: 'pointer',
  fontSize: '2em',
}

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={sidebarStyle}>
        <Link href="/dashboard">
          <span style={itemStyle}>Dashboard</span>
        </Link>
        <Link href="/sponsorship">
          <span style={itemStyle}>Sponsorship</span>
        </Link>
        <Link href="/settings">
          <span style={itemStyle}>Settings</span>
        </Link>
      </div>
    );
  }
}

export default connect()(Sidebar);
