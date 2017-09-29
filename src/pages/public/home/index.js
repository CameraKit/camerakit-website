import React from 'react';

import phoneHorizontal from 'static/il-phone.svg';
import phoneVertical from 'static/il-phone-vertical.svg';

import features from './features';

import styles from './home.scss';
import intro from './intro.scss';


const Home = props => (
  <div>
    <section className={intro.intro}>
      <div className={`container ${intro.container}`}>
        <p className={intro.preamble}>
          Wonderkiln presents
        </p>
        <div className={intro.phoneWrapper}>
          <img src={phoneHorizontal} className={intro.phoneHorizontal} alt="" />
          <img src={phoneVertical} className={intro.phoneVertical} alt="" />
          <div className={intro.content}>
            <h2 className={intro.heading}>An easy to use library for Android</h2>
            <p className={intro.text}>
              Praesent vitae nulla aliquam sem tristique venenatis metus ex, pretium vitae mauris in.
            </p>
          </div>
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
