import React from 'react';
import footer from '../../../static/il_footer.png';
import Subscribe from '../subscribe';
import styles from './footer.scss';

import global from '../../../styles/styles.global.scss';

const Footer = () => (
  <footer className={styles.footer} style={{ backgroundImage: `url('${footer}')` }}>
    <div className={`${global.container} ${styles.container}`}>
      <Subscribe />
      <nav className={styles.nav}>
        <ul className={styles.links}>
          <li className={styles.listItem}>
            {'© 2018 • CameraKit is a registered trademark of Alterac, Inc.'}
          </li>
        </ul>
        {/* <div className={styles.copyright}>
        {'© 2018 • CameraKit is a registered trademark of Alterac, Inc.'}
        </div> */}
      </nav>
    </div>
  </footer>
);

export default Footer;
