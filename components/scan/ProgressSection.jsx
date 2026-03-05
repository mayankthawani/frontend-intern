"use client"

import ProgressCircle from "@/components/ui/ProgressCircle"
import StepTracker from "@/components/ui/StepTracker"

export default function ProgressSection({ progress, status, steps, metadata }) {
  return (
    <div className="bg-card rounded-xl border border-border p-4 md:p-8">
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
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 pt-6 border-t border-border">
        <div>
          <span className="text-xs text-muted-foreground block mb-1">Scan Type</span>
          <span className="text-sm font-medium text-foreground">{metadata.scanType}</span>
        </div>
        <div>
          <span className="text-xs text-muted-foreground block mb-1">Targets</span>
          <span className="text-sm font-medium text-foreground">{metadata.target}</span>
        </div>
        <div>
          <span className="text-xs text-muted-foreground block mb-1">Started At</span>
          <span className="text-sm font-medium text-foreground">{metadata.startedAt}</span>
        </div>
        <div>
          <span className="text-xs text-muted-foreground block mb-1">Credentials</span>
          <span className="text-sm font-medium text-foreground">{metadata.credentials}</span>
        </div>
        <div>
          <span className="text-xs text-muted-foreground block mb-1">Files</span>
          <span className="text-sm font-medium text-foreground">{metadata.files}</span>
        </div>
        <div>
          <span className="text-xs text-muted-foreground block mb-1">Checklists</span>
          <span className="text-sm font-medium text-foreground">{metadata.checklists}</span>
        </div>
      </div>
    </div>
  )
}
