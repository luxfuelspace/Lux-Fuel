export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-orbital" aria-hidden="true">
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
          <circle className="ring-1" cx="250" cy="250" r="230" fill="none" stroke="#3a8fd9" strokeWidth="1" strokeDasharray="2 8" opacity="0.25"/>
          <circle className="ring-2" cx="250" cy="250" r="180" fill="none" stroke="#e63946" strokeWidth="1.5" strokeDasharray="6 8" opacity="0.5"/>
          <circle className="ring-3" cx="250" cy="250" r="135" fill="none" stroke="#3a8fd9" strokeWidth="1" strokeDasharray="3 5" opacity="0.45"/>
          <circle cx="250" cy="250" r="90" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.7"/>
          <g className="sat-1"><circle cx="250" cy="20" r="6" fill="#e63946"/></g>
          <g className="sat-2"><circle cx="430" cy="250" r="5" fill="#3a8fd9"/></g>
          <g className="sat-3"><circle cx="115" cy="250" r="4" fill="#5a6478" opacity="0.8"/></g>
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
