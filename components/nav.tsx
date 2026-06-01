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
            <circle className="logo-orbit-outer" cx="50" cy="50" r="44" fill="none" stroke="#3a8fd9" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5"/>
            <circle className="logo-orbit-mid" cx="50" cy="50" r="32" fill="none" stroke="#e63946" strokeWidth="1.5" strokeDasharray="4 4"/>
            <circle cx="50" cy="50" r="20" fill="none" stroke="#ffffff" strokeWidth="2"/>
            <g className="logo-dot-red"><circle cx="50" cy="6" r="3.5" fill="#e63946"/></g>
            <g className="logo-dot-blue"><circle cx="82" cy="50" r="2.5" fill="#3a8fd9"/></g>
          </svg>
        </div>
        <span>LuxFuel</span>
      </div>
      <div className="nav-tagline">The in-orbit validation layer.</div>
    </nav>
  );
}
