import { Header } from "@/components/Header"
import { HeroCarousel } from "@/components/HeroCarousel"
import { GenerateSection } from "@/components/GenerateSection"
import { GallerySection } from "@/components/GallerySection"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors">
      <Header />
      <HeroCarousel />
      <GenerateSection />
      <GallerySection />
    </div>
  )
}
