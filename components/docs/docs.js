import React from 'react';
import showdown from 'showdown';
import highlight from 'showdown-highlight';

import styles from '../../styles/docs.scss';

const classMap = {
  table: `${styles.documentation__docs_table}`,
  h3: `${styles.documentation__h3}`,
};

const bindings = Object.keys(classMap)
  .map(key => ({
    type: 'output',
    regex: new RegExp(`<${key}(.*)>`, 'g'),
    replace: `<${key} class="${classMap[key]}" $1>`,
  }));

class Docs extends React.Component {
  state = {};

  constructor(props) {
    super(props);

    if (props.docs) {
      const converter = new showdown.Converter({
        extensions: [highlight, ...bindings],
        tables: true,
        setFlavor: 'github',
      });
      const html = converter.makeHtml(props.docs);

      const regex = /<(h[2-4]) [^>]+>(.+)<\/h[2-4]>/gi;
      const tableOfContents = [];

      const getStyle = (type) => {
        switch (type) {
          case 'h3': return styles.documentation__toc__h3;
          case 'h4': return styles.documentation__toc__h4;
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
      '1.0.0-beta3.9': 'v1.0.0-beta3.9',
      '0.13.2': 'v0.13.2',
    };

    return (
      <section className={styles.documentation}>
        <div className={styles.documentation__toc}>
          <div className={styles.documentation__toc__select}>
            <span>{options[version]}</span>
            <div>
              {Object.keys(options).map(key => (
                <span onClick={() => {
                  window.location = `?v=${key}`;
                }}>
                  {options[key]}
                </span>
              ))}
            </div>
          </div>
          <ul className={styles.documentation__toc__ul}>
            {tableOfContents && tableOfContents.map((item, index) => (
              <li key={index} className={item.style}>
                <a href={`#${item.id}`} dangerouslySetInnerHTML={{ __html: item.text }} />
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.documentation__content} dangerouslySetInnerHTML={{ __html: html }} />
      </section>
    );
  }
}

export default Docs;
