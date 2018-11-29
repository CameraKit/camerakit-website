import Container from '../container';

export default () => (
  <Container wide role="region" aria-labelledby="stats">
    <Container center padding>
      <style jsx>
        {`
          hr {
            padding: 0;
            width: 100%;
            height: 1px;
            border: none;
            display: block;
            margin: 0 0 8rem 0;
            background: rgba(220,220,220,0.5);
          }
          .stats {
            display: flex;
            justify-content: space-between;
          }
          .stats__item {
            display: flex;
            align-items: center;
            flex-direction: column;
            flex-basis: 30%;
          }
          .item__icon {
            margin-bottom: 4rem;
          }
          .item__text {
            max-width: 40rem;
          }
          .item__text p {
            margin-top: 0;
          }
        `}
      </style>
      <hr />
      <div className="stats">
        <div className="stats__item">
          <div className="item__icon">
            <img src="../../static/ic_stats.svg" alt="Easy Implemnentation" />
          </div>
          <div className="item__text">
            <h2 className="title">
              Unlocking millions of users instantly.
            </h2>
            <p className="description">
              We account for all the edge cases, ensuring that your camera always functions dependably anywhere in the world, including customers with low end devices and older operating systems.
            </p>
          </div>
        </div>
        <div className="stats__item">
          <div className="item__icon">
            <img src="../../static/ic_stats.svg" alt="Easy Implemnentation" />
          </div>
          <div className="item__text">
            <h2 className="title">
              Consistently updated and improved software.
            </h2>
            <p className="description">
              Staying up to date with the latest phones and camera technology can be a hassle, accounting for the past is a nightmare; CameraKit is always improving saving you significant technical headaches.
            </p>
          </div>
        </div>
        <div className="stats__item">
          <div className="item__icon">
            <img src="../../static/ic_stats.svg" alt="Easy Implemnentation" />
          </div>
          <div className="item__text">
            <h2 className="title">
              Camera development is hard, we make it easy.
            </h2>
            <p className="description">
              When implemented in an enterprise environment, CameraKit reduces crashes and abnormalities by over 98% to provide predictable results when using camera in any software solution.
            </p>
          </div>
        </div>
      </div>
    </Container>
  </Container>
);
