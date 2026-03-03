"use client"

export default function ProgressBar({ progress }) {
  return (
    <div className="flex items-center gap-3 w-full">
      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-teal-500 transition-all duration-500 ease-out rounded-full"
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
      <span className="text-sm font-medium text-gray-700 min-w-[45px]">{progress}%</span>
    </div>
  )
}
