"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ConsolePanel({ activityLogs = [], verificationLoops = [] }) {
  const [activeTab, setActiveTab] = useState("activity")

  const renderLogMessage = (log) => {
    if (!log.highlights || log.highlights.length === 0) {
      return <span>{log.message}</span>
    }

    let result = []
    let lastIndex = 0
    const message = log.message

    log.highlights.forEach((highlight, idx) => {
      const startIndex = message.indexOf(highlight.text, lastIndex)
      if (startIndex !== -1) {
        // Add text before highlight
        if (startIndex > lastIndex) {
          result.push(
            <span key={`text-${idx}`}>
              {message.substring(lastIndex, startIndex)}
            </span>
          )
        }
        // Add highlighted text
        const colorClasses = {
          teal: "text-teal-600 font-medium",
          orange: "text-orange-600 font-medium",
          purple: "text-purple-600 font-medium",
          blue: "text-blue-600 font-medium",
          red: "text-red-600 font-semibold"
        }
        result.push(
          <span key={`highlight-${idx}`} className={colorClasses[highlight.color] || ""}>
            {highlight.text}
          </span>
        )
        lastIndex = startIndex + highlight.text.length
      }
    })

    // Add remaining text
    if (lastIndex < message.length) {
      result.push(
        <span key="text-end">{message.substring(lastIndex)}</span>
      )
    }

    return <>{result}</>
  }

  return (
    <div className="bg-card rounded-xl border border-border flex flex-col h-full">
      <div className="border-b border-border p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <h3 className="font-semibold text-foreground">Live Scan Console</h3>
        </div>
        <span className="text-sm text-muted-foreground">Running...</span>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
        <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
          <TabsTrigger 
            value="activity" 
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-teal-600 data-[state=active]:bg-transparent"
          >
            Activity Log
          </TabsTrigger>
          <TabsTrigger 
            value="verification"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-teal-600 data-[state=active]:bg-transparent"
          >
            Verification Loops
          </TabsTrigger>
        </TabsList>

        <TabsContent value="activity" className="flex-1 overflow-auto p-4 m-0">
          <div className="font-mono text-xs space-y-3">
            {activityLogs.map((log, index) => (
              <div key={index} className="flex gap-3">
                <span className="text-muted-foreground flex-shrink-0">[{log.timestamp}]</span>
                <p className="text-foreground leading-relaxed">
                  {renderLogMessage(log)}
                </p>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="verification" className="flex-1 overflow-auto p-4 m-0">
          <div className="font-mono text-xs space-y-3">
            {verificationLoops.length > 0 ? (
              verificationLoops.map((log, index) => (
                <div key={index} className="flex gap-3">
                  <span className="text-muted-foreground flex-shrink-0">[{log.timestamp}]</span>
                  <p className="text-foreground">{log.message}</p>
                </div>
              ))
            ) : (
              <p className="text-muted-foreground text-center py-8">No verification loops yet</p>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
