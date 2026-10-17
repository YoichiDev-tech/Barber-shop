export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-section">
          <h3>Razor &amp; Rumble</h3>
          <p className="footer-tagline">
            A fictional barbershop website concept by PrismWave Studio.
          </p>
        </div>

        <div className="footer-section">
          <h4>Explore the concept</h4>
          <ul className="footer-list">
            <li><a href="#services">Services</a></li>
            <li><a href="#story">Our approach</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <p className="footer-copyright">
          © {currentYear} Razor &amp; Rumble — fictional demo concept.
        </p>
        <p className="footer-copyright">
          No real location, contact details, or booking service.
        </p>
      </div>
    </footer>
  )
}
