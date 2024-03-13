import React from 'react';
import ContactForm from './components/ContactForm';
// import Tetris from './components/tetris.js';
import logo from './assets/JB.png';

export default function ContactPage() {
  // useEffect(Tetris, []);
  return (
    <main className='contact-page'>

      <div className="logo-container">
        <a href="/">
          <img src={logo} alt="Logo" className="logo-image" />
        </a>
      </div>
        <div className='belowLogo'></div>
          <div className="contact-container">
            <h1>Contact Me</h1>
            <ContactForm />
          </div>
    </main>
  );
};
