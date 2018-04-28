import React from 'react';
import styles from './nav.scss';

import Logo from './ic_logo.svg';
import LogoType from './ic_logotype.svg';
import Menu from './ic_menu.svg';

const Nav = () => (
  <nav className={styles.nav}>
    <div className={`container container--full ${styles.container}`}>
      <div className={styles.Logo}>
        <Logo />
      </div>
      <div className={styles.Brand}>
        <LogoType />
      </div>
      <div className={styles.Menu}>
        { /* <Menu /> */ }
      </div>
    </div>
  </nav>
);

export default Nav;
