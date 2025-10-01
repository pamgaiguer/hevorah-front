import { Hero } from "@/components/hero"
import { Biography } from "@/components/biography"
import { TourDates } from "@/components/tour-dates"
import { MusicSection } from "@/components/music-section"
import { MediaGallery } from "@/components/media-gallery"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Biography />
      <MusicSection />
      <TourDates />
      <MediaGallery />
      <Contact />
      <Footer />
    </main>
  )
}
