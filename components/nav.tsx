'use client';

import { useEffect } from 'react';

export default function Nav() {
  useEffect(() => {
    const nav = document.getElementById('nav');
    if (!nav) return;

    const handleScroll = () => {
      if (window.scrollY > 40) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="nav">
      <div className="logo">
        <div className="logo-mark">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="44" fill="none" stroke="#3a8fd9" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5">
              <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="24s" repeatCount="indefinite" />
            </circle>
            <circle cx="50" cy="50" r="32" fill="none" stroke="#e63946" strokeWidth="1.5" strokeDasharray="4 4">
              <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="-360 50 50" dur="16s" repeatCount="indefinite" />
            </circle>
            <circle cx="50" cy="50" r="20" fill="none" stroke="#ffffff" strokeWidth="2"/>
            <g>
              <circle cx="50" cy="6" r="3.5" fill="#e63946"/>
              <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="8s" repeatCount="indefinite" />
            </g>
            <g>
              <circle cx="82" cy="50" r="2.5" fill="#3a8fd9"/>
              <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="-360 50 50" dur="12s" repeatCount="indefinite" />
            </g>
          </svg>
        </div>
        <span>LuxFuel</span>
      </div>
      <div className="nav-tagline">The in-orbit validation layer.</div>
    </nav>
  );
}
