import { HeroCarouselNavigation } from "./HeroCarouselNavigation"

const heroSlides = [
  {
    id: "wan-2-2",
    title: "WAN 2.2",
    subtitle: "WAN 2.2 Image generation",
    description:
      "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
    backgroundImage: "/carousels/carousel-image1.png",
    buttonText: "Try WAN 2.2",
  },
  {
    id: "anime-character",
    title: "Character AI",
    subtitle: "Anime Character Generation",
    description:
      "Create stunning anime characters with incredible detail and artistic flair using our advanced character generation models.",
    backgroundImage: "/carousels/carousel-image2.png",
    buttonText: "Generate Character",
  },
  {
    id: "open-source",
    title: "Open Source",
    subtitle: "FLUX.1 Krea",
    description:
      "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
    backgroundImage: "/placeholder.svg?height=400&width=600",
    buttonText: "Learn More",
  },
]

export function HeroCarousel() {
  return (
    <section className="relative px-6 md:pr-0 md: py-8">
      <HeroCarouselNavigation slides={heroSlides} />
    </section>
  )
}