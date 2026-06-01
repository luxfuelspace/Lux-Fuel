export default function Closing() {
  return (
    <section className="closing" id="closing">
      <div className="closing-orbital" aria-hidden="true">
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
          <circle className="closing-ring-a" cx="250" cy="250" r="220" fill="none" stroke="#3a8fd9" strokeWidth="1" strokeDasharray="2 8" opacity="0.3"/>
          <circle className="closing-ring-b" cx="250" cy="250" r="170" fill="none" stroke="#e63946" strokeWidth="1.5" strokeDasharray="6 8" opacity="0.5"/>
          <circle className="closing-ring-c" cx="250" cy="250" r="120" fill="none" stroke="#3a8fd9" strokeWidth="1" strokeDasharray="3 5" opacity="0.45"/>
          <circle cx="250" cy="250" r="80" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.7"/>
          <g className="closing-sat-1"><circle cx="250" cy="30" r="6" fill="#e63946"/></g>
          <g className="closing-sat-2"><circle cx="420" cy="250" r="5" fill="#3a8fd9"/></g>
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
