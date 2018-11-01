import React from 'react';
import showdown from 'showdown';

import '../../styles/styles.global.scss';
import styles from '../../styles/docs.scss';

class Docs extends React.Component {
  constructor(props) {
    super(props);
    
    const converter = new showdown.Converter({ metadata: true });
    const html = converter.makeHtml(props.docs);

    const regex = /<(h[2-4]) [^>]+>(.+)<\/h[2-4]>/gi;
    const tableOfContents = [];

    const getStyle = type => {
      switch (type) {
        case 'h3': return styles.documentation__toc__h3;
        case 'h4': return styles.documentation__toc__h3;
        default: return styles.documentation__toc__h2;
      }
    }
    
    let match = regex.exec(html);
    while(match) {
      const idRegex = /<.*id="(.+)".*>/gi;
      const id = idRegex.exec(match[0])[1];
      tableOfContents.push({
        style: getStyle(match[1]), text: match[2], id
      });
      match = regex.exec(html);
    }

    this.state = { html, tableOfContents };
  }

  render() {
    const { html, tableOfContents } = this.state;
    const { version } = this.props;

    return (
      <section className={styles.documentation}>
        <div className={styles.documentation__toc}>
          <select
            defaultValue={`?v=${version}`}
            className={styles.documentation__toc__select}
            onChange={e => {
              const query = e.target.value;
              window.location = query;
            }}
          >
            <option value="?v=0.1.0">Version 0.1.0</option>
            <option value="?v=0.2.0">Version 0.2.0</option>
          </select>
          <ul className={styles.documentation__toc__ul}>
            {tableOfContents.map((item, index) =>
              <li key={index} className={item.style}>
                <a href={`#${item.id}`} dangerouslySetInnerHTML={{ __html: item.text }} />
              </li>
            )}
          </ul>
        </div>
        <div style={{ flex: 1 }} dangerouslySetInnerHTML={{ __html: html }} />
      </section>
    );
  }
}

export default Docs;
