export function StorySection() {
  return (
    <section className="story">
      <div className="story-image" aria-label="Barber shop interior" />

      <div className="story-copy">
        <p className="section-label">Why choose us</p>
        <h2>Classic technique. Modern confidence.</h2>
        <p>
          We blend old-school craftsmanship with a sharp, contemporary finish —
          clean fades, precise lines, and a consultation that fits your style.
        </p>

        <ul className="feature-list">
          <li>Consultation-based cuts tailored to your features</li>
          <li>Premium grooming products and hot towel finish</li>
          <li>Relaxed atmosphere with a true neighborhood feel</li>
        </ul>

        <button type="button" className="primary-btn">
          Get a fresh cut
        </button>
      </div>
    </section>
  )
}
