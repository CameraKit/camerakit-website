import React from 'react';
import Github from 'static/ic_github.svg';
import styles from './floating-footer.scss';

import global from '../../../styles/styles.global.scss';

const FloatingFooter = () => (
  <div className={styles.footer}>
    <div className={`${global.container} ${global['container--full']} ${styles.container}`}>
      <a className={styles.wonderkiln} target="_blank" href="https://www.wonderkiln.com">
      	A Wonderkiln Project
      </a>
      <a href="https://github.com/CameraKit/camerakit-android">
        <img className={styles.icon} src={Github} alt="github icon" />
        <span className={styles.github}>Github</span>
      </a>
    </div>
  </div>
);

export default FloatingFooter;
