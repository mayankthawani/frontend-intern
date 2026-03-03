"use client"

import { useState, useEffect, useMemo } from "react"
import { useRouter } from "next/navigation"
import StatsSection from "@/components/dashboard/StatsSection"
import Toolbar from "@/components/dashboard/Toolbar"
import ScanTable from "@/components/dashboard/ScanTable"
import { getDashboardData } from "@/lib/dashboard-data"
import { RefreshCw, Download } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function DashboardPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  
  // Search and Filter state
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  
  // Column visibility state
  const [visibleColumns, setVisibleColumns] = useState({
    name: true,
    type: true,
    status: true,
    progress: true,
    vulnerability: true,
    lastScan: true
  })

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    setIsLoading(true)
    try {
      const dashboardData = await getDashboardData()
      setData(dashboardData)
    } catch (error) {
      console.error("Failed to load dashboard data:", error)
    } finally {
      setIsLoading(false)
    }
  }

  // Filter scans based on search and status filter
  const filteredScans = useMemo(() => {
    if (!data?.scans) return []
    
    let filtered = data.scans
    
    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(scan => 
        scan.name.toLowerCase().includes(query) ||
        scan.type.toLowerCase().includes(query)
      )
    }
    
    // Apply status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter(scan => 
        scan.status.toLowerCase() === statusFilter.toLowerCase()
      )
    }
    
    return filtered
  }, [data?.scans, searchQuery, statusFilter])

  const handleNewScan = (newScan) => {
    // Add new scan to the data
    if (data) {
      setData({
        ...data,
        scans: [newScan, ...data.scans]
      })
    }
  }

  const handleExport = () => {
    console.log("Export report")
    toast({
      title: "Export started",
      description: "Your report is being generated...",
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="px-4 md:px-8 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-2xl font-bold text-gray-900">Scan</h1>
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500">
                  <span>/</span>
                  <a href="#" className="hover:text-gray-700">Private Assets</a>
                  <span>/</span>
                  <a href="#" className="text-teal-600 font-medium">New Scan</a>
                </nav>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">Org:</span>
                  <span className="font-medium text-gray-900">Project X</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">Owner:</span>
                  <span className="font-medium text-gray-900">Nemnagiri</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">Total Scans:</span>
                  <span className="font-medium text-gray-900">100</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">Scheduled:</span>
                  <span className="font-medium text-gray-900">1000</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">Rescans:</span>
                  <span className="font-medium text-gray-900">100</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">Failed Scans:</span>
                  <span className="font-medium text-gray-900">100</span>
                </div>
                <div className="flex items-center gap-2 text-teal-600">
                  <RefreshCw className="w-4 h-4" />
                  <span className="font-medium">10 mins ago</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <button
                onClick={handleExport}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                aria-label="Export report"
              >
                <Download className="w-4 h-4" />
                Export Report
              </button>
              <button
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
                aria-label="Stop current scan"
              >
                Stop Scan
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 md:px-8 py-6">
        <div className="space-y-6">
          {/* Stats Section */}
          <StatsSection stats={data?.stats || {}} isLoading={isLoading} />

          {/* Toolbar */}
          <Toolbar 
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            statusFilter={statusFilter}
            onStatusFilterChange={setStatusFilter}
            visibleColumns={visibleColumns}
            onVisibleColumnsChange={setVisibleColumns}
            onNewScan={handleNewScan}
          />

          {/* Scan Table */}
          <ScanTable 
            scans={filteredScans} 
            isLoading={isLoading}
            visibleColumns={visibleColumns}
          />
        </div>
      </main>
    </div>
  )
}
