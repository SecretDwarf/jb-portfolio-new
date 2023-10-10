import React from 'react';
import { Link } from 'react-router-dom';
import FallingPixels from './components/FallingPixels';
import { TypeAnimation } from 'react-type-animation';
import logo from './assets/JB.png';


export default function Home() {
  return (
    <main className='Home'>
        <div className="logo-container">
          <a href="/">
            <img src={logo} alt="Logo" className="logo-image" />
          </a>
        </div>
          <div className='belowLogo'></div>
      <div className='canvascontainer'>
        <FallingPixels />
      </div>
        <section className="main-info">
          <div className="main-text">
            <h1>JACOB BRIGGS</h1>
            <span style={{ fontSize: '2em' }}>
              <TypeAnimation
                sequence={[
                  'Web Development',
                  1000,
                  'Game Development',
                  1000,
                  'Servant Leader',
                  1000,
                  'Collaborator',
                  1000,

                ]}
                repeat={Infinity}
              />
            </span>
          </div>
          <div className="buttons">
            <Link to="/resume" className="lvl3" id="nav-button">
              Resume
            </Link>
            <Link to="/portfolio" className="lvl3" id="nav-button">
              Portfolio
            </Link>
            <Link to="/contact" className="lvl3" id="nav-button">
              Contact
            </Link>
          </div>
        </section>
    </main>
  );
};

