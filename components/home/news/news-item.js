import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import styles from './news-item.scss';

function formatDate(date) {
  return moment(Number(date)).format('MMMM Do, YYYY');
}

const NewsItem = ({ date, link, title }) => (
  <li className={styles.item}>
    <span className={styles.date}>
      {formatDate(date)}
    </span>
    <h3 className={styles.title}>
      {title}
    </h3>
    <a className={styles.link} href={link} target="_blank" rel="noopener noreferrer">
      {'Read'}
    </a>
  </li>
);

NewsItem.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default NewsItem;
