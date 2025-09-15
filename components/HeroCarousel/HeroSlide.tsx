import { Button } from "@/components/ui/button"
import { type HeroSlide as HeroSlideType } from "@/types"

export function HeroSlide({ title, subtitle, description, backgroundImage, buttonText }: HeroSlideType) {
  return (
    <div className="w-[70%] flex-shrink-0 relative">
      <div
        className="h-96 rounded-2xl bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-4 left-6 text-xs">
          NEW IMAGE MODEL
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <h1 className="text-7xl font-bold mb-8 text-center text-balance text-white">{title}</h1>
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl mb-3 text-white">{subtitle}</h2>
              <p className="text-gray-200 mb-6 max-w-md text-pretty">{description}</p>
            </div>
            <Button className="bg-white text-black hover:bg-gray-100 rounded-full">{buttonText}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}