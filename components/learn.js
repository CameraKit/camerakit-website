import React from 'react';

import styles from '../styles/learn.scss';

class Learn extends React.Component {
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
            {'Welcome to our new Learn page'}
          </h1>
          <h3>
            {'A central place to help guide your usage of CameraKit and BlurKit.'}
          </h3>
        </div>
      </section>
    );
  }
}

export default Learn;
