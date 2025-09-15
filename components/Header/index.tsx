import { Logo } from "./Logo"
import { Navigation } from "./Navigation"
import { UserActions } from "./UserActions"

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-3 border-gray-200 dark:border-gray-800 lg:mb-8">
      <Logo />
      <Navigation />
      <UserActions className="flex items-center gap-3" />
    </header>
  )
}