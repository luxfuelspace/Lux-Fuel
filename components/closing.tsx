export default function Closing() {
  return (
    <section className="closing" id="closing">
      <div className="closing-orbital" aria-hidden="true">
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
          <g>
            <circle cx="250" cy="250" r="220" fill="none" stroke="#3a8fd9" strokeWidth="1.5" strokeDasharray="2 8" opacity="0.4"/>
            <animateTransform attributeName="transform" type="rotate" from="0 250 250" to="360 250 250" dur="60s" repeatCount="indefinite"/>
          </g>
          <g>
            <circle cx="250" cy="250" r="170" fill="none" stroke="#e63946" strokeWidth="2" strokeDasharray="6 8" opacity="0.6"/>
            <animateTransform attributeName="transform" type="rotate" from="0 250 250" to="-360 250 250" dur="40s" repeatCount="indefinite"/>
          </g>
          <g>
            <circle cx="250" cy="250" r="120" fill="none" stroke="#3a8fd9" strokeWidth="1.5" strokeDasharray="3 5" opacity="0.55"/>
            <animateTransform attributeName="transform" type="rotate" from="0 250 250" to="360 250 250" dur="30s" repeatCount="indefinite"/>
          </g>
          <circle cx="250" cy="250" r="80" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.7"/>
          <g>
            <circle cx="250" cy="30" r="7" fill="#e63946"/>
            <animateTransform attributeName="transform" type="rotate" from="0 250 250" to="360 250 250" dur="24s" repeatCount="indefinite"/>
          </g>
          <g>
            <circle cx="420" cy="250" r="6" fill="#3a8fd9"/>
            <animateTransform attributeName="transform" type="rotate" from="0 250 250" to="-360 250 250" dur="18s" repeatCount="indefinite"/>
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
