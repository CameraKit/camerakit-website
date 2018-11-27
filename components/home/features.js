import Container from '../container';
import SectionHeader from '../section-header';
import Button from '../button';

export default () => (
  <Container wide role="region" aria-labelledby="features">
    <Container center padding>
      <style jsx>
        {`
          .features {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }
          .features__highlight {
            flex-basis: 25%;
          }
          .features__grid {
            flex-basis: 70%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }
          .features__item {
            display: flex;
            flex-direction: row;
            width: 47%;
          }
          .item__icon {
            flex-basis: 30%;
          }
          .item__text {
            flex-basis: 70%;
            margin: 0 auto 1rem;
            text-align: left;
            align-content: left;
          }
          .text {
            margin: 0;
          }
          .callout-button {
            margin-top: 3rem;
          }

          @media (max-width: 64rem) {
            .features__grid {
              flex-basis: 95%;
              margin-top: 5rem;
            }
          }
        `}
      </style>
      <SectionHeader id="features" title="Features" />
      <div className="features">
        <div className="features__highlight">
          <h1 className="fw1 f-highlight f-left">
            {'Predictable, extensible, and performant camera software'}
          </h1>
        </div>
        <div className="features__grid">
          <div className="features__item">
            <div className="item__icon">
              <img src="../../static/ic_simple.svg" alt="Easy Implemnentation" />
            </div>
            <div className="item__text">
              <h3 className="title">
                Easy Implementation
              </h3>
              <p className="description">
                CameraKit fits into your existing stack, sitting between your app and the operating system, to improve camera capture reliability almost immediately.
              </p>
            </div>
          </div>
          <div className="features__item">
            <div className="item__icon">
              <img src="../../static/ic_tested.svg" alt="Time Savings" />
            </div>
            <div className="item__text">
              <h3 className="title">
                Time Savings
              </h3>
              <p className="description">
              CameraKit doesn't require you to rewrite code, just add our software in minutes saving significant development hours and producing great results.
              </p>
            </div>
          </div>
          <div className="features__item">
            <div className="item__icon">
              <img src="../../static/ic_dual_cam.svg" alt="Advanced Functions" />
            </div>
            <div className="item__text">
              <h3 className="title">
                Advanced Functions
              </h3>
              <p className="description">
                CameraKit supports all camera features, including seamless still photo and video capture, auto permission handling, continuous and tap focus, and more.
              </p>
            </div>
          </div>
          <div className="features__item">
            <div className="item__icon">
              <img src="../../static/ic_vr_addons.svg" alt="Open Source" />
            </div>
            <div className="item__text">
              <h3 className="title">
                Open Source
              </h3>
              <p className="description">
                CameraKit is open source because we believe in the principles of open exchange, collaboration, and community, especially for camera software development.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="get-started">
        <div className="callout-button">
          <h3>CameraKit currently supports the Android operating system.</h3>
          <br/>
          <Button href="/getstarted" invert>
            Get Started
          </Button>
        </div>
      </div>
    </Container>
  </Container>
);
