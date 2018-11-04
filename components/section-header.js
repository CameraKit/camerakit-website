import withPure from './hoc/pure';

export default withPure(({ anchor, id, title, description }) => (
  <div>
    <style jsx>
      {`
        h2 {
          text-transform: uppercase;
          color: #77829b;
        }
        div {
          position: relative;
          text-align: left;
          margin-bottom: 3rem;
        }
        .anchor {
          position: absolute;
          top: -9rem;
        }
      `}
    </style>
    {anchor && <span id={anchor} className="anchor" />}
    <h2 id={id} className="f4 fw6">
      {title}
    </h2>
    {description && <h3 className="f-reset subtitle fw4">{description}</h3>}
  </div>
));