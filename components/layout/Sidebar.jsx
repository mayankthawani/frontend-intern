"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  FolderKanban, 
  ScanSearch, 
  Calendar, 
  Bell, 
  Settings, 
  HeadphonesIcon,
  X 
} from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Projects", icon: FolderKanban, href: "/projects" },
  { name: "Scans", icon: ScanSearch, href: "/scans" },
  { name: "Schedule", icon: Calendar, href: "/schedule" },
  { name: "Notifications", icon: Bell, href: "/notifications" },
  { name: "Settings", icon: Settings, href: "/settings" },
  { name: "Support", icon: HeadphonesIcon, href: "/support" }
]

export default function Sidebar({ isOpen, onClose }) {
  const pathname = usePathname()
   
  const { setTheme } = useTheme()

  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 bg-card border-r border-border flex flex-col
        transform transition-transform duration-300 ease-in-out
        lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
      {/* Logo */}
      <div className="p-6 border-b border-border flex items-center justify-between">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center">
            <span className="w-4 h-4 rounded-full bg-card items-center justify-center"></span>
          </div>
          <span className="font-semibold text-xl text-teal-500">aps</span>
        </Link>
        {/* Close button for mobile */}
        <button
          onClick={onClose}
          className="lg:hidden p-2 hover:bg-accent rounded-lg transition-colors"
          aria-label="Close sidebar"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4" aria-label="Main navigation">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname?.startsWith(item.href + "/")
            const Icon = item.icon
            
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-teal-500/10 text-teal-500"
                      : "text-foreground hover:bg-accent"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                  <span>{item.name}</span>
                </Link>
                {item.name === "Schedule" && (
                  <Separator className="my-2" />
                )}
              </li>
            )
          })}
        </ul>
      </nav>
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

      {/* User Profile */}
      <div className="p-4 border-t border-border">
        <button 
          className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-accent transition-colors"
          aria-label="User profile"
        >
          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center overflow-hidden">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin" 
              alt="User avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 text-left">
            <p className="text-sm font-medium text-foreground">admin@aps.com</p>
            <p className="text-xs text-muted-foreground">Security Lead</p>
          </div>
        </button>
      </div>
    </aside>
    </>
  )
}

