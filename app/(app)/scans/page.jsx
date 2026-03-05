"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Search, Plus, Filter, Grid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import StatusChip from "@/components/ui/StatusChip"
import SeverityBadge from "@/components/ui/SeverityBadge"
import ProgressBar from "@/components/ui/ProgressBar"
import { getDashboardData } from "@/lib/dashboard-data"

export default function ScansPage() {
  const router = useRouter()
  const [scans, setScans] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState("list") // list or grid

  useEffect(() => {
    loadScans()
  }, [])

  const loadScans = async () => {
    setIsLoading(true)
    try {
      const data = await getDashboardData()
      setScans(data.scans)
    } catch (error) {
      console.error("Failed to load scans:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const filteredScans = scans.filter(scan => 
    scan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    scan.type.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleScanClick = (scanId) => {
    router.push(`/scan/${scanId}`)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Scans</h1>
              <p className="text-muted-foreground mt-1">View and manage all your security scans</p>
            </div>
            <Button 
              onClick={() => router.push('/dashboard')}
              className="bg-teal-500 hover:bg-teal-600 text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              New Scan
            </Button>
          </div>

          {/* Search and Filters */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search scans..."
                  className="w-full pl-10 pr-4 py-2.5 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-background text-foreground"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <div className="flex border border-gray-300 rounded-lg">
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 ${viewMode === "list" ? "bg-gray-100" : ""}`}
                >
                  <List className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 border-l ${viewMode === "grid" ? "bg-accent" : ""}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-8 py-6">
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
          </div>
        ) : viewMode === "list" ? (
          // List View
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Scan Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Progress
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Vulnerabilities
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Last Scan
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredScans.map((scan) => (
                  <tr
                    key={scan.id}
                    onClick={() => handleScanClick(scan.id)}
                    className="hover:bg-accent transition-colors cursor-pointer"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-foreground">{scan.name}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-muted-foreground">{scan.type}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatusChip status={scan.status} />
                    </td>
                    <td className="px-6 py-4">
                      <ProgressBar progress={scan.progress} />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {scan.vulnerabilities.critical > 0 && (
                          <SeverityBadge severity="critical" count={scan.vulnerabilities.critical} />
                        )}
                        {scan.vulnerabilities.high > 0 && (
                          <SeverityBadge severity="high" count={scan.vulnerabilities.high} />
                        )}
                        {scan.vulnerabilities.medium > 0 && (
                          <SeverityBadge severity="medium" count={scan.vulnerabilities.medium} />
                        )}
                        {scan.vulnerabilities.low > 0 && (
                          <SeverityBadge severity="low" count={scan.vulnerabilities.low} />
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <span className="text-sm text-muted-foreground">{scan.lastScan}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          // Grid View
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredScans.map((scan) => (
              <div
                key={scan.id}
                onClick={() => handleScanClick(scan.id)}
                className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{scan.name}</h3>
                    <p className="text-sm text-muted-foreground">{scan.type}</p>
                  </div>
                  <StatusChip status={scan.status} />
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{scan.progress}%</span>
                    </div>
                    <ProgressBar progress={scan.progress} />
                  </div>

                  <div>
                    <span className="text-sm text-muted-foreground block mb-2">Vulnerabilities</span>
                    <div className="flex items-center gap-2 flex-wrap">
                      {scan.vulnerabilities.critical > 0 && (
                        <SeverityBadge severity="critical" count={scan.vulnerabilities.critical} />
                      )}
                      {scan.vulnerabilities.high > 0 && (
                        <SeverityBadge severity="high" count={scan.vulnerabilities.high} />
                      )}
                      {scan.vulnerabilities.medium > 0 && (
                        <SeverityBadge severity="medium" count={scan.vulnerabilities.medium} />
                      )}
                      {scan.vulnerabilities.low > 0 && (
                        <SeverityBadge severity="low" count={scan.vulnerabilities.low} />
                      )}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-border">
                    <span className="text-xs text-muted-foreground">Last scan: {scan.lastScan}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!isLoading && filteredScans.length === 0 && (
          <div className="text-center py-12 bg-card rounded-xl border border-border">
            <p className="text-muted-foreground">No scans found</p>
            <p className="text-sm text-muted-foreground mt-1">Try adjusting your search</p>
          </div>
        )}
      </main>
    </div>
  )
}
