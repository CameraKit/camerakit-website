import React from 'react';

import globalStylesheet from '../../../styles/styles.global.scss';
import styles from './news.scss';

import NewsItem from './news-item';

class News extends React.Component {
  render() {
    const { feed } = this.props;
    return (
      <section className={styles.news}>
        <div className={globalStylesheet.container}>
          <h2 className={globalStylesheet['heading--small']}>
            {'Recent News'}
          </h2>
          {feed.length > 0
            ? (
              <ul className={styles.newsItems}>
                {feed.slice(0, 4).map(item => (
                  <NewsItem
                    key={item.title}
                    title={item.title}
                    date={item.created.toString()}
                    link={item.link}
                  />
                ))}
              </ul>
            ) : (
              <p>
                {'Hmm... nothing to show just yet! News coming soon!'}
              </p>
            )
          }
        </div>
      </section>
    );
  }
}

export default News;
