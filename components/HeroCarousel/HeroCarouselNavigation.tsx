"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { type HeroCarouselProps } from "@/types"
import { HeroSlide } from "./HeroSlide"

export function HeroCarouselNavigation({ slides }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative overflow-hidden rounded-2xl">
      <div
        className="flex gap-x-7 transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 72}%)` }}
      >
        {slides.map((slide) => (
          <HeroSlide key={slide.id} {...slide} />
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="muted"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-muted text-muted-foreground hover:bg-muted/80"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="size-6" />
      </Button>
      <Button
        variant="muted"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-muted text-muted-foreground hover:bg-muted/80"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="size-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? "bg-gray-900 dark:bg-white" : "bg-gray-400 dark:bg-gray-600"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}