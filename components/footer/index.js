import React from 'react';
import footer from '../../static/il_footer.png';
import Subscribe from '../subscribe';

import globalStylesheet from '../../styles/styles.global.scss';

import styles from './footer.scss';


const Footer = () => (
  <footer className={styles.footer} style={{ backgroundImage: `url('${footer}')` }}>
    <div className={`${globalStylesheet.container} ${styles.container}`}>
      <Subscribe />
      <nav className={styles.nav}>
        <ul className={styles.links}>
          <li className={styles.listItem}>
            {'© 2018 • CameraKit. All Rights Reserved by Alterac, Inc.'}
          </li>
        </ul>
      </nav>
    </div>
  </footer>
);

export default Footer;
