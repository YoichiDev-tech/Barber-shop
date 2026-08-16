import type { Service } from '../data/siteData'

type ServicesSectionProps = {
  services: Service[]
}

function getServiceIcon(iconType: string) {
  switch (iconType) {
    case 'scissors':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M20 4l-8.5 8m0 0l8.5 8M11.5 12L20 4m0 16l-8.5-8" />
        </svg>
      )
    case 'beard':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2c-2.5 0-4 1.5-4 4v4c0 2 1 3 1 3h6s1-1 1-3V6c0-2.5-1.5-4-4-4z" />
          <path d="M8 10s-2 2-2 5c0 3 2 6 4 7m8-12s2 2 2 5c0 3-2 6-4 7" />
          <path d="M10 18c0 1 .5 2 2 2s2-1 2-2" />
        </svg>
      )
    case 'razor':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 4L5 20" />
          <path d="M9 6l2-4h4l2 4" />
          <path d="M7 8h10" />
          <circle cx="12" cy="12" r="1" />
        </svg>
      )
    default:
      return null
  }
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="services" id="services">
      <div className="section-heading">
        <p className="section-label">Our craft</p>
        <h2>Built for your best look.</h2>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <article key={service.title} className="service-card">
            <div className="service-icon" aria-hidden="true">
              {getServiceIcon(service.icon)}
            </div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
