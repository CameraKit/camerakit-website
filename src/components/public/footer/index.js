import React from 'react';
import logo from 'static/brand_wonderkiln_logo.svg';

import styles from './footer.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={`container ${styles.container}`}>
      <img src={logo} className={styles.logo} alt="Wonderkiln Logo" />
      <nav className={styles.nav}>
        <ul className={styles.links}>
          <li className={styles.listItem}>
            <a className={styles.link} href="/">
              About Wonderkiln
            </a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.link} href="/">
              Terms of Use
            </a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.link} href="/">
              License
            </a>
          </li>
        </ul>
        <div className={styles.copyright}>
          © 2017 WonderKiln LLC
        </div>
      </nav>
    </div>
  </footer>
);

export default Footer;
