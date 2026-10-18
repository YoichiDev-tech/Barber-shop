export function StorySection() {
  return (
    <section className="story" id="story">
      <div className="story-image" role="img" aria-label="Barbershop interior" />

      <div className="story-copy">
        <p className="section-label">The approach</p>
        <h2>Classic technique. Modern confidence.</h2>
        <p>
          This fictional barbershop concept pairs old-school craftsmanship
          with a sharp, contemporary finish — clean fades, precise lines, and
          a considered experience.
        </p>

        <ul className="feature-list">
          <li>Consultation-led cuts shaped around personal style</li>
          <li>Clean fades and careful detailing</li>
          <li>A relaxed, considered grooming experience</li>
        </ul>

        <a href="#services" className="primary-btn">
          Explore services
        </a>
      </div>
    </section>
  )
}
