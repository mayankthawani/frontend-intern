"use client"

export default function BottomStatusBar({ statusBar }) {
  return (
    <div className="bg-card border-t border-border px-4 md:px-8 py-4">
      <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Sub-Agents:</span>
            <span className="font-semibold text-foreground">{statusBar.subAgents}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Parallel Executions:</span>
            <span className="font-semibold text-foreground">{statusBar.parallelExecutions}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Operations:</span>
            <span className="font-semibold text-foreground">{statusBar.operations}</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Critical:</span>
            <span className="font-semibold text-red-600">{statusBar.critical}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">High:</span>
            <span className="font-semibold text-orange-600">{statusBar.high}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Medium:</span>
            <span className="font-semibold text-yellow-600">{statusBar.medium}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Low:</span>
            <span className="font-semibold text-green-600">{statusBar.vulnerabilities.low}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
