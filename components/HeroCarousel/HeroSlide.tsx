import { Button } from "@/components/ui/button"
import { type HeroSlide as HeroSlideType } from "@/types"

export function HeroSlide({ title, subtitle, description, backgroundImage, buttonText }: HeroSlideType) {
  return (
    <div className="w-full sm:w-[70%] flex-shrink-0 relative px-4 sm:px-0">
      <div
        className="h-80 sm:h-96 rounded-2xl bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-4 left-4 sm:left-6 text-xs text-white">
          NEW IMAGE MODEL
        </div>
        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-8 text-center text-balance text-white">{title}</h1>
          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4">
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl mb-2 sm:mb-3 font-semibold text-white">{subtitle}</h2>
              <p className="text-gray-200 mb-4 sm:mb-6 max-w-md text-pretty text-sm sm:text-base">{description}</p>
            </div>
            <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-6 py-4 sm:p-6 font-semibold md:mt-12 text-sm sm:text-base whitespace-nowrap cursor-pointer">{buttonText}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}