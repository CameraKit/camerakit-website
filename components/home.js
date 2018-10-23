import React from 'react';

import jump from 'jump.js';

import features from '../static/features';
import sponsors from '../static/sponsors';
import clients from '../static/clients';

import styles from '../styles/home.scss';
import featureStyles from '../styles/features.scss';
import intro from '../styles/intro.scss';
import animation from '../styles/bounce-animation.scss';
import globalStylesheet from '../styles/styles.global.scss';

import phoneTilted from '../static/il_phone_tilted.svg';
import button from '../static/btn_scrolldown.svg';

import Feature from './public/feature';
import News from './public/news';
import Sponsor from './public/sponsor';
import Client from './public/client';

function scrollDown() {
  jump('#features');
}

const Home = ({ feed }) => (
  <div>
    <section className={intro.intro}>
      <div className={`${globalStylesheet.container} ${globalStylesheet['container--large']}`}>
        <div className={intro.content}>
          <div className={intro.phone} />
          <div className={intro.hidden}>
            <h2 className={`${globalStylesheet['heading--large']} ${intro.subheading}`}>
              {'Complete'}
              <br />
              {'Camera Capture Platform'}
            </h2>
            <p>
              {'Build camera-driven experience with ease. Never worry about fragmentation or complex APIs again.'}
            </p>
          </div>
        </div>
      </div>
      <div role="button" tabIndex={0} onClick={scrollDown} onKeyDown={scrollDown}>
        <img src={button} className={`${animation['scroll-button']} ${intro.button}`} alt="Scroll Down" />
      </div>
      <img src={phoneTilted} className={intro.phoneTilted} alt="preview-mockup" />
    </section>
    <section id="trusted-by" className={`${styles.section} ${styles.clients}`}>
      <div className={globalStylesheet.container}>
        <h2 className={globalStylesheet['heading--small']}>
          {'Trusted By'}
        </h2>
        <ul className={`${styles.list} ${styles.clientsList}`}>
          {clients.map(client => (
            <Client
              key={client.name}
              logo={client.logo}
              name={client.name}
              link={client.link}
            />
          ))}
        </ul>
      </div>
    </section>
    <section id="features" className={styles.section}>
      <div className={globalStylesheet.container}>
        <div className={featureStyles.main}>
          <h2 className={globalStylesheet['heading--small']}>
            {'Features'}
          </h2>
          <div className={styles.flexWrapper}>
            <p className={`${globalStylesheet['heading--large']} ${featureStyles.heading}`}>
              {'High-level, simple, and extremely performant'}
            </p>
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
    <section id="news" className={styles.section}>
      <News feed={feed} />
    </section>
    <section id="sponsored-by" className={`${styles.section} ${styles.sponsors}`}>
      <div className={globalStylesheet.container}>
        <h2 className={globalStylesheet['heading--small']}>
          {'Support'}
        </h2>
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
