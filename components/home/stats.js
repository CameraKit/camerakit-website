import Container from '../container';
import SectionHeader from '../section-header';

export default () => (<Container wide role="region" aria-labelledby="stats">

  <Container center padding>
    <style jsx>{`
      hr {
        padding: 0;
        width: 100%;
        height: 1px;
        border: none;
        display: block;
        max-width: 40rem;
        margin: 0 0 8rem 0;
        background: rgb(220,220,220);
      }
      .stats__item {
        display: flex;
        align-items: center;
        flex-direction: column;
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
    `}</style>
    <div className="stats">
      <div className="stats__item">
        <hr />
        <div className="item__icon">
          <img src="../../static/ic_stats.svg" alt="Easy Implemnentation" />
        </div>
        <div className="item__text">
          <h2 className="title">
            Sed voluptatem eos est adipisci culpa ratione ducimus.
          </h2>
          <p className="description">
            Et quae et est tenetur nobis ea non. Omnis voluptatem et non et quidem neque labore. Id mollitia expedita recusandae sequi qui. Omnis voluptates et.
          </p>
        </div>
      </div>
    </div>
  </Container>
</Container>
);
