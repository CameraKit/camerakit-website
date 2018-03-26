import React from 'react';
import moment from 'moment';

import styles from './news-item.scss';

function formatDate(date){
  console.log(Number(date));
  return moment(Number(date)).format('MMMM D YYYY');
}

const NewsItem = props => (
  <li className={styles.item}>
    <span className={styles.date}>{formatDate(props.date)}</span>
    <h3 className={styles.title}>{props.title}</h3>
    <a className={styles.link} href={props.link} target="_blank">Read</a>
  </li>
);

export default NewsItem;
