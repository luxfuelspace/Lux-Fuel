'use client';

import { useEffect, useRef } from 'react';

const ANIMS = [
  { id: 'r1', degsPerSec:  360 / 80,  dir:  1 },
  { id: 'r2', degsPerSec:  360 / 60,  dir: -1 },
  { id: 'r3', degsPerSec:  360 / 40,  dir:  1 },
  { id: 's1', degsPerSec:  360 / 30,  dir:  1 },
  { id: 's2', degsPerSec:  360 / 22,  dir: -1 },
  { id: 's3', degsPerSec:  360 / 18,  dir:  1 },
];

export default function Hero() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const state = ANIMS.map(a => ({
      el: svg.querySelector(`#${a.id}`) as SVGGElement | null,
      degsPerSec: a.degsPerSec,
      dir: a.dir,
      angle: 0,
    }));

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let last: number | null = null;
    let raf: number;

    const tick = (now: number) => {
      const dt = last === null ? 0 : (now - last) / 1000;
      last = now;
      state.forEach(s => {
        if (!s.el) return;
        s.angle = (s.angle + s.degsPerSec * s.dir * dt) % 360;
        s.el.setAttribute('transform', `rotate(${s.angle} 250 250)`);
      });
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="hero">
      <div className="hero-orbital" aria-hidden="true">
        <svg ref={svgRef} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
          <g id="r1">
            <circle cx="250" cy="250" r="230" fill="none" stroke="#3a8fd9" strokeWidth="1.5" strokeDasharray="2 8" opacity="0.4"/>
          </g>
          <g id="r2">
            <circle cx="250" cy="250" r="180" fill="none" stroke="#e63946" strokeWidth="2" strokeDasharray="6 8" opacity="0.6"/>
          </g>
          <g id="r3">
            <circle cx="250" cy="250" r="135" fill="none" stroke="#3a8fd9" strokeWidth="1.5" strokeDasharray="3 5" opacity="0.55"/>
          </g>
          <circle cx="250" cy="250" r="90" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.7"/>
          <g id="s1">
            <circle cx="250" cy="20" r="7" fill="#e63946"/>
          </g>
          <g id="s2">
            <circle cx="430" cy="250" r="6" fill="#3a8fd9"/>
          </g>
          <g id="s3">
            <circle cx="115" cy="250" r="5" fill="#7a8498"/>
          </g>
        </svg>
      </div>
      <div className="container">
        <div className="hero-content">
          <span className="hero-eyebrow mono">LV<span className="lvx-x">x</span> PROTOCOL · IN-ORBIT VALIDATION LAYER</span>
          <h1>Every in-orbit refueling transfer needs a <span className="accent">transaction receipt</span>.</h1>
          <p className="hero-sub">
            LuxFuel develops the LV<span className="lvx-x">x</span> Protocol, an open API that issues independent, verifiable receipts for propellant transfers in orbit.
          </p>
          <p className="hero-tagline">An independent record every party can trust.</p>
        </div>
      </div>
      <div className="scroll-cue mono">Scroll</div>
    </section>
  );
}
