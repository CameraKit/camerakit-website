import Link from 'next/link';
import { withRouter } from 'next/router';

import Container from './container';
import { MediaQueryConsumer } from './media-query';

import CameraKitLogo from './logo';
import GithubLogo from './icons/github';
import SpectrumLogo from './icons/spectrum';


export default withRouter(({ isMobile, router }) => {
  const { route } = router;

  return (
    <MediaQueryConsumer>
      {(media) => {
        if (media.isMobile) {
          return (
            <Container center>
              <h1 className="visually-hidden" aria-hidden="true">
                CameraKit
              </h1>
              <nav className="main">
                <style jsx>
                  {`
                    .logo {
                      flex-basis: 30%;
                      display: flex;
                      justify-content: flex-start;
                    }

                    .menu {
                      display: flex;
                      flex-basis: 30%;
                      justify-content: flex-end;
                      list-style: none;
                    }

                    .menu > .links {
                      display: flex;
                      flex-direction: row;
                      flex-wrap: no-wrap;
                      justify-content: flex-end;

                    }

                    .menu > .links > .item {
                      margin-left: 20px;
                      font-weight: 300;
                      list-style: none;
                      font-size: 1.1rem;

                    }

                    .menu > .links > .item > a:hover {
                      color:#2d2d2d;
                      text-shadow: 0px 2px 6px rgba(0,0,0,0.25);
                      transition: all 0.5s;
                      cursor: pointer;
                    }

                    .link {
                      font-weight: 500;
                      color: #3e445b;
                      display: flex;
                      align-content: center;
                    }

                    @media (min-width: 34em) {

                      .nav {
                        padding-top: 3rem;
                        padding-bottom: 3rem;
                      }
                    }
                  `}
                </style>
                <div>
                  <div>
                    <Link href="/">
                      <img alt="CameraKit Logo" src={CameraKitLogo} />
                    </Link>
                  </div>
                </div>
                <div>
                  <ul>
                    <li>
                      <Link href="/docs">
                        <a href="/docs">
                          {'Docs'}
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/learn">
                        <a href="/learn">
                          {'Learn'}
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <a href="/contact">
                          {'Contact'}
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/getstarted">
                        <a href="/getstarted">
                          {'Get Started'}
                        </a>
                      </Link>
                    </li>
                    <li>
                      { '|' }
                    </li>
                    <li>
                      <Link href="https://github.com/CameraKit/camerakit-android">
                        <a href="https://github.com/CameraKit/camerakit-android" target="_blank" rel="noopener noreferrer">
                          <img src={GithubLogo} alt="Github Logo" />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav> 
            </Container>
          );
        }

        return (
          <Container center>
            <h1 className="visually-hidden" aria-hidden="true">
              CameraKit
            </h1>
            <nav className="main">
              <style jsx>
                {`
                  nav {
                    position: relative;
                    top: 0;
                    width: 100%;
                    z-index: 11;
                    transition: all 1s;
                    display: flex;
                    justify-content: space-between;
                    padding: 2rem 0;
                  }
                  
                  .navbar__brand {
                    position: absolute;
                    width: 100%;
                    font-size: 0;
                    overflow: hidden;
                    transition: all 0.55s ease;
                    pointer-events: none;
                    transform: translate3d(0, 30%, 0);
                    opacity: 0;
                  }
                  
                  .navbar__links {
                    display: flex;
                    flex-direction: row;
                  }

                  .navbar__links > a {
                    display: inline-block;
                    margin-right: 35px;
                    font-weight: 400;
                    color: #2d2d2d;
                  }

                  .navbar__links > a:hover {
                    color:#2d2d2d;
                    text-shadow: 0px 2px 6px rgba(0,0,0,0.25);
                    transition: all 0.5s;
                    cursor: pointer;
                  }

                  .navbar__links > .icons > a {
                    display: inline-block;
                    margin-right: 35px;
                    font-weight: 400;
                    color: #2d2d2d;
                  }

                  .navbar__links > .icons > a:last-child {
                    margin-right: 0;
                  }

                  @media (min-width: 34em) {
                    .nav {
                      padding-top: 3rem;
                      padding-bottom: 3rem;
                    }
                  }
                `}
              </style>
              <div className="navbar__brand">
                <Link href="/">
                  <a
                    aria-label="Homepage of CameraKit"
                    rel="noreferrer"
                    target=""
                  >
                    <CameraKitLogo />
                  </a>
                </Link>
              </div>
              <div className="navbar__links">
                <Link href="/docs">
                  <a href="/docs">
                    {'Docs'}
                  </a>
                </Link>
                <Link href="/learn">
                  <a href="/learn">
                    {'Learn'}
                  </a>
                </Link>
                <Link href="/blog">
                  <a href="/blog">
                    {'Blog'}
                  </a>
                </Link>
              </div>
              <div className="navbar__links">
                <div className="icons">
                  <Link href="https://spectrum.chat/camerakit">
                    <a
                      href="https://spectrum.chat/camerakit"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <SpectrumLogo />
                    </a>
                  </Link>
                  <Link href="https://github.com/CameraKit/camerakit-android">
                    <a
                      href="https://github.com/CameraKit/camerakit-android"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="no-margin"
                    >
                      <GithubLogo />
                    </a>
                  </Link>
                </div>
              </div>
            </nav>
          </Container>
        );
      }}
    </MediaQueryConsumer>
  );
});
