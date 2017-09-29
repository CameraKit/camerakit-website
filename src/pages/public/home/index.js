import React from 'react';

import features from './features.js';

import styles from './home.scss';
import intro from './intro.scss';


const Home = props => (
  <div>
    <section className={intro.intro}>
      <p className={intro.preamble}>
        Wonderkiln presents
      </p>
      <div className={`container ${intro.container}`}>
        <div className={intro.content}>
          <h2 className={intro.heading}>An easy to use library for Android</h2>
          <p className={intro.text}>
            Praesent vitae nulla aliquam sem tristique venenatis metus ex, pretium vitae mauris in.
          </p>
        </div>
      </div>
    </section>
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Features</h2>
        <ul className={styles.flexWrapper}>
          {features.map(feature => (
            <li>{feature.text}</li>
          ))}
        </ul>
      </div>
    </section>
  </div>
);

export default Home;
