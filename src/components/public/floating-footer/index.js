import React from 'react';
import styles from './floating-footer.scss';

import Github from 'static/ic_github.svg';

const FloatingFooter = () => (
  <div className={styles.footer}>
    <div className={`container container--full ${styles.container}`}>
      <a className={styles.wonderkiln} target="_blank" href="https://wonderkiln.com">
      	A Wonderkiln Project
      </a>
      <a href="https://github.com/CameraKit/camerakit-android">
      	<img className={styles.icon} src={Github} />
      	<span className={styles.github}>Github</span>
      </a>
    </div>
  </div>
);

export default FloatingFooter;
