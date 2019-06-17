import React from 'react';
import Container from './container';
import Subscribe from './subscribe';
import withPure from './hoc/pure';


export default withPure(() => (
  <Container wide>
    <Container>
      <footer>
        <style jsx>
          {`
            footer {
              position: relative;
              background-size: cover;
              background-position: bottom center;
              padding: 3rem 0;
            }

            .footer::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7));
            }

            .logo {
              display: block;
              margin: 0 auto 2.5rem;
              height: 100px;
              width: auto;
            }

            ul {
              list-style: none;
              padding: 0;
              text-align: center;
            }

            .notices {
              margin-top: 24vh;
            }

            .links {
              margin: 0;
              padding: 0;
              list-style: none;
            }

            .link {
              display: inline;
              color: $dark-grey;
              font-weight: 400;
            }

            .link:hover, .link:active, .link:focus {
              opacity: 0.4;
            }

            .copyright {
              margin-top: 1.5rem;
            }

            @media (min-width: 34em) {
              .logo {
                margin-bottom: 4rem;
              }

              .listItem {
                display: inline;
              }

              .listItem:not(:first-child) {
                margin-left: 1.5rem;
              }

              .copyright {
                margin-top: 2.5rem;
              }
            }

            @media (min-width: 48em) {

              .footer {
                padding: 5rem 0;
              }

              .notices {
                margin-top: 24vh;
              }

              .nav {
                display: flex;
                justify-content: space-between;
              }

              .copyright {
                margin-top: 0;
              }
            }
          `}
        </style>
        <div>
          <Subscribe />
          <ul className="notices">
            <li>
              {'© 2019 • CameraKit. All Rights Reserved by WonderKiln, Inc.'}
              <br></br>
              <a href="https://www.wonderkiln.com/">Need help with your next project? Reach out via WonderKiln.com</a>
            </li>
          </ul>
        </div>
      </footer>
    </Container>
  </Container>
));
