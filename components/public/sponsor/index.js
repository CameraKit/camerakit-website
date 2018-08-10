import React from 'react';
import PropTypes from 'prop-types';

import styles from './sponsor.scss';

const Sponsor = ({ link, logo, name }) => (
  <li className={styles.sponsor}>
    <a className={styles.link} href={link}>
      <img className={styles.logo} src={logo} alt={name} />
    </a>
  </li>
);

Sponsor.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Sponsor;
