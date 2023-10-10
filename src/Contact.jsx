import React from 'react';
import ContactForm from './components/ContactForm';
// import ContactPixels from './components/contactPixels';
import logo from './assets/JB.png';

export default function ContactPage() {
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
