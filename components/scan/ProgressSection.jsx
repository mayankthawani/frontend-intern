"use client"

import ProgressCircle from "@/components/ui/ProgressCircle"
import StepTracker from "@/components/ui/StepTracker"

export default function ProgressSection({ progress, status, steps, metadata }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-8">
      <div className="flex flex-col sm:flex-row items-start gap-8">
        {/* Progress Circle */}
        <div className="flex-shrink-0 mx-auto sm:mx-0">
          <ProgressCircle progress={progress} status={status} />
        </div>

        {/* Step Tracker */}
        <div className="flex-1 w-full">
          <StepTracker steps={steps} />
        </div>
      </div>

      {/* Metadata Row */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 pt-6 border-t border-gray-200">
        <div>
          <span className="text-xs text-gray-500 block mb-1">Scan Type</span>
          <span className="text-sm font-medium text-gray-900">{metadata.scanType}</span>
        </div>
        <div>
          <span className="text-xs text-gray-500 block mb-1">Targets</span>
          <span className="text-sm font-medium text-gray-900">{metadata.target}</span>
        </div>
        <div>
          <span className="text-xs text-gray-500 block mb-1">Started At</span>
          <span className="text-sm font-medium text-gray-900">{metadata.startedAt}</span>
        </div>
        <div>
          <span className="text-xs text-gray-500 block mb-1">Credentials</span>
          <span className="text-sm font-medium text-gray-900">{metadata.credentials}</span>
        </div>
        <div>
          <span className="text-xs text-gray-500 block mb-1">Files</span>
          <span className="text-sm font-medium text-gray-900">{metadata.files}</span>
        </div>
        <div>
          <span className="text-xs text-gray-500 block mb-1">Checklists</span>
          <span className="text-sm font-medium text-gray-900">{metadata.checklists}</span>
        </div>
      </div>
    </div>
  )
}
