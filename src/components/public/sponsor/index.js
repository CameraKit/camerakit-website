import React from 'react';
import PropTypes from 'prop-types';

import styles from './sponsor.scss';

const Sponsor = props => (
  <li className={styles.sponsor}>
    <img className={styles.logo} src={props.logo} alt={props.name} />
    <blockquote className={styles.quote}>
      {props.quote}
      <footer className={styles.source}>{props.source}</footer>
    </blockquote>
  </li>
);

Sponsor.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default Sponsor;
