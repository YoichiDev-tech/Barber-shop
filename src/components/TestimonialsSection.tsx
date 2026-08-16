type Testimonial = {
  quote: string
  author: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Been going to Razor & Rumble for 3 years. Best fades in Bristol, hands down. Every visit is perfect.",
    author: "James P.",
    role: "Regular client",
  },
  {
    quote:
      "First time here and was genuinely impressed. Professional, skilled, and they actually listen to what you want.",
    author: "Marcus T.",
    role: "Verified client",
  },
  {
    quote:
      "The attention to detail is incredible. They took their time with my beard and it shows. Highly recommend!",
    author: "David W.",
    role: "Verified client",
  },
]

export function TestimonialsSection() {
  return (
    <section className="testimonials" id="reviews">
      <div className="section-heading">
        <p className="section-label">From our clients</p>
        <h2>What people are saying</h2>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <article key={testimonial.author} className="testimonial-card">
            <div className="testimonial-rating" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="star-icon"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <div className="testimonial-author">
              <strong>{testimonial.author}</strong>
              <span>{testimonial.role}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
