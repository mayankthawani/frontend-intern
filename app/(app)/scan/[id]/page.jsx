"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import ScanHeader from "@/components/scan/ScanHeader"
import ProgressSection from "@/components/scan/ProgressSection"
import ConsolePanel from "@/components/scan/ConsolePanel"
import FindingPanel from "@/components/scan/FindingPanel"
import BottomStatusBar from "@/components/scan/BottomStatusBar"
import { getScanData } from "@/lib/scan-data"

export default function ScanDetailPage() {
  const params = useParams()
  const [scanData, setScanData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadScanData()
  }, [params.id])

  const loadScanData = async () => {
    setIsLoading(true)
    try {
      const data = await getScanData(params.id)
      setScanData(data)
    } catch (error) {
      console.error("Failed to load scan data:", error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
      </div>
    )
  }

  if (!scanData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Scan not found</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <ScanHeader scanName={scanData.name} />

      {/* Main Content */}
      <main className="flex-1 px-4 md:px-8 py-6 pb-0">
        <div className="space-y-6">
          {/* Progress Section */}
          <ProgressSection
            progress={scanData.progress}
            status={scanData.status}
            steps={scanData.steps}
            metadata={{
              scanType: scanData.scanType,
              target: scanData.target,
              startedAt: scanData.startedAt,
              credentials: scanData.credentials,
              files: scanData.files,
              checklists: scanData.checklists
            }}
          />

          {/* Split Panel Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-auto lg:h-[calc(100vh-500px)] min-h-[500px]">
            {/* Console Panel */}
            <ConsolePanel
              activityLogs={scanData.activityLogs}
              verificationLoops={[]}
            />

            {/* Finding Panel */}
            <FindingPanel findings={scanData.findings} />
          </div>
        </div>
      </main>

      {/* Bottom Status Bar */}
      <BottomStatusBar statusBar={scanData.statusBar} />
    </div>
  )
}
