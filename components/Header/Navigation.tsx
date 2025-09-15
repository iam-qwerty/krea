import { Button } from "@/components/ui/button"
import { Home, Folder, VideoIcon, PenTool, Type, FolderOpen } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavigationProps {
  className?: string
}

const navigationLinks = [
  { icon: <Home className="w-4 h-4" />, label: "Home" },
  { icon: <Folder className="w-4 h-4" />, label: "Projects" },
  { icon: <VideoIcon className="w-4 h-4" />, label: "Videos" },
  { icon: <PenTool className="w-4 h-4" />, label: "Designs" },
  { icon: <Type className="w-4 h-4" />, label: "Documents" },
  { icon: <FolderOpen className="w-4 h-4" />, label: "Archives" },
]

export function Navigation({ className }: NavigationProps) {
  return (
    <nav className={cn("flex items-center gap-2 bg-muted rounded-xl lg:p-1", className)}>
      {navigationLinks.map((link) => (
        <Button
          key={link.label}
          variant="muted"
          size="icon"
          className="flex justify-center items-center hover:bg-white"
          aria-label={link.label}
        >
          {link.icon}
        </Button>
      ))}
    </nav>
  )
}
