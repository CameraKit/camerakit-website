import React from 'react';
import { connect } from 'react-redux';

const containerStyle = {
  width: '100%',
  height: '100%',
  backgroundColor: '#ddd',
  display: 'flex',
  alignItems: 'center',
};

const textStyle = {
  fontSize: '2em',
  margin: '0 auto',
};

class ComingSoon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={containerStyle}>
        <span style={textStyle}>Coming Soon...</span>
      </div>
    );
  }
}

export default connect()(ComingSoon);
