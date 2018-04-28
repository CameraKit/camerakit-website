import React from 'react';
import Feed from 'rss-to-json';

import NewsItem from './news-item';

import styles from './news.scss';


class News extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  componentDidMount () {
    Feed.load('https://cors-anywhere.herokuapp.com/https://medium.com/feed/@camerakit', (err, rss) => {
      if (err) return console.log(err);
      this.setState({ items: rss.items });
    });
  }

  render () {
    return (
      <section className={styles.news}>
        <div className='container'>
          <h2 className='heading--small'>
            Recent News
          </h2>
          {this.state.items.length > 0 ?
            <ul className={styles.newsItems}>
              {this.state.items.slice(0, 4).map(item => (
                <NewsItem
                  key={item.title}
                  title={item.title}
                  date={item.created}
                  link={item.link}
                />
              ))}
            </ul>
            :
            <p>Hmm... nothing to show just yet! News coming soon!</p>
          }
        </div>
      </section>
    );
  }
};

export default News;
