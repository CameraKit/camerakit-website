import React from 'react';
import footer from 'static/il_footer.png';
import Subscribe from 'components/public/subscribe';

import globalStylesheet from 'styles/styles.global.scss';

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
        {/* <div className={styles.copyright}>
        {'© 2018 • CameraKit is a registered trademark of Alterac, Inc.'}
        </div> */}
      </nav>
    </div>
  </footer>
);

export default Footer;
