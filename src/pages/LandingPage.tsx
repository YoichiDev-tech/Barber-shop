import { Header } from '../components/Header'
import { HeroSection } from '../components/HeroSection'
import { ServicesSection } from '../components/ServicesSection'
import { StorySection } from '../components/StorySection'
import { Footer } from '../components/Footer'
import { navItems, services } from '../data/siteData'

export function LandingPage() {
  return (
    <div className="page-shell">
      <Header items={navItems} />

      <main className="page-content">
        <HeroSection />
        <ServicesSection services={services} />
        <StorySection />
      </main>

      <Footer />
    </div>
  )
}
