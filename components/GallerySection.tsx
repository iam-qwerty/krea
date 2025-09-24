"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { FileText, CreditCard } from "lucide-react"

export function GallerySection() {
  return (
    <section className="sm:py-8">
      <div className="px-4 sm:px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Gallery</h2>
        <div className="flex items-center gap-2 sm:gap-4">
          <Button variant="muted" size="sm" className="text-muted-foreground text-sm sm:flex">
            <FileText className="w-4 h-4 mr-0.5"/>
            Legal
          </Button>
          <Button variant="muted" size="sm" className="text-muted-foreground text-sm sm:flex">
            <CreditCard className="w-4 h-4 mr-0.5"/>
            Pricing
          </Button>
        </div>
      </div>

      {/* Curated By Mobbin Section */}
      <div className="flex items-center justify-between mt-2 bg-gray-800 py-6">
        <div className="px-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
             <Image src="/logo-dark.png" alt="Krea Logo" width={18} height={18} className="object-contain" />
          </div>
          <span className="text-2xl text-white font-semibold">Krea AI</span>
        </div>
        <div className="flex items-center gap-5 text-white">
          <span className="font-semibold">curated by</span>
          <div className="flex items-center gap-2">
            <Image src="/mobbin.png" alt="mobbin logo" width={50} height={50} />
            <span className="font-semibold text-white text-2xl sm:pr-4">Mobbin</span>
          </div>
        </div>
      </div>
    </section>
  )
}