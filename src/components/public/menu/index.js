import React from 'react';
import PropTypes from 'prop-types';
import styles from './menu.scss';

const Menu = props => (
  <div id="menu" className={props.active ? styles.active : ''}>
    <div className={styles.overlay} onClick={props.toggle} role="link" tabIndex={0} />
    <div className={styles.menu}>
      <div className={styles.background} />
      <div className={styles.content}>
        <ul className={styles.links}>
          <li className={styles.item}>
            <a className={`heading--large ${styles.link}`} href="http://docs.camerakit.website/#/">Documentation</a>
          </li>
          <li className={styles.item}>
            <a className={`heading--large ${styles.link}`} href="https://github.com/CameraKit/camerakit-android">Github</a>
          </li>
        </ul>
        <span><span role="img" aria-label="American Flag">🇺🇸</span> Made in America</span>
        <span>Made with ❤ by <a className={styles.credit} href="https://www.wonderkiln.com/">Wonderkiln</a></span>
      </div>
    </div>
  </div>
);

Menu.propTypes = {
  active: PropTypes.bool,
  toggle: PropTypes.func,
};

export default Menu;
