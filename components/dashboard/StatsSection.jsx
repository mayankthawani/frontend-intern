"use client"

import { TrendingUp, TrendingDown, AlertCircle, AlertTriangle, AlertOctagon, Info } from "lucide-react"

const severityIcons = {
  critical: { icon: AlertOctagon, color: "text-red-500", bgColor: "bg-red-50" },
  high: { icon: AlertTriangle, color: "text-orange-500", bgColor: "bg-orange-50" },
  medium: { icon: AlertCircle, color: "text-yellow-500", bgColor: "bg-yellow-50" },
  low: { icon: Info, color: "text-blue-500", bgColor: "bg-blue-50" }
}

export default function StatsSection({ stats, isLoading }) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-pulse">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-card rounded-xl p-6 border border-border">
            <div className="h-4 bg-muted rounded w-24 mb-4"></div>
            <div className="h-10 bg-muted rounded w-16 mb-2"></div>
            <div className="h-3 bg-muted rounded w-full"></div>
          </div>
        ))}
      </div>
    )
  }

  const statsArray = [
    { key: "critical", label: "Critical Severity", ...stats.critical },
    { key: "high", label: "High Severity", ...stats.high },
    { key: "medium", label: "Medium Severity", ...stats.medium },
    { key: "low", label: "Low Severity", ...stats.low }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statsArray.map((stat) => {
        const { icon: Icon, color, bgColor } = severityIcons[stat.key]
        const isIncreasing = stat.trend === "up"

        return (
          <div
            key={stat.key}
            className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow duration-300"
            role="region"
            aria-label={`${stat.label} statistics`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-muted-foreground">{stat.label}</h3>
              <div className={`p-2 rounded-lg ${bgColor}`}>
                <Icon className={`w-5 h-5 ${color}`} aria-hidden="true" />
              </div>
            </div>
            
            <div className="mb-2">
              <span className="text-4xl font-bold text-foreground">{stat.count}</span>
            </div>
            
            <div className="flex items-center gap-1 text-sm">
              {isIncreasing ? (
                <TrendingUp className="w-4 h-4 text-red-500" aria-label="Trending up" />
              ) : (
                <TrendingDown className="w-4 h-4 text-green-500" aria-label="Trending down" />
              )}
              <span className={isIncreasing ? "text-red-600" : "text-green-600"}>
                {stat.change}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
