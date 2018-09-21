import React from 'react';
import { connect } from 'react-redux';

class Sponsorship extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.authenticated ? <span>signed up yo</span> : <a>sign up yo</a>}
      </div>
    );
  }
}

export default connect()(Sponsorship);
