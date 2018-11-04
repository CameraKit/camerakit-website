import Container from '../container';
import SectionHeader from '../section-header';
import Button from '../button';

export default () => (<Container wide role="region" aria-labelledby="features">

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

        @media (min-width: 25em) {
          .feature {
            lost-column: 1/2 2 4rem flex;
          }
        }

        @media (min-width: 48em) {
          .feature {
            display: flex;
            text-align: left;
          }
          .iconWrapper {
            flex: 0 0 1.75rem;
            margin: 0 1rem 0 0;
          }
        }
      `}
    </style>
    <SectionHeader id="features" title="Features" />
    <div className="features">
      <div className="features__highlight">
        <h1 className="fw1 f-highlight f-left">
          {'High-level, simple, and extremely performant'}
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
              CameraKit fits into your existing stack and can be run up almost immediately. Implement the library and start improving reliability immediately.
            </p>
          </div>
        </div>
        <div className="features__item">
          <div className="item__icon">
            <img src="../../static/ic_simple.svg" alt="Easy Implemnentation" />
          </div>
          <div className="item__text">
            <h3 className="title">
              Extensively Tested
            </h3>
            <p className="description">
              CameraKit has been tested across thousands of Android devices, major Android OS versions, and is ready for upcoming flagship Android device releases.
            </p>
          </div>
        </div>
        <div className="features__item">
          <div className="item__icon">
            <img src="../../static/ic_simple.svg" alt="Easy Implemnentation" />
          </div>
          <div className="item__text">
            <h3 className="title">
              All Camera Features
            </h3>
            <p className="description">
              CameraKit supports all camera features, including seamless photo and video capture, auto permission handling, continuous and tap focus, scaling, and more.
            </p>
          </div>
        </div>
        <div className="features__item">
          <div className="item__icon">
            <img src="../../static/ic_simple.svg" alt="Easy Implemnentation" />
          </div>
          <div className="item__text">
            <h3 className="title">
              Camera 1 and 2
            </h3>
            <p className="description">
              CameraKit supports and improves, hooking in the library in minutes, Camera 1 and 2 APIs while drastically improving stability and reliability for your app.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="get-started">
      <div className="callout-button">
        <Button href="#getting-started" invert>
          Get Started
        </Button>
      </div>
    </div>
  </Container>
</Container>
);
