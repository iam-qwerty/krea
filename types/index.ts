import { type ReactNode } from "react"

export interface HeroSlide {
  id: string
  title: string
  subtitle: string
  description: string
  backgroundImage: string
  buttonText: string
}

export interface GenerateCard {
  icon: ReactNode
  title: string
  description: string
  isNew?: boolean
}

export interface NavigationProps {
  className?: string
}

export interface UserActionsProps {
  className?: string
}

export interface HeroCarouselProps {
  slides: HeroSlide[]
}

export interface GenerateSectionProps {
  cards: GenerateCard[]
}

export interface GenerateCardProps extends GenerateCard {
  onOpen?: () => void
  colorScheme: string
}

export interface GallerySectionProps {
  curator: {
    name: string
    avatar: string
  }
}