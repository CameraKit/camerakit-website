import React from 'react';
import styles from './nav.scss';

import Menu from '../menu';
import Logo from './ic_logo.svg';
import LogoType from './ic_logotype.svg';
import MenuIcon from './ic_menu.svg';

import global from '../../../styles/styles.global.scss';

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
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.onScroll( isTop );
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
    const { active } = this.state;
    return (
      <nav className={this.state.isTop ? styles.nav : styles.nav__scrolled}>
        <div className={`${global.container} ${global['container--full']} ${styles.container}`}>
          <div className={styles.logo}>
            <img alt="CameraKit logo" src={Logo} />
          </div>
          <div className={styles.brand}>
            <img alt="CameraKit" src={LogoType} />
          </div>
          <div className={styles.menu}>
            <button
              className={`${styles.toggle} ${active ? styles.active : ''}`}
              onClick={this.toggleActive}
              aria-expanded={active}
              title="Toggle menu"
              aria-controls="menu"
              type="button">
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
