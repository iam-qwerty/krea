import { Button } from "@/components/ui/button"
import { Bell, Headset, Image } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { type UserActionsProps } from "@/types"

export function UserActions({ className }: UserActionsProps) {
  return (
    <div className={className}>
      <Button
        variant="muted"
        size="sm"
        className="hidden sm:flex text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white text-xs px-2 py-1 h-8 bg-muted"
      >
        <Image className="w-4 h-4 mr-0.5" />
        Gallery
      </Button>
      <Button
        variant="muted"
        size="sm"
        className="hidden sm:flex text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white text-xs px-2 py-1 h-8"
      >
        <Headset className="w-4 h-4 mr-0.5" />
        Support
      </Button>
      <Button variant="muted" size="sm" className="p-2 h-8 w-8">
        <Bell className="w-4 h-4 fill-primary" />
      </Button>
      <ThemeToggle />
      <div className="w-7 h-7 bg-gradient-to-br from-pink-300 via-purple-200 to-blue-200 rounded-full"></div>
    </div>
  )
}