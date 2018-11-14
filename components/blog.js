import React from 'react';
import styles from '../styles/blog.scss';

class BlogItem extends React.Component {
  state = {
    expanded: false,
  };

  render() {
    const { item } = this.props;
    const { expanded } = this.state;

    const contentClass = expanded
      ? styles.blog__item__expanded__content
      : styles.blog__item__content;

    return (
      <div className={styles.blog__item}>
        <div className={styles.blog__item__wrapper}>
          <h2 className={styles.blog__item__title}>{item.title}</h2>
          <p>{new Date(item.created).toDateString()}</p>
          <div className={contentClass} dangerouslySetInnerHTML={{ __html: item.content }} />
          {expanded
            ? (
              <a
                href="javascript:void(0);"
                className={styles.blog__item__read}
                onClick={() => this.setState({ expanded: false })}
              >
                Show less
              </a>
            )
            : (
              <a
                href="javascript:void(0);"
                className={styles.blog__item__read}
                onClick={() => this.setState({ expanded: true })}
              >
                Show more
              </a>
            )
        }
        </div>
      </div>
    );
  }
}

const Blog = ({ feed }) => (
  <div className={styles.blog}>
    {feed && feed.length > 0 && feed.map(item => (
      <BlogItem key={item.link} item={item} />
    ))}
  </div>
);

export default Blog;
