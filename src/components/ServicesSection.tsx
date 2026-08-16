import type { Service } from '../data/siteData'

type ServicesSectionProps = {
  services: Service[]
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
            <div className="service-icon" aria-hidden="true">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
