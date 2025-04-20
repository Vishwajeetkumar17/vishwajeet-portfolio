import type React from "react"
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"
interface TechIconProps extends HTMLAttributes<HTMLDivElement> {
  name: string
  icon: React.ReactNode
}

export function TechIcon({ name, icon, className, ...props }: TechIconProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center gap-2 group", className)} {...props}>
      <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/30 transition-colors duration-300">
        {icon}
      </div>
      <span className="text-xs text-gray-600 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
        {name}
      </span>
    </div>
  )
}
