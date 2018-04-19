import React from 'react';
import PropTypes from 'prop-types';

import styles from './sponsor.scss';

const Sponsor = props => (
  <li className={styles.sponsor}>
    <a className={styles.link} href={props.link}>
      <img className={styles.logo} src={props.logo} alt={props.name} />
    </a>
  </li>
);

Sponsor.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Sponsor;
