"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ScanHeader({ scanName = "New Scan" }) {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-10">
      <div className="px-4 md:px-8 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-1">
              <a href="#" className="hover:text-foreground">Scan</a>
              <span>/</span>
              <a href="#" className="hover:text-foreground">Private Assets</a>
              <span>/</span>
              <span className="text-teal-600 font-medium">{scanName}</span>
            </nav>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <Button
              variant="outline"
              className="flex items-center gap-2"
              aria-label="Export report"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Export Report</span>
            </Button>
            <Button
              className="bg-red-600 hover:bg-red-700 text-white"
              aria-label="Stop current scan"
            >
              Stop Scan
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
