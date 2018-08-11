import React from 'react';
import logo from '../../../static/brand_wonderkiln_logo.svg';
import footer from '../../../static/il_footer.png';
import Subscribe from '../subscribe';
import styles from './footer.scss';

import global from '../../../styles/styles.global.scss';

const Footer = () => (
  <footer className={styles.footer} style={{ backgroundImage: `url('${footer}')` }}>
    <div className={`${global.container} ${styles.container}`}>
      <Subscribe />
      <a className={styles.link} href="https://www.camerakit.website">
        <img src={logo} className={styles.logo} alt="CameraKit Logo" />
      </a>
      <nav className={styles.nav}>
        <ul className={styles.links}>
          <li className={styles.listItem}>
            <a className={styles.link} href="https://github.com/CameraKit/camerakit-android/blob/master/LICENSE">
              {'License Information'}
            </a>
          </li>
        </ul>
        <div className={styles.copyright}>
          {'© 2018 Alterac, Inc'}
        </div>
      </nav>
    </div>
  </footer>
);

export default Footer;
