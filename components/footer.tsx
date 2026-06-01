'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
  const [contactEmail, setContactEmail] = useState('Email us');

  useEffect(() => {
    // Assemble email address at runtime to deter scrapers
    const user = 'victor';
    const domain = 'luxfuel' + '.' + 'space';
    const addr = user + '@' + domain;
    setContactEmail(addr);
  }, []);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const user = 'victor';
    const domain = 'luxfuel' + '.' + 'space';
    const addr = user + '@' + domain;
    window.location.href = 'mailto:' + addr + '?subject=' + encodeURIComponent('LuxFuel inquiry');
  };

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="logo">
            <div className="logo-mark">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle className="logo-orbit-outer" cx="50" cy="50" r="44" fill="none" stroke="#3a8fd9" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5"/>
                <circle className="logo-orbit-mid" cx="50" cy="50" r="32" fill="none" stroke="#e63946" strokeWidth="1.5" strokeDasharray="4 4"/>
                <circle cx="50" cy="50" r="20" fill="none" stroke="#ffffff" strokeWidth="2"/>
                <g className="logo-dot-red"><circle cx="50" cy="6" r="3.5" fill="#e63946"/></g>
                <g className="logo-dot-blue"><circle cx="82" cy="50" r="2.5" fill="#3a8fd9"/></g>
              </svg>
            </div>
            <span>LuxFuel</span>
          </div>
          <p className="footer-tag">We authenticate the transactions that make in-orbit refueling possible.</p>
        </div>
        <div className="footer-contact">
          <span className="contact-label mono">Get in touch</span>
          <a className="contact-link" href="#" onClick={handleContactClick}>
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="5" width="18" height="14" rx="2"/>
              <path d="m3 7 9 6 9-6"/>
            </svg>
            <span>{contactEmail}</span>
          </a>
          <div className="footer-meta mono">
            <span>LuxFuel</span>
            <span>Albuquerque · NM</span>
            <span>Founded 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
