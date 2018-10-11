import React from 'react';
import Link from 'next/link';

import globalStylesheet from '../../../styles/styles.global.scss';
import styles from './nav.scss';

import Menu from '../menu';
import Logo from './ic_logo.svg';
import LogoType from './ic_logotype.svg';
import MenuIcon from './ic_menu.svg';


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
    const { active, isTop } = this.state;
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
          <div className={styles.brand}>
            <div className={styles.link}>
              <Link href="/">
                <img alt="CameraKit" src={LogoType} />
              </Link>
            </div>
          </div>
          <div className={styles.menu}>
            <button
              className={`${styles.toggle} ${active ? styles.active : ''}`}
              onClick={this.toggleActive}
              aria-expanded={active}
              title="Toggle menu"
              aria-controls="menu"
              type="button"
            >
              <img alt="Toggle menu" src={MenuIcon} />
            </button>
            <Menu active={active} toggle={this.toggleActive} />
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
