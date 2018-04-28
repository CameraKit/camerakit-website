import React from 'react';

import jump from 'jump.js'

import phone from 'static/il-phone.svg';
import phoneTilted from 'static/il_phone_tilted.svg';
import button from 'static/btn_scrolldown.svg';

import FloatingFooter from 'components/public/floating-footer';
import Feature from 'components/public/feature';
import News from 'components/public/news';
import Sponsor from 'components/public/sponsor';

import features from './features';
import sponsors from './sponsors';

import styles from './home.scss';
import featureStyles from './features.scss';
import intro from './intro.scss';

function scrollDown () {
  jump('#features');
}

const Home = () => (
  <div>
    <FloatingFooter />
    <section className={intro.intro}>
      <div className='container container--large'>
        <div className={intro.content}>
          <div className={intro.phone} />
          <div className={intro.hidden}>
            <h2 className={`heading--large ${intro.subheading}`}>Complete <br />Camera Library</h2>
            <p>CameraKit is an open-source library to support the Android Camera 1 and 2 APIs. Massively increase stability and reliability of photo and video capture on all Android devices.</p>
          </div>
        </div>
      </div>
      <img role="button" src={button} className={`scroll-button ${intro.button}`} onClick={scrollDown} alt="Scroll Down" />
      <img src={phoneTilted} className={intro.phoneTilted} alt="preview-mockup" />
    </section>
    <section id="features" className={styles.section}>
      <div className="container">
        <div className={featureStyles.main}>
          <h2 className='heading--small'>Features</h2>
          <div className={styles.flexWrapper}>
            <p className={`heading--large ${featureStyles.heading}`}>High-level, simple, and extremely performant</p>
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
      <div className="container">
        <h2 className="heading--small">Support</h2>
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
