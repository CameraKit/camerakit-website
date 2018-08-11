import React from 'react';
import PropTypes from 'prop-types';

import styles from './client.scss';

const Client = ({ link, logo, name }) => (
  <li className={styles.client}>
    <a className={styles.link} href={link}>
      <img className={styles.logo} src={logo} alt={name} />
    </a>
  </li>
);

Client.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Client;
