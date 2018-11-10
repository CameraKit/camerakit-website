import Logo from '../logo';
import Container from '../container';
import Button from '../button';
import Particles from 'react-particles-js';
import { MediaQueryConsumer } from '../media-query';

export default ({}) => {
  return (
    <MediaQueryConsumer>
      {(media) =>
        <Container
          role="main"
          wide
          center
          overflow
          gradientBackground
          minHeight="100vh"
          mobileStyle={'min-height: 100vh;'}
          style={{
            display: 'flex',
            position: 'relative',
            alignItems: 'center',
            marginBottom: '180px'
          }}
        >
          <Container>
            <div className="intro-container">
              <style jsx>
                {`
                .intro-container {
                  margin: 2rem 0 0 0;
                  overflow: visible;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: flex-start;
                }
                .intro {
                  margin: 100px;
                }
                .intro__left {
                  text-align: center;
                  display: flex;
                  align-items: center;
                  flex-direction: column;
                }
                .intro__right {
                  left: 0;
                  right: 0;
                  z-index: 100;
                  height: 300px;
                  bottom: -160px;
                  position: absolute;
                }

                .intro__right img {
                  width: 100%;
                  height: 100%;
                }

                h2 {
                  margin-top: 1rem;
                  margin-bottom: 2rem;
                }
                .main-button {
                  border-radius: 4px;
                  display: inline-block;
                  background: #FFFFFF;
                  margin-left: 6px;
                  margin-top: 15px;
                }
                .links {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                }
                .links > * {
                  padding: 0 0.5rem;
                }
                .campaign {
                  width: 100%;
                  letter-spacing: -0.02rem;
                  overflow: hidden;
                  pointer-events: none;
                  cursor: default;
                  z-index: -1;
                }
                .f-xs-0 {
                  font-size: 2.887rem; /* 2.566rem; /* 2.281rem; */
                }
                .f-xs-1 {
                  font-size: 2.027rem; //.566rem;
                }
                .logo-main {
                  display: flex;
                  justify-content: flex-start;
                  color: #0076ff;
                  align-items: flex-start;
                  margin-left: -10px;
                  margin-bottom: 20px;
                }
                .logo-main .version {
                  margin-left: -0.4rem;
                  margin-top: 0.4rem;
                  cursor: pointer;
                }
                a.version {
                  color: #0076ff;
                }
                .version .tip {
                  color: #111;
                  white-space: nowrap;
                }
                .title-1 {
                  font-size: 1.802032470703125em;
                }
                .title-2 {
                  font-size: 2.887rem;
                  margin-top: -4.2rem;
                  margin-bottom: 0;
                }
                .campaign {
                  margin: 1rem 0 1.6rem;
                }
                // CSS only media query for mobile
                @media screen and (max-width: 640px) {
                  .logo-main {
                    display: none;
                  }
                  .title-1 {
                    font-size: 1.423828125em;
                  }
                  .title-2 {
                    font-size: 1.802032470703125em;
                    margin-top: -2.4rem;
                  }
                  .campaign {
                    margin: 0 0 2rem;
                  }
                }
              `}
              </style>
              <div className="intro">
                <div className="intro__left">
                  <h1 className="fw4">Camera Dev. Made Easy.</h1>
                  <p>CameraKit is an open-source library to support the Android Camera 1 and 2 APIs. Massively increase stability and reliability of photo and video capture on all Android devices.</p>
                  <div className="actions">
                    <div className="main-button">
                      <Button href="/getstarted" callout>
                        Get Started
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="intro__right">
                  <img src="../../static/il_phone_tilted.svg" alt="CK Phone" />
                </div>
              </div>
            </div>
          </Container>
        </Container>
      }
    </MediaQueryConsumer>
  );
};
