import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';

import Container from './container';
import { MediaQueryConsumer } from './media-query';

import CameraKitLogo from './logo';
import TwitterLogo from './icons/twitter';
import GithubLogo from './icons/github';
import SpectrumLogo from './icons/spectrum';

import MenuIcon from './ic_menu';

import styles from '../styles/navbar.scss';

class MobileNavbar extends React.Component {
  state = {
    opened: false
  };

  render() {
    let navClassNames = styles.navbar;

    if (this.state.opened) {
      navClassNames += ` ${styles.navbar_open}`;
    }

    return (
      <nav className={navClassNames}>
        <div className={styles.navbar__content}>
          <a href="/" className={styles.navbar__content__home}>
            <CameraKitLogo withoutText />
          </a>
          <a
            href="javascript:void(0);"
            className={styles.navbar__button}
            onClick={() => this.setState(({ opened }) => ({
              opened: !opened
            }))}
          >
            <MenuIcon />
            <span>Menu</span>
          </a>
        </div>
        <div className={styles.navbar__menu}>
          <ul>
            <li><a href="">Docs</a></li>
            <li><a href="">Learn</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Twitter</a></li>
            <li><a href="">Spectrum</a></li>
            <li><a href="">Github</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

const DesktopNavbar = () => (
  <nav className={`${styles.navbar} ${styles.navbar_full}`}>
    <div className={styles.navbar__content}>
      <a href="/" rel="noreferrer" class={styles.navbar__content__home}>
        <CameraKitLogo />
      </a>
      <span className={styles.navbar__flex} />
      <a href="/docs">Docs</a>
      <a href="/learn">Learn</a>
      <a href="/blog">Blog</a>
      <span className={styles.navbar__separator} />
      <a
        className={`${styles.navbar__button} ${styles.navbar__button_circle}`}
        href="https://twitter.com/withcamerakit"
        rel="noopener noreferrer"
        target="_blank"
      >
        <TwitterLogo />
      </a>
      <a
        className={`${styles.navbar__button} ${styles.navbar__button_circle}`}
        href="https://spectrum.chat/camerakit"
        rel="noopener noreferrer"
        target="_blank"
      >
        <SpectrumLogo />
      </a>
      <a
        className={styles.navbar__button}
        href="https://github.com/CameraKit/camerakit-android"
        rel="noopener noreferrer"
        target="_blank"
      >
        <GithubLogo />
        <span>Github</span>
      </a>
    </div>
  </nav>
);

export default withRouter(() => {
  return (
    <MediaQueryConsumer>
      {(media) => {
        if (media.isMobile) return <MobileNavbar />;
        return <DesktopNavbar />;
      }}
    </MediaQueryConsumer>
  );
});
