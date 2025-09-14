import { Button } from "@/components/ui/button"
import { type GallerySectionProps } from "@/types"

export function GallerySection({ curator }: GallerySectionProps) {
  return (
    <section className="px-6 py-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Gallery</h2>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-400">
            Legal
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-400">
            Pricing
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between mt-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center">
            <span className="text-white dark:text-black font-bold">K</span>
          </div>
          <span className="text-xl font-semibold">Krea AI</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
          <span>curated by</span>
          <div className="flex items-center gap-1">
            <div className="w-6 h-6 bg-gray-900 dark:bg-white rounded"></div>
            <span className="font-semibold text-gray-900 dark:text-white">{curator.name}</span>
          </div>
        </div>
      </div>
    </section>
  )
}