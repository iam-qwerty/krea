import { Button } from "@/components/ui/button"
import { Bell } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { type UserActionsProps } from "@/types"

export function UserActions({ className }: UserActionsProps) {
  return (
    <div className={className}>
      <Button
        variant="ghost"
        size="sm"
        className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white text-sm px-2 py-1 h-8"
      >
        Gallery
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white text-sm px-2 py-1 h-8"
      >
        Support
      </Button>
      <Button variant="ghost" size="sm" className="p-2 h-8 w-8">
        <Bell className="w-4 h-4" />
      </Button>
      <ThemeToggle />
      <div className="w-7 h-7 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full"></div>
    </div>
  )
}