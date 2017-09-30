import React from 'react';
import PropTypes from 'prop-types';

import styles from './feature.scss';

const Feature = props => (
  <li className={styles.feature}>
    <div className={styles.iconWrapper}>
      {props.icon}
    </div>
    <p className={styles.text}>{props.text}</p>
  </li>
);

Feature.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
};

export default Feature;
