import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './menu.scss';

import usaFlag from '../../../static/ic_usa.svg';

import global from '../../../styles/styles.global.scss';

const Menu = ({ active, toggle }) => (
  <div id="menu" className={active ? styles.active : ''}>
    <div className={styles.overlay} onClick={toggle} onKeyDown={toggle} role="link" tabIndex={0} />
    <div className={styles.menu}>
      <div className={styles.background} />
      <div className={styles.content}>
        <ul className={styles.links}>
         <li className={styles.item}>
            <Link href="http://docs.camerakit.website'">
              <a href="http://docs.camerakit.website/" className={`${global['heading--large']} ${styles.link}`}>
                {'Docs'}
              </a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="https://github.com/CameraKit/camerakit-android">
              <a href="https://github.com/CameraKit/camerakit-android" className={`${global['heading--large']} ${styles.link}`}>
                {'Github'}
              </a>
            </Link>
          </li>
        </ul>
        <div>
          <span>
            <span role="img" aria-label="American Flag">
              <img src={usaFlag} className={styles.flag__usa} alt="American Flag" />
            </span>
            {' Built and Managed in the USA'}
          </span>
          <br />
          <span>
            {'Made with ❤ by the CameraKit Team'}
          </span>
        </div>
      </div>
    </div>
  </div>
);

Menu.defaultProps = {
  active: false,
};

Menu.propTypes = {
  active: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
};

export default Menu;
