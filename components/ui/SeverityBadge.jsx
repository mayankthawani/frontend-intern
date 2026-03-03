"use client"

export default function SeverityBadge({ severity, count }) {
  const styles = {
    critical: "bg-red-500 hover:bg-red-600",
    high: "bg-orange-500 hover:bg-orange-600",
    medium: "bg-yellow-500 hover:bg-yellow-600",
    low: "bg-green-500 hover:bg-green-600"
  }

  const labels = {
    critical: "Critical",
    high: "High",
    medium: "Medium", 
    low: "Low"
  }

  return (
    <span 
      className={`inline-flex items-center justify-center w-7 h-7 rounded text-white text-sm font-bold transition-colors ${styles[severity]}`}
      title={`${labels[severity]}: ${count}`}
      aria-label={`${labels[severity]} severity: ${count} issues`}
    >
      {count}
    </span>
  )
}
