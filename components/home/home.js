import React from 'react';

import features from '../../static/features';
import sponsors from '../../static/sponsors';
import clients from '../../static/clients';

import styles from '../../styles/home.scss';
import featureStyles from '../../styles/features.scss';
import intro from '../../styles/intro.scss';
import globalStylesheet from '../../styles/styles.global.scss';

import phoneTilted from '../../static/il_phone_tilted.svg';
import button from '../../static/btn_scrolldown.svg';

import Feature from './feature';
import News from './news';
import Sponsor from './sponsor';
import Client from './client';

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
              {'The Ultimate Platform for'}
            </h2>
            
            <p>
              {'Open-source camera sdk that helps developers build reliable and extensible camera experiences. Build easily. Boost reliability. Improve user experience.'}
            </p>
          </div>
        </div>
      </div>
      <div role="button">
        <img src={button} className={intro.button} alt="Get Started" />
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
