import React from 'react';

import styles from './subscribe.scss';


class Subscribe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount () {

  }

  render () {
    return (
      <div className={styles.subscribe}>
        <h2 className="heading--small">Stay Up To Date</h2>
        <p className={styles.paragraph}>Some text here. Some text here. Some text here. Some text here. Some text here. Some text here. </p>
        <form className={styles.form}>
          <div className={styles.inputWrapper}>
            <input className={styles.input} type="email" required />
            <button className={styles.submit} type="submit">Subscribe</button>
          </div>
        </form>
      </div>
    );
  }
};

export default Subscribe;
