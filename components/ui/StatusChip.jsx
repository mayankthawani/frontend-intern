"use client"

export default function StatusChip({ status }) {
  const styles = {
    completed: "bg-green-100 text-green-700 border-green-200",
    scheduled: "bg-gray-100 text-gray-700 border-gray-200",
    failed: "bg-red-100 text-red-700 border-red-200"
  }

  return (
    <span 
      className={`inline-flex items-center px-3 py-1 rounded-md text-sm font-medium border ${styles[status] || styles.scheduled}`}
      role="status"
      aria-label={`Status: ${status}`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  )
}
