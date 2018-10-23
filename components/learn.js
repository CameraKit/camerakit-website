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
          {'Time to learn something new!'}
        </div>
      </section>
    );
  }
}

export default Learn;
