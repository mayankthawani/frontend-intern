"use client"

import { useRouter } from "next/navigation"
import StatusChip from "@/components/ui/StatusChip"
import SeverityBadge from "@/components/ui/SeverityBadge"
import ProgressBar from "@/components/ui/ProgressBar"

export default function ScanRow({ scan, visibleColumns }) {
  const router = useRouter()

  const handleRowClick = () => {
    router.push(`/scan/${scan.id}`)
  }

  return (
    <tr 
      onClick={handleRowClick}
      className="hover:bg-gray-50 transition-colors cursor-pointer"
      role="row"
    >
      {visibleColumns.name && (
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="text-sm font-medium text-gray-900">{scan.name}</span>
        </td>
      )}
      
      {visibleColumns.type && (
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="text-sm text-gray-600">{scan.type}</span>
        </td>
      )}
      
      {visibleColumns.status && (
        <td className="px-6 py-4 whitespace-nowrap">
          <StatusChip status={scan.status} />
        </td>
      )}
      
      {visibleColumns.progress && (
        <td className="px-6 py-4">
          <ProgressBar progress={scan.progress} />
        </td>
      )}
      
      {visibleColumns.vulnerability && (
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
      )}
      
      {visibleColumns.lastScan && (
        <td className="px-6 py-4 whitespace-nowrap text-right">
          <span className="text-sm text-gray-500">{scan.lastScan}</span>
        </td>
      )}
    </tr>
  )
}
