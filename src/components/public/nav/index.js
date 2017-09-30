import React from 'react';
import styles from './nav.scss';

import Logo from './brand_camerakit_logo.svg';

const Nav = () => (
  <nav className={styles.nav}>
    <div className={`container ${styles.container}`}>
      <div className={styles.brand}>
        <Logo />
      </div>
      <div className={styles.links}>
        <a className={styles.link} href="/">
          View on Github
        </a>
      </div>
    </div>
  </nav>
);

export default Nav;
