import React from 'react';

import jump from 'jump.js';

import phoneTilted from '../static/il_phone_tilted.svg';
import button from '../static/btn_scrolldown.svg';

import Feature from '../components/public/feature';
import News from '../components/public/news';
import Sponsor from '../components/public/sponsor';

import features from '../static/features';
import sponsors from '../static/sponsors';

import styles from '../static/home.scss';
import featureStyles from '../static/features.scss';
import intro from '../static/intro.scss';

import global from '../styles/styles.global.scss';
import animation from '../styles/bounce-animation.scss';

function scrollDown() {
  jump('#features');
}

const Home = () => (
  <div>
    <section className={intro.intro}>
      <div className={`${global.container} ${global['container--large']}`}>
        <div className={intro.content}>
          <div className={intro.phone} />
          <div className={intro.hidden}>
            <h2 className={`${global['heading--large']} ${intro.subheading}`}>Complete <br />Camera Library</h2>
            <p>CameraKit is an open-source library to support the Android Camera 1 and 2 APIs. Massively increase stability and reliability of photo and video capture on all Android devices.</p>
            <div className={intro.madeInAmerica}><span role="img" aria-label="American Flag">🇺🇸</span> Built and Managed in the USA</div>
          </div>
        </div>
      </div>
      <img role="button" src={button} className={`${animation['scroll-button']} ${intro.button}`} onClick={scrollDown} alt="Scroll Down" />
      <img src={phoneTilted} className={intro.phoneTilted} alt="preview-mockup" />
    </section>
    <section id="features" className={styles.section}>
      <div className={global.container}>
        <div className={featureStyles.main}>
          <h2 className={global['heading--small']}>Features</h2>
          <div className={styles.flexWrapper}>
            <p className={`${global['heading--large']} ${featureStyles.heading}`}>High-level, simple, and extremely performant</p>
            <ul className={`${styles.list} ${styles.flexWrapper} ${featureStyles.list}`}>
              {features.map(feature => (
                <Feature
                  key={feature.text}
                  text={feature.text}
                  description={feature.description}
                  icon={feature.icon}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
    <News />
    <section className={`${styles.section} ${styles.sponsors}`}>
      <div className={global.container}>
        <h2 className={global['heading--small']}>Support</h2>
        <ul className={`${styles.list} ${styles.sponsorsList}`}>
          {sponsors.map(sponsor => (
            <Sponsor
              key={sponsor.name}
              logo={sponsor.logo}
              name={sponsor.name}
              link={sponsor.link}
            />
          ))}
        </ul>
      </div>
    </section>
  </div>
);

export default Home;
