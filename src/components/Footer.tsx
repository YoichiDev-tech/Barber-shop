export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-section">
          <h3>Razor &amp; Rumble</h3>
          <p className="footer-tagline">Premium barber shop for the modern man</p>
          <div className="footer-socials">
            <a
              href="https://facebook.com"
              className="social-link"
              aria-label="Facebook"
              title="Facebook"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              className="social-link"
              aria-label="Instagram"
              title="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22.907C6.477 22.907 2.093 18.523 2.093 12S6.477 1.093 12 1.093 21.907 5.477 21.907 12 17.523 22.907 12 22.907m5.847-12.207c-.031-1.198-.324-2.045-1.288-3.009-.963-.964-1.81-1.257-3.008-1.288-1.185-.034-4.738-.034-5.923 0-1.198.031-2.045.324-3.009 1.288-.964.963-1.257 1.81-1.288 3.008-.034 1.185-.034 4.738 0 5.923.031 1.198.324 2.045 1.288 3.009.963.964 1.81 1.257 3.008 1.288 1.185.034 4.738.034 5.923 0 1.198-.031 2.045-.324 3.009-1.288.964-.963 1.257-1.81 1.288-3.008.034-1.185.034-4.738 0-5.923zm-1.558 7.19c-.227.584-.694 1.051-1.278 1.278-.887.235-2.991.181-3.961.181-.97 0-3.077.054-3.961-.181-.584-.227-1.051-.694-1.278-1.278-.235-.887-.181-2.991-.181-3.961 0-.97-.054-3.077.181-3.961.227-.584.694-1.051 1.278-1.278.887-.235 2.991-.181 3.961-.181.97 0 3.077-.054 3.961.181.584.227 1.051.694 1.278 1.278.235.887.181 2.991.181 3.961 0 .97.054 3.077-.181 3.961zm-5.29-7.487c-1.562 0-2.829 1.268-2.829 2.829 0 1.562 1.268 2.829 2.829 2.829s2.829-1.268 2.829-2.829c0-1.562-1.268-2.829-2.829-2.829zm0 4.672c-.967 0-1.75-.782-1.75-1.75s.782-1.75 1.75-1.75 1.75.782 1.75 1.75-.782 1.75-1.75 1.75zm3.622-4.832c0 .365.296.661.661.661s.661-.296.661-.661-.296-.661-.661-.661-.661.296-.661.661z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              className="social-link"
              aria-label="Twitter"
              title="Twitter"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9.5 5" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Hours</h4>
          <ul className="footer-list">
            <li>Mon-Fri: 7am-7pm</li>
            <li>Sat: 8am-6pm</li>
            <li>Sun: 10am-5pm</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul className="footer-list">
            <li>
              <a href="tel:+441179999999">+44 (0)117 999 9999</a>
            </li>
            <li>
              <a href="mailto:hello@razorumble.com">hello@razorumble.com</a>
            </li>
            <li>17 Queen Charlotte St</li>
            <li>Bristol, BS1 4HW</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-list">
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#reviews">Reviews</a>
            </li>
            <li>
              <a href="#book">Book Now</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy; {currentYear} Razor &amp; Rumble. All rights reserved.
        </p>
        <div className="footer-legal">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms &amp; Conditions</a>
        </div>
      </div>
    </footer>
  )
}
