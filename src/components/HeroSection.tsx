export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Barbershop website concept</p>
        <h1>
          Sharp cuts.
          <span>Old-school edge.</span>
        </h1>
        <p className="lede">
          A considered barbershop concept focused on clean cuts, confident
          styling, and a welcoming chairside experience.
        </p>

        <div className="cta-row">
          <a href="#services" className="primary-btn">
            Explore services
          </a>
          <a href="#story" className="secondary-btn">
            Our approach
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-label="Barbershop concept photo">
        <div className="photo-card">
          <div className="portrait" role="img" aria-label="Barber at work" />
        </div>

        <div className="floating-card">
          <div>
            <span className="pill-label">Demo concept</span>
            <strong>Designed around the craft</strong>
          </div>
          <span className="arrow" aria-hidden="true">→</span>
        </div>
      </div>
    </section>
  )
}
