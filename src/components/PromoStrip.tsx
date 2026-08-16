export function PromoStrip() {
  return (
    <section className="promo-strip" aria-label="Special offer">
      <div>
        <p className="section-label">This week</p>
        <strong>Fresh cut + beard line</strong>
      </div>
      <span className="price">£42</span>
      <button type="button" className="secondary-btn">
        Claim offer
      </button>
    </section>
  )
}
