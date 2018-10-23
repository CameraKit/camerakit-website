import React from 'react';

import styles from '../../styles/docs.scss';

class Docs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <section className={styles.documentation}>
        <div className={styles.welcome__message}>
          {'Welcome to our new Docs'}
        </div>
      </section>
    );
  }
}

export default Docs;
