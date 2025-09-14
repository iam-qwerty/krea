import { Button } from "@/components/ui/button"
import { Home, Folder, VideoIcon, PenTool, Type, FolderOpen } from "lucide-react"

export function Navigation() {

  const links = [
    { icon: <Home/>, label: "Home" },
    { icon: <Folder/>, label: "Projects" },
    { icon: <VideoIcon/>, label: "Videos" },
    { icon: <PenTool/>, label: "Designs" },
    { icon: <Type/>, label: "Documents" },
    { icon: <FolderOpen/>, label: "Archives" },
  ]

  return (
    <div className="flex items-center gap-2 bg-accent rounded-xl lg:p-1">
      {links.map((link) => (
        <Button
          key={link.label}
          variant="ghost"
          size="sm"
          className="flex justify-center items-center hover:bg-white hover:shadow-2xl dark:hover:text-white"
        >
          <span className="w-4 h-4 ">{link.icon}</span>
        </Button>
      ))}
    </div>
  )
}