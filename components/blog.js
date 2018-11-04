import styles from '../styles/blog.scss';

const Blog = ({ feed }) => (
  <div className={styles.blog}>
    {feed && feed.length > 0 && feed.map(item => (
      <div key={item.link} className={styles.blog__item}>
        <div className={styles.blog__item__wrapper}>
          <h2 className={styles.blog__item__title}>{item.title}</h2>
          <p>{new Date(item.created).toDateString()}</p>
          <div className={styles.blog__item__content} dangerouslySetInnerHTML={{ __html: item.content }} />
          <a className={styles.blog__item__read} href={item.link} target="_tab">Read more</a>
        </div>
      </div>
    ))}
  </div>
);

export default Blog;
