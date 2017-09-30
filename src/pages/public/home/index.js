import React from 'react';

import phoneHorizontal from 'static/il-phone.svg';
import phoneVertical from 'static/il-phone-vertical.svg';

import Feature from 'components/public/feature';
import Sponsor from 'components/public/sponsor';

import features from './features';
import sponsors from './sponsors';

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
        <ul className={`${styles.list} ${styles.flexWrapper}`}>
          {features.map(feature => (
            <Feature
              key={feature.text}
              text={feature.text}
              icon={feature.icon}
            />
          ))}
        </ul>
      </div>
    </section>
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>About Camerakit</h2>
        <div className="container--medium">
          <p>In hac habitasse platea dictumst. Nullam mattis orci rhoncus justo maximus, nec viverra risus condimentum. Morbi erat magna, aliquam et risus et, bibendum fringilla dolor.</p>
          <p>Nulla malesuada eros eu enim semper auctor. Maecenas congue mauris sit amet tellus venenatis accumsan. In hac habitasse platea dictumst. Donec eros risus, fermentum venenatis purus non, malesuada consequat arcu. Aliquam scelerisque odio mi, fringilla efficitur risus rutrum vitae. Vestibulum mollis vehicula magna, ut mollis sapien consectetur sed.</p>
          <p>Proin blandit id nisl quis interdum. Sed tristique faucibus neque, non porttitor nunc auctor in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        </div>
      </div>
    </section>
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Sponsors</h2>
        <ul className={styles.list}>
          {sponsors.map(sponsor => (
            <Sponsor
              key={sponsor.name}
              logo={sponsor.logo}
              name={sponsor.name}
              quote={sponsor.quote}
              source={sponsor.source}
            />
          ))}
        </ul>
      </div>
    </section>
  </div>
);

export default Home;
