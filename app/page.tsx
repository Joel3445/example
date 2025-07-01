import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EventsSection } from "@/components/events-section"
import { ResourcesSection } from "@/components/resources-section"
import { MembershipSection } from "@/components/membership-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-midnight-black text-light-gray">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <ResourcesSection />
        <MembershipSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
