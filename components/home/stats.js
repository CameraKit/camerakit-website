import Container from '../container';
import SectionHeader from '../section-header';

export default () => (<Container wide role="region" aria-labelledby="stats">

  <Container center padding>
    <style jsx>
      {`
        .stats {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        .stats__highlight {
          flex-basis: 25%;
        }
        .stats__grid {
          flex-basis: 70%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        .stats__item {
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

        @media (min-width: 25em) {
          .stats {
            lost-column: 1/2 2 4rem flex;
          }
        }

        @media (min-width: 48em) {
          .stats {
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
    <SectionHeader id="stats" title="Stats" />
    <div className="stats">
      <div className="stats__highlight">
        <h1 className="fw1 f-highlight f-left">
          {'TODO: Crash free experience'}
        </h1>
      </div>
      <div className="stats__grid">
        <div className="stats__item">
          <div className="item__icon">
            <img src="../../static/ic_simple.svg" alt="Easy Implemnentation" />
          </div>
          <div className="item__text">
            <h3 className="title">
              Lorem
            </h3>
            <p className="description">
              Lorem ipsum
            </p>
          </div>
        </div>
        <div className="stats__item">
          <div className="item__icon">
            <img src="../../static/ic_simple.svg" alt="Easy Implemnentation" />
          </div>
          <div className="item__text">
            <h3 className="title">
              Lorem
            </h3>
            <p className="description">
              Lorem ipsum
            </p>
          </div>
        </div>
        <div className="stats__item">
          <div className="item__icon">
            <img src="../../static/ic_simple.svg" alt="Easy Implemnentation" />
          </div>
          <div className="item__text">
            <h3 className="title">
              Lorem
            </h3>
            <p className="description">
              Lorem ipsum
            </p>
          </div>
        </div>
        <div className="stats__item">
          <div className="item__icon">
            <img src="../../static/ic_simple.svg" alt="Easy Implemnentation" />
          </div>
          <div className="item__text">
            <h3 className="title">
              Lorem
            </h3>
            <p className="description">
              Lorem ipsum
            </p>
          </div>
        </div>
      </div>
    </div>
  </Container>
</Container>
);
