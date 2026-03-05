"use client"

import SeverityBadge from "@/components/ui/SeverityBadge"

export default function FindingPanel({ findings = [] }) {
  const severityColors = {
    critical: "border-l-red-500",
    high: "border-l-orange-500",
    medium: "border-l-yellow-500",
    low: "border-l-green-500"
  }

  const severityBadgeVariants = {
    critical: { bg: "bg-red-100", text: "text-red-700" },
    high: { bg: "bg-orange-100", text: "text-orange-700" },
    medium: { bg: "bg-yellow-100", text: "text-yellow-700" },
    low: { bg: "bg-green-100", text: "text-green-700" }
  }

  return (
    <div className="bg-card rounded-xl border border-border flex flex-col h-full">
      <div className="border-b border-border p-4">
        <h3 className="font-semibold text-foreground">Finding Log</h3>
      </div>

      <div className="flex-1 overflow-auto p-4">
        <div className="space-y-3">
          {findings.length > 0 ? (
            findings.map((finding) => {
              const variant = severityBadgeVariants[finding.severity]
              return (
                <div
                  key={finding.id}
                  className={`border-l-4 rounded-lg p-4 ${severityColors[finding.severity]}`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold uppercase ${variant.bg} ${variant.text}`}
                    >
                      {finding.severity}
                    </span>
                    <span className="text-xs text-muted-foreground">{finding.timestamp}</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {finding.title}
                  </h4>
                  <p className="text-sm text-teal-600 font-mono mb-2">
                    {finding.endpoint}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {finding.description}
                  </p>
                </div>
              )
            })
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No findings detected yet</p>
              <p className="text-sm text-muted-foreground mt-1">
                Vulnerabilities will appear here as they are discovered
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
