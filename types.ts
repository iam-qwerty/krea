
export interface HeroSlide {
  id: string
  title: string
  subtitle: string
  description: string
  backgroundImage: string
  buttonText: string
}

export interface GenerateCard {
  image: string
  title: string
  description: string
  isNew?: boolean
}

export interface UserActionsProps {
  className?: string
}

export interface HeroCarouselProps {
  slides: HeroSlide[]
}

export interface GenerateCardProps extends GenerateCard {
  onOpen?: () => void
}