import React from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';

import CameraKitLogo from './logo';
import GithubLogo from './icons/github';
import SpectrumLogo from './icons/spectrum';

import MenuIcon from './ic_menu';

class MobileNavbar extends React.Component {
  state = {
    opened: false,
  };

  render() {
    let navClassNames = 'navbar';

    if (this.state.opened) {
      navClassNames += ' open';
    }

    return (
      <nav className={navClassNames}>
        <style jsx>
          {`
            .navbar {
              width: 100%;
            }
            .navbar.open .content {
              background: white;
            }
            .navbar.open .menu {
              display: block;
            }
            .content {
              z-index: 100;
              display: flex;
              overflow-x: auto;
              position: relative;
              align-items: center;
              padding: 1.6rem 2rem;
              justify-content: space-between;
            }
            .separator {
              height: 1px;
              margin: .4rem 2rem;
            }
            .link {
              color: #3E445B;
              font-weight: 600;
              font-size: 1.1rem;
            }
            .link:hover {
              color: #3E445B;
            }
            .button {
              display: flex;
              height: 2.6rem;
              flex-shrink: 0;
              padding: 0 1rem;
              align-items: center;
              border-radius: 1.3rem;
              border: .1rem solid #CFD8DC;
              transition: background .2s linear;
            }
            .button:hover {
              background: #ECEFF1;
            }
            .button span {
              margin-left: .4rem;
            }
            .menu {
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              z-index: 50;
              display: none;
              position: fixed;
              overflow-y: auto;
              padding-top: 6rem;
              background: white;
            }
            .menu ul {
              margin: 0;
              padding: 0;
              list-style: none;
            }
            .menu ul li a {
              display: block;
              color:  #3E445B;
              font-weight: 600;
              font-size: 1.6rem;
              padding: .4rem 2rem;
            }
            @media (max-width: 48em) {
              .button-text {
                display: none;
              }
              .button {
                padding: 0 0.8rem;
                width: 40px;
              }
            }
          `}
        </style>
        <div className="content">
          <Link href="/">
            <a href="/" className="link home">
              <CameraKitLogo withoutText />
            </a>
          </Link>
          <a
            className="link button"
            href="javascript:void(0);"
            onClick={() => this.setState(({ opened }) => ({
              opened: !opened,
            }))}
          >
            <MenuIcon />
            <span className="button-text">Menu</span>
          </a>
        </div>
        <div className="menu">
          <ul>
            <Link href="/docs">
              <li><a href="/docs">Docs</a></li>
            </Link>
            <li><a href="/blog">Blog</a></li>
            <Link href="/contact">
              <li><a href="/contact">Contact</a></li>
            </Link>
            <li className="separator" />
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                alt="CameraKit's Spectrum.chat"
                href="https://spectrum.chat/camerakit"
              >
                Spectrum
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                alt="CameraKit's Github"
                href="https://github.com/CameraKit/camerakit-android"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const DesktopNavbar = ({ full }) => (
  <nav className="navbar">
    <style jsx>
      {`
        .navbar {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .content {
          width: ${full ? '100%' : '60rem'};
          z-index: 100;
          display: flex;
          overflow-x: auto;
          position: relative;
          align-items: center;
          padding: 1.6rem 2rem;
          justify-content: space-between;
        }
        .link {
          color: #3E445B;
          font-weight: 600;
          font-size: 1.1rem;
        }
        .link:hover {
          color: #3E445B;
        }
        .link:not(:last-child), .separator {
          margin-right: 2rem;
        }
        .button:not(:last-child) {
          margin-right: .5rem;
        }
        .flex {
          flex: 1;
        }
        .separator {
          width: 1px;
          height: 1.6rem;
          background: #CFD8DC;
        }
        .button {
          display: flex;
          height: 2.6rem;
          flex-shrink: 0;
          padding: 0 1rem;
          align-items: center;
          border-radius: 1.3rem;
          border: .1rem solid #CFD8DC;
          transition: background .2s linear;
        }
        .button:hover {
          background: #ECEFF1;
        }
        .button.circle {
          padding: 0;
          width: 2.6rem;
          justify-content: center;
        }
        .button span {
          margin-left: .4rem;
        }
      `}
    </style>
    <div className="content">
      <Link href="/">
        <a href="/" rel="noreferrer" className="link home">
          <CameraKitLogo />
        </a>
      </Link>
      <span className="flex" />
      <Link href="/docs">
        <a href="/docs" className="link">Docs</a>
      </Link>
      <a href="/blog" className="link">Blog</a>
      <Link href="/contact">
        <a href="/contact" className="link">Contact</a>
      </Link>
      <span className="separator" />
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="link button circle"
        alt="CameraKit's Spectrum.chat"
        href="https://spectrum.chat/camerakit"
      >
        <SpectrumLogo />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="link button circle"
        alt="CameraKit's Github"
        href="https://github.com/CameraKit/camerakit-android"
      >
        <GithubLogo />
      </a>
    </div>
  </nav>
);

export default withRouter(({ full }) => (
  <div className="fill">
    <style jsx>{`
      .fill {
        width: 100%;
      }
      @media(min-width: 641px) {
        .mobile {
          display: none
        }
      }
      @media(max-width: 640px) {
        .desktop {
          display: none
        }
      }
    `}</style>
    <div className="fill" className="mobile"><MobileNavbar /></div>
    <div className="fill" className="desktop"><DesktopNavbar full={full} /></div>
  </div>
));
