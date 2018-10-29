import React from 'react';

import styles from '../styles/getstarted.scss';

class GetStarted extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <section className={styles.learn}>
        <div className={styles.welcome__message}>
          <h1>
            {'Getting Started with CameraKit'}
          </h1>
          <h3>
            {'Getting started with CameraKit is super simple, see below!'}
          </h3>
        </div>
      </section>
    );
  }
}

export default GetStarted;
