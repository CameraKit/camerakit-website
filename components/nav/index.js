import React from 'react';
import Link from 'next/link';

import globalStylesheet from '../../styles/styles.global.scss';
import styles from './nav.scss';

import Logo from '../../static/brand_camerakit_logo.svg';
import GithubLogo from '../../static/ic_github.svg';


class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      isTop: true,
    };

    this.toggleActive = this.toggleActive.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    const { isTop } = this.state;
    document.addEventListener('scroll', () => {
      const isCurrentlyTop = window.scrollY < 100;
      if (isCurrentlyTop !== isTop) {
        this.onScroll(isTop);
      }
    });
  }

  onScroll(isTop) {
    this.setState({ isTop });
  }

  toggleActive() {
    this.setState(prevState => ({ active: !prevState.active }));
  }

  render() {
    const { isTop } = this.state;
    return (
      <nav className={isTop ? styles.nav : styles.nav__scrolled}>
        <div className={`${globalStylesheet.container} ${globalStylesheet['container--full']} ${styles.container}`}>
          <div className={styles.logo}>
            <div className={styles.link}>
              <Link href="/">
                <img alt="CameraKit logo" src={Logo} />
              </Link>
            </div>
          </div>
          <div className={styles.menu}>
            <ul className={styles.links}>
              <li className={styles.item}>
                <Link href="/docs">
                  <a href="/docs" className={`${global['heading--large']} ${styles.link}`}>
                    {'Docs'}
                  </a>
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="/learn">
                  <a href="/learn" className={`${global['heading--large']} ${styles.link}`}>
                    {'Learn'}
                  </a>
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="/contact">
                  <a href="/contact" className={`${global['heading--large']} ${styles.link}`}>
                    {'Contact'}
                  </a>
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="/getstarted">
                  <a href="/getstarted" className={`${global['heading--large']} ${styles.link}`}>
                    {'Get Started'}
                  </a>
                </Link>
              </li>
              <li className={styles.item}>
                { '|' }
              </li>
              <li className={styles.item}>
                <Link href="https://github.com/CameraKit/camerakit-android">
                  <a href="https://github.com/CameraKit/camerakit-android" className={`${global['heading--large']} ${styles.link}`} target="_blank" rel="noopener noreferrer">
                    <img src={GithubLogo} alt="Github Logo" className={styles.github} />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
