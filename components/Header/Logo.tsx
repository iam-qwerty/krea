"use client"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { useTheme } from "next-themes"

export function Logo() {
  const { theme } = useTheme();
  return (
    <div className="flex items-center gap-2 sm:gap-8">
        <Image src={theme === "light" ? "/logo-light.png" : "/logo-dark.png"} alt="Krea Logo" width={18} height={18} className="object-contain" />
      <div className="hidden sm:flex items-center gap-2 px-2 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
        <div className="w-7 h-7 bg-gradient-to-br from-pink-300 via-purple-200 to-blue-200 rounded-full"></div>
        <span className="text-xs text-gray-700 dark:text-white">benevolentmimblebat</span>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </div>
    </div>
  )
}