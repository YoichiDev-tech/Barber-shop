import { Header } from '../components/Header'
import { HeroSection } from '../components/HeroSection'
import { ServicesSection } from '../components/ServicesSection'
import { StorySection } from '../components/StorySection'
import { PromoStrip } from '../components/PromoStrip'
import { navItems, services, stats } from '../data/siteData'

export function LandingPage() {
  return (
    <div className="page-shell">
      <Header items={navItems} />

      <main className="page-content">
        <HeroSection stats={stats} />
        <ServicesSection services={services} />
        <StorySection />
        <PromoStrip />
      </main>

      <footer className="site-footer">
        <p>Razor &amp; Rumble</p>
        <p>17 Queen Charlotte St • Bristol, BS1 4HW</p>
      </footer>
    </div>
  )
}
