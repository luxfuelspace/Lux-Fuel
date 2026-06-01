export default function Protocol() {
  return (
    <section className="protocol" id="protocol">
      <div className="container">
        <div className="section-eyebrow mono reveal" data-stagger="1"><span className="num">01</span> — The Protocol</div>
        <h2 className="section-h2 reveal" data-stagger="2">The <span className="accent">LV<span className="lvx-x">x</span></span> Protocol.</h2>
        <p className="section-lede reveal" data-stagger="3">
          An open API that issues independent, verifiable records of in-orbit propellant transfers. Provider-agnostic and available to every party that needs proof of what moved.
        </p>
        <div className="protocol-stats reveal" data-stagger="4">
          <div className="stat">
            <span className="stat-label mono">Architecture</span>
            <span className="stat-value">Open <span className="accent">API</span></span>
          </div>
          <div className="stat">
            <span className="stat-label mono">Posture</span>
            <span className="stat-value">Provider-<span className="accent-blue">Agnostic</span></span>
          </div>
          <div className="stat">
            <span className="stat-label mono">Output</span>
            <span className="stat-value">Verifiable <span className="accent">Receipt</span></span>
          </div>
          <div className="stat">
            <span className="stat-label mono">Use case</span>
            <span className="stat-value">Audit-grade <span className="accent-blue">Evidence</span></span>
          </div>
        </div>
      </div>
    </section>
  );
}
