import React from 'react';
import PropTypes from 'prop-types';

import styles from './feature.scss';

const Feature = props => (
  <li className={styles.feature}>
    <div className={styles.iconWrapper}>
      {props.icon}
    </div>
    <div className={styles.textWrapper}>
    <h3 className={styles.text}>{props.text}</h3>
    <p className={styles.description}>{props.description}</p>
    </div>
  </li>
);

Feature.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
};

export default Feature;
