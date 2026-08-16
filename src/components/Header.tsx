type HeaderProps = {
  items: string[]
}

export function Header({ items }: HeaderProps) {
  return (
    <header className="topbar">
      <div className="brand" aria-label="Razor and Rumble barber shop logo">
        <div className="brand-mark">R</div>
        <div className="brand-copy">
          <span>Razor</span>
          <span>&amp; Rumble</span>
        </div>
      </div>

      <nav className="main-nav" aria-label="Main navigation">
        {items.map((item) => (
          <a key={item} href="#services" className="nav-link">
            {item}
          </a>
        ))}
      </nav>

      <button type="button" className="book-button">
        Book now
      </button>
    </header>
  )
}
