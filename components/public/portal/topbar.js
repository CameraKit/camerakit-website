import React from 'react';
import { connect } from 'react-redux';

const topbarStyle = {
  height: '50px',
  backgroundColor: '#eee',
};

const titleStyle = {
  textAlign: 'center',
  fontSize: '2em',
};

class Topbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={topbarStyle}>
        <span style={titleStyle}>{this.props.view}</span>
      </div>
    );
  }
}

export default connect()(Topbar);
