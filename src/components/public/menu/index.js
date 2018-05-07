import React from 'react';
import PropTypes from 'prop-types';
import styles from './menu.scss';

const Menu = props => (
  <div className={`${styles.menu} ${props.active ? styles.active : ''}`}>
    <div className={styles.background}></div>
  </div>
);

Menu.propTypes = {
  active: PropTypes.bool,
};

export default Menu;
