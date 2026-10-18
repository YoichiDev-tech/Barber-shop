type NavItem = {
  label: string
  href: string
}

type HeaderProps = {
  items: NavItem[]
}

export function Header({ items }: HeaderProps) {
  return (
    <header className="topbar">
      <div className="brand" aria-label="Razor and Rumble demo logo">
        <div className="brand-mark">R</div>
        <div className="brand-copy">
          <span>Razor</span>
          <span>&amp; Rumble</span>
        </div>
      </div>

      <nav className="main-nav" aria-label="Main navigation">
        {items.map((item) => (
          <a key={item.label} href={item.href} className="nav-link">
            {item.label}
          </a>
        ))}
      </nav>

      <a href="#services" className="book-button">
        Explore services
      </a>
    </header>
  )
}
