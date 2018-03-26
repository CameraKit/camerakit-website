import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import styles from './news-item.scss';

function formatDate(date){
  return moment(Number(date)).format('MMMM D YYYY');
}

const NewsItem = props => (
  <li className={styles.item}>
    <span className={styles.date}>{formatDate(props.date)}</span>
    <h3 className={styles.title}>{props.title}</h3>
    <a className={styles.link} href={props.link} target="_blank">Read</a>
  </li>
);

NewsItem.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default NewsItem;
