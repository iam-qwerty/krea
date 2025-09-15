import { ChevronDown } from "lucide-react"

export function Logo() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 bg-gray-900 dark:bg-white rounded-md flex items-center justify-center">
          <span className="text-white dark:text-black font-bold text-sm">K</span>
        </div>
      </div>
      <div className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
        <span className="text-sm text-gray-700 dark:text-white">benevolentmimblebat</span>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </div>
    </div>
  )
}