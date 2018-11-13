import React from 'react';
import showdown from 'showdown';
import highlight from 'showdown-highlight';

const classMap = {
  table: 'documentation__docs_table',
  h3: 'documentation__h3',
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
          case 'h3': return 'documentation__toc__h3';
          case 'h4': return 'documentation__toc__h4';
          default: return 'documentation__toc__h2';
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
      <div className="documentation">
        <style jsx>{`
          .documentation {
            color: rgb(60,66,91);
            display: flex;
          }
          .documentation__content {
            flex: 1;
            margin-top: 30px;
            margin-left: 330px;
            padding-top: 100px;
          }
          .documentation__toc {
            top: 0;
            left: 0;
            width: 300px;
            height: 100vh;
            position: fixed;
            overflow-y: auto;
            margin-top: 96px;
            background-color: rgb(250,250,250);
            border-right: 1px solid rgb(240,240,240);
          }
          .documentation__toc__select {
            margin: 30px;
            cursor: pointer;
            padding: 10px 15px;
            position: relative;
            border-radius: 5px;
            background-color: white;
            box-shadow: 0 5px 20px rgba(0,0,0,0.15);
          }
          .documentation__toc__select:hover {
            border-radius: 5px 5px 0 0;
          }
          .documentation__toc__select:hover > div {
            display: block;
          }
          .documentation__toc__select > div {
            left: 0;
            right: 0;
            top: 100%;
            z-index: 100;
            display: none;
            overflow: hidden;
            position: absolute;
            background-color: white;
            border-radius: 0 0 5px 5px;
            box-shadow: 0 10px 20px rgba(0,0,0,0.15);
          }
          .documentation__toc__select > div > span {
            display: block;
            padding: 10px 15px;
            border-top: 1px solid rgba(0,0,0,0.05);
          }
          .documentation__toc__select > div > span:hover {
            background-color: rgba(0,0,0,0.05);
          }
          .documentation__toc__ul {
            padding: 0 0 10px 0;
            list-style: none;
            margin: 20px 0 0 0;
          }
          .documentation__toc__ul li:hover {
            border-right: 3px solid $primary;
            background-color: rgba(0,0,0,0.05);
          }
          .documentation__toc__ul li a {
            padding: 10px 0;
            display: block;
            color: rgb(60,66,91);
          }
          .documentation__toc__h2 {
            padding-left: 30px;
            font-weight: bold;
          }
          .documentation__toc__h3 {
            padding-left: 40px;
          }
          .documentation__toc__h4 {
            padding-left: 50px;
          }
          .documentation__h3 {
            padding-top: 20px;
          }
          
          // For some reason this doesn't work here
          // Must be declared globally to work with innerHTML
          .documentation__docs_table {
            padding-bottom: 10px;
          }
          .documentation__docs_table th {
            font-weight: bold;
            padding-top: 15px;
            padding-right: 10px;
            padding-bottom: 0px;
            padding-left: 10px;
          }
          .documentation__docs_table th:first-child {
            padding-left: 0px; 
          }
          .documentation__docs_table td {
            padding-top: 5px;
            padding-right: 10px;
            padding-bottom: 5px;
            padding-left: 10px; 
          }
          .documentation__docs_table tr:nth-child(even) {
            background-color: rgba(242,242,242,0.5)
          }     
        `}</style>
        <div className="documentation__toc">
          <div className="documentation__toc__select">
            <span>{options[version]}</span>
            <div>
              {Object.keys(options).map(key => (
                <span key={key} onClick={() => {
                  window.location = `?v=${key}`;
                }}>
                  {options[key]}
                </span>
              ))}
            </div>
          </div>
          <ul className="documentation__toc__ul">
            {tableOfContents && tableOfContents.map((item, index) => (
              <li key={index} className={item.style}>
                <a href={`#${item.id}`} dangerouslySetInnerHTML={{ __html: item.text }} />
              </li>
            ))}
          </ul>
        </div>
        <div className="documentation__content" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    );
  }
}

export default Docs;
