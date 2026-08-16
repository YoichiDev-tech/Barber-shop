import type { Stat } from '../data/siteData'

type HeroSectionProps = {
  stats: Stat[]
}

export function HeroSection({ stats }: HeroSectionProps) {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Since 1998 • Downtown</p>
        <h1>
          Sharp cuts.
          <span>Old-school edge.</span>
        </h1>
        <p className="lede">
          Precision barbering for men who want a clean cut, a confident finish,
          and the kind of chairside experience that feels like a ritual.
        </p>

        <div className="cta-row">
          <button type="button" className="primary-btn">
            Reserve a chair
          </button>
          <button type="button" className="secondary-btn">
            View services
          </button>
        </div>

        <div className="stats-grid" aria-label="Barber shop statistics">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <strong>{stat.number}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-visual" aria-label="Barber shop photo">
        <div className="photo-card">
          <div className="portrait" role="img" aria-label="Barber trimming a client's hair" />
        </div>

        <div className="floating-card">
          <div>
            <span className="pill-label">Open today</span>
            <strong>Walk-ins welcome</strong>
          </div>
          <span className="arrow">→</span>
        </div>
      </div>
    </section>
  )
}
