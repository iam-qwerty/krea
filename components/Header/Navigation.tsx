import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"


const navigationIcons = [
  { svg: "icon_1.svg", alt: "Home" },
  { svg: "icon_2.svg", alt: "Home" },
  { svg: "icon_3.svg", alt: "Home" },
  { svg: "icon_4.svg", alt: "Home" },
  { svg: "icon_5.svg", alt: "Home" },
  { svg: "icon_6.svg", alt: "Home" },
  { svg: "icon_7.svg", alt: "Home" },
]

export function Navigation() {
  return (
    <nav className={cn("flex items-center gap-1 sm:gap-2 bg-muted rounded-xl p-1 overflow-x-auto scrollbar-hide",)}>
      {navigationIcons.map((icon) => (
        <Button
          key={icon.svg}
          variant="muted"
          size="icon"
          className="flex justify-center items-center hover:bg-white flex-shrink-0"
          aria-label={icon.svg}
        >
          <Image src={`/header-icons/${icon.svg}`} alt="Home" width={20} height={20} className="fill-white sm:w-6 sm:h-6"/>
        </Button>
      ))}
    </nav>
  )
}
