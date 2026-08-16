import { Header } from '../components/Header'
import { HeroSection } from '../components/HeroSection'
import { ServicesSection } from '../components/ServicesSection'
import { StorySection } from '../components/StorySection'
import { PromoStrip } from '../components/PromoStrip'
import { TestimonialsSection } from '../components/TestimonialsSection'
import { Footer } from '../components/Footer'
import { navItems, services, stats } from '../data/siteData'

export function LandingPage() {
  return (
    <div className="page-shell">
      <Header items={navItems} />

      <main className="page-content">
        <HeroSection stats={stats} />
        <ServicesSection services={services} />
        <PromoStrip />
        <StorySection />
        <TestimonialsSection />
      </main>

      <Footer />
    </div>
  )
}
