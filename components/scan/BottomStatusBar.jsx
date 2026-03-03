"use client"

export default function BottomStatusBar({ statusBar }) {
  return (
    <div className="bg-white border-t border-gray-200 px-4 md:px-8 py-4">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Sub-Agents:</span>
            <span className="font-semibold text-gray-900">{statusBar.subAgents}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Parallel Executions:</span>
            <span className="font-semibold text-gray-900">{statusBar.parallelExecutions}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Operations:</span>
            <span className="font-semibold text-gray-900">{statusBar.operations}</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Critical:</span>
            <span className="font-semibold text-red-600">{statusBar.vulnerabilities.critical}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">High:</span>
            <span className="font-semibold text-orange-600">{statusBar.vulnerabilities.high}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Medium:</span>
            <span className="font-semibold text-yellow-600">{statusBar.vulnerabilities.medium}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Low:</span>
            <span className="font-semibold text-green-600">{statusBar.vulnerabilities.low}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
