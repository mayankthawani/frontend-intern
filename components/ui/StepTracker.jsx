"use client"

import { Check } from "lucide-react"

export default function StepTracker({ steps = [] }) {
  return (
    <div className="flex items-center justify-between gap-2 w-full">
      {steps.map((step, index) => {
        const isCompleted = step.completed
        const isActive = step.active
        const isLast = index === steps.length - 1

        return (
          <div key={step.id} className="flex items-center flex-1">
            <div className="flex flex-col items-center gap-2">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  isCompleted
                    ? "bg-teal-500 text-white"
                    : isActive
                    ? "bg-teal-500 text-white"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {isCompleted ? (
                  <Check className="w-6 h-6" />
                ) : (
                  <div className="w-2 h-2 rounded-full bg-current" />
                )}
              </div>
              <span
                className={`text-xs font-medium ${
                  isActive ? "text-teal-600" : "text-muted-foreground"
                }`}
              >
                {step.label}
              </span>
            </div>
            {!isLast && (
              <div
                className={`flex-1 h-0.5 mx-2 ${
                  isCompleted ? "bg-teal-500" : "bg-border"
                }`}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
