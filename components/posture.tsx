export default function Posture() {
  return (
    <section className="posture" id="posture">
      <div className="container">
        <div className="section-eyebrow mono reveal" data-stagger="1"><span className="num">03</span> — The Posture</div>
        <h2 className="section-h2 reveal" data-stagger="2">Independent on <span className="accent">purpose</span>.</h2>
        <p className="section-lede reveal" data-stagger="3">An independent transaction record for in-orbit refueling. Built for the satellite owners, insurers, and finance institutions who need one. Like settlement infrastructure in finance, LuxFuel doesn't compete with the institutions using it.</p>
        <div className="posture-grid">
          <div className="posture-col is reveal" data-stagger="4">
            <h3>What LuxFuel is</h3>
            <div className="posture-row">A software company publishing an open API for transfer verification.</div>
            <div className="posture-row">Provider-agnostic. Usable across servicers, depots, and clients.</div>
            <div className="posture-row">Aligned with satellite owners, insurers, and finance institutions who need an independent record.</div>
          </div>
          <div className="posture-col is-not reveal" data-stagger="5">
            <h3>What LuxFuel is not</h3>
            <div className="posture-row">Not a servicer. We don't move, deliver, or own propellant.</div>
            <div className="posture-row">Not a hardware company. We don't build flight systems or fluid couplings.</div>
            <div className="posture-row">Not a shared ledger. One record, written independently. Auditable by every party.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
