import React from 'react';
import PropTypes from 'prop-types';

import styles from './feature.scss';

const Feature = ({ icon, text, description }) => (
  <li className={styles.feature}>
    <div className={styles.iconWrapper}>
      {icon}
    </div>
    <div className={styles.textWrapper}>
      <h3 className={styles.text}>
        {text}
      </h3>
      <p className={styles.description}>
        {description}
      </p>
    </div>
  </li>
);

Feature.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Feature;
