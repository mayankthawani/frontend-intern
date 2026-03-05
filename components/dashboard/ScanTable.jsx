"use client"

import ScanRow from "./ScanRow"

export default function ScanTable({ scans, isLoading, visibleColumns }) {
  if (isLoading) {
    return (
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50 border-b border-border">
              <tr>
                {visibleColumns.name && (
                  <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Scan Name
                  </th>
                )}
                {visibleColumns.type && (
                  <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Type
                  </th>
                )}
                {visibleColumns.status && (
                  <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Status
                  </th>
                )}
                {visibleColumns.progress && (
                  <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Progress
                  </th>
                )}
                {visibleColumns.vulnerability && (
                  <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Vulnerability
                  </th>
                )}
                {visibleColumns.lastScan && (
                  <th className="px-6 py-3 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Last Scan
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="animate-pulse">
                  {visibleColumns.name && (
                    <td className="px-6 py-4">
                      <div className="h-4 bg-muted rounded w-32"></div>
                    </td>
                  )}
                  {visibleColumns.type && (
                    <td className="px-6 py-4">
                      <div className="h-4 bg-muted rounded w-20"></div>
                    </td>
                  )}
                  {visibleColumns.status && (
                    <td className="px-6 py-4">
                      <div className="h-7 bg-muted rounded w-24"></div>
                    </td>
                  )}
                  {visibleColumns.progress && (
                    <td className="px-6 py-4">
                      <div className="h-4 bg-muted rounded"></div>
                    </td>
                  )}
                  {visibleColumns.vulnerability && (
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <div className="h-7 w-7 bg-muted rounded"></div>
                        <div className="h-7 w-7 bg-muted rounded"></div>
                        <div className="h-7 w-7 bg-muted rounded"></div>
                      </div>
                    </td>
                  )}
                  {visibleColumns.lastScan && (
                    <td className="px-6 py-4">
                      <div className="h-4 bg-muted rounded w-16 ml-auto"></div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full" role="table" aria-label="Scan results table">
          <thead className="bg-muted/50 border-b border-border">
            <tr role="row">
              {visibleColumns.name && (
                <th 
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider"
                >
                  Scan Name
                </th>
              )}
              {visibleColumns.type && (
                <th 
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider"
                >
                  Type
                </th>
              )}
              {visibleColumns.status && (
                <th 
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider"
                >
                  Status
                </th>
              )}
              {visibleColumns.progress && (
                <th 
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider"
                >
                  Progress
                </th>
              )}
              {visibleColumns.vulnerability && (
                <th 
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider"
                >
                  Vulnerability
                </th>
              )}
              {visibleColumns.lastScan && (
                <th 
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider"
                >
                  Last Scan
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-card">
            {scans.map((scan) => (
              <ScanRow key={scan.id} scan={scan} visibleColumns={visibleColumns} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
