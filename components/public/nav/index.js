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
    };

    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive() {
    this.setState({ active: !this.state.active });
  }

  render() {
    return (
      <nav className={styles.nav}>
        <div className={`${global.container} ${global['container--full']} ${styles.container}`}>
          <div className={styles.logo}>
            <img src={Logo} />
          </div>
          <div className={styles.brand}>
            <img src={LogoType} />
          </div>
          <div className={styles.menu}>
            <button
              className={`${styles.toggle} ${this.state.active ? styles.active : ''}`}
              onClick={this.toggleActive}
              aria-expanded={this.state.active}
              title="Toggle menu"
              aria-controls="menu">
              <img src={MenuIcon} />
            </button>
            <Menu active={this.state.active} toggle={this.toggleActive} />
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
