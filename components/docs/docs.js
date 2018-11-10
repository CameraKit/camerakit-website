import React from 'react';
import showdown from 'showdown';

import styles from '../../styles/docs.scss';

class Docs extends React.Component {
  state = {};

  constructor(props) {
    super(props);

    if (props.docs) {
      const converter = new showdown.Converter();
      const html = converter.makeHtml(props.docs);

      const regex = /<(h[2-4]) [^>]+>(.+)<\/h[2-4]>/gi;
      const tableOfContents = [];

      const getStyle = (type) => {
        switch (type) {
          case 'h3': return styles.documentation__toc__h3;
          case 'h4': return styles.documentation__toc__h3;
          default: return styles.documentation__toc__h2;
        }
      };

      let match = regex.exec(html);

      while (match) {
        const idRegex = /<.*id="(.+)".*>/gi;
        const id = idRegex.exec(match[0])[1];

        tableOfContents.push({
          style: getStyle(match[1]), text: match[2], id,
        });

        match = regex.exec(html);
      }

      this.state = { html, tableOfContents };
    }
  }

  render() {
    const { html, tableOfContents } = this.state;
    const { version } = this.props;

    const options = {
      '0.1.0': 'v0.1.0',
      '0.2.0': 'v0.2.0',
    };

    return (
      <section className={styles.documentation}>
        <div className={styles.documentation__toc}>
          <div className={styles.documentation__toc__select}>
            <span>{options[version]}</span>
            <div>
              {Object.keys(options).map(key =>
                <span onClick={() => {
                  window.location = `?v=${key}`;
                }}>
                  {options[key]}
                </span>
              )}
            </div>
          </div>
          <ul className={styles.documentation__toc__ul}>
            {tableOfContents && tableOfContents.map((item, index) =>
              <li key={index} className={item.style}>
                <a href={`#${item.id}`} dangerouslySetInnerHTML={{ __html: item.text }} />
              </li>
            )}
          </ul>
        </div>
        <div className={styles.documentation__content} dangerouslySetInnerHTML={{ __html: html }} />
      </section>
    );
  }
}

export default Docs;
