import React from 'react';

import jump from 'jump.js'

import phone from 'static/il-phone.svg';
import phoneTilted from 'static/il_phone_tilted.svg';
import button from 'static/btn_scrolldown.svg';

import FloatingFooter from 'components/public/floating-footer';
import Feature from 'components/public/feature';
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
          <div className={intro.phone}>
            {/*<img src={phone} className={intro.phoneImage} alt="" />
            <h1 className={`heading--large ${intro.heading}`}>The Best Camera API on Android</h1>*/}
          </div>
          <div className={intro.hidden}>
            <h2 className={`heading--large ${intro.subheading}`}>Completely <br />Open Source</h2>
            <p>Proudly made by people just like you. Who really like cats. Austin don't forget to change this text.</p>
          </div>
        </div>
      </div>
      <img role="button" src={button} className={`scroll-button ${intro.button}`} onClick={scrollDown} alt="Scroll Down" />
      <img src={phoneTilted} className={intro.phoneTilted} />
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
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>About CameraKit</h2>
        <div className="container--medium">
          <p>CameraKit makes sense of one of the hardest Android APIs, the Camera 1 and Camera 2 APIs in the Android SDK. Our goal is to make our open-source library into a layer that makes those difficult APIs readily simple yet significantly more powerful.</p>
          <p>We are working on making new improvements to the library by expanding into new features and consistent improvements that are more powerful and performance-focused. </p>
          <p>We continually advance the library and encourage issues to be created, pull requests submitted, and even email requests. We are very active and look forward to collaborating! Be sure to check out our sponsors. If you are a company interested in helping us support the library, reach out to us here: <a href="mailto:contact@camerakit.website">contact@camerakit.website</a></p>
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
