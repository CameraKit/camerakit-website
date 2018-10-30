import React from 'react';
import Container from '../container';
import withPure from '../hoc/pure';

export default withPure(() => (
  <Container wide>
    <Container>
      <div>
        <style jsx>
          {`
            .learn {
              height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .welcome__message {
              height: 100px;
              text-align: center;
            }
        `}
        </style>
      </div>
      <section>
        <div>
          <h1>
            {'Getting Started with CameraKit'}
          </h1>
          <h3>
            {'Getting started with CameraKit is super simple, see below!'}
          </h3>
        </div>
      </section>
    </Container>
  </Container>
));


