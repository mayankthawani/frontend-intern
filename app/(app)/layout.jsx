"use client"

import { useState } from "react"
import Sidebar from "@/components/layout/Sidebar"
import { Menu } from "lucide-react"

export default function AppLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile header with hamburger */}
        <div className="lg:hidden bg-card border-b border-border px-4 py-3 sticky top-0 z-30">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 hover:bg-accent rounded-lg transition-colors"
            aria-label="Open sidebar"
          >
            <Menu className="w-6 h-6 text-foreground" />
          </button>
        </div>
        
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
