'use client';

import { useEffect, useRef } from 'react';

const ANIMS = [
  { id: 'cr1', degsPerSec: 360 / 60, dir:  1 },
  { id: 'cr2', degsPerSec: 360 / 40, dir: -1 },
  { id: 'cr3', degsPerSec: 360 / 30, dir:  1 },
  { id: 'cs1', degsPerSec: 360 / 24, dir:  1 },
  { id: 'cs2', degsPerSec: 360 / 18, dir: -1 },
];

export default function Closing() {
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
    <section className="closing" id="closing">
      <div className="closing-orbital" aria-hidden="true">
        <svg ref={svgRef} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
          <g id="cr1">
            <circle cx="250" cy="250" r="220" fill="none" stroke="#3a8fd9" strokeWidth="1.5" strokeDasharray="2 8" opacity="0.4"/>
          </g>
          <g id="cr2">
            <circle cx="250" cy="250" r="170" fill="none" stroke="#e63946" strokeWidth="2" strokeDasharray="6 8" opacity="0.6"/>
          </g>
          <g id="cr3">
            <circle cx="250" cy="250" r="120" fill="none" stroke="#3a8fd9" strokeWidth="1.5" strokeDasharray="3 5" opacity="0.55"/>
          </g>
          <circle cx="250" cy="250" r="80" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.7"/>
          <g id="cs1">
            <circle cx="250" cy="30" r="7" fill="#e63946"/>
          </g>
          <g id="cs2">
            <circle cx="420" cy="250" r="6" fill="#3a8fd9"/>
          </g>
        </svg>
      </div>
      <div className="container">
        <h2>
          <span className="line-1">We don't move propellant.</span>
          <span className="line-2">We authenticate the transactions that make in-orbit refueling <span className="accent">possible</span>.</span>
        </h2>
      </div>
    </section>
  );
}
