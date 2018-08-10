import React from 'react';
import Feed from 'rss-to-json';

import NewsItem from './news-item';

import styles from './news.scss';
import global from '../../../styles/styles.global.scss';

class News extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    Feed.load('https://cors-anywhere.herokuapp.com/https://medium.com/feed/camerakit', (err, rss) => {
      if (err) return;
      this.setState({ items: rss.items });
    });
  }

  render() {
    const { items } = this.state;
    return (
      <section className={styles.news}>
        <div className={global.container}>
          <h2 className={global['heading--small']}>
            {'Recent News'}
          </h2>
          {items.length > 0
            ? (
              <ul className={styles.newsItems}>
                {items.slice(0, 4).map(item => (
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
