import React from 'react';

import styles from './home.scss';

const Home = props => (
  <div>
    <div className={styles.intro}>
      <p className={styles.preamble}>
        Wonderkiln presents
      </p>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h2 className={styles.heading}>An easy to use library for Android</h2>
          <p className={styles.text}>
            Praesent vitae nulla aliquam sem tristique venenatis metus ex, pretium vitae mauris in.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
