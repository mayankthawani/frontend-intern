"use client"

export default function StatusChip({ status }) {
  const styles = {
    completed: "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800",
    scheduled: "bg-muted text-muted-foreground border-border",
    failed: "bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800"
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
