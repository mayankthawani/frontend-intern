"use client"

import { useState } from "react"
import { Search, Filter, Columns, Plus, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export default function Toolbar({ 
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  visibleColumns,
  onVisibleColumnsChange,
  onNewScan 
}) {
  const { toast } = useToast()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [newScanName, setNewScanName] = useState("")
  const [newScanType, setNewScanType] = useState("")

  const handleCreateScan = () => {
    if (!newScanName.trim()) {
      toast({
        title: "Error",
        description: "Please enter a scan name",
        variant: "destructive"
      })
      return
    }

    const newScan = {
      id: Date.now(),
      name: newScanName,
      type: newScanType || "Full Scan",
      status: "Scheduled",
      progress: 0,
      vulnerabilities: { critical: 0, high: 0, medium: 0, low: 0 },
      lastScan: "Just now"
    }

    onNewScan(newScan)
    
    toast({
      title: "Scan created",
      description: `"${newScanName}" has been scheduled successfully`,
    })

    // Reset and close
    setNewScanName("")
    setNewScanType("")
    setIsDialogOpen(false)
  }

  const statusOptions = [
    { value: "all", label: "All Scans" },
    { value: "completed", label: "Completed" },
    { value: "failed", label: "Failed" },
    { value: "scheduled", label: "Scheduled" }
  ]

  const columnOptions = [
    { key: "name", label: "Scan Name" },
    { key: "type", label: "Type" },
    { key: "status", label: "Status" },
    { key: "progress", label: "Progress" },
    { key: "vulnerability", label: "Vulnerability" },
    { key: "lastScan", label: "Last Scan" }
  ]

  return (
    <>
      <div className="flex items-center justify-between gap-4 flex-wrap">
        {/* Search */}
        <div className="flex-1 min-w-[250px] max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" aria-hidden="true" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search scans by name or type..."
              className="w-full pl-10 pr-4 py-2.5 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-background text-foreground"
              aria-label="Search scans"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Filter Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                aria-label="Filter results"
              >
                <Filter className="w-4 h-4" aria-hidden="true" />
                <span>Filter</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {statusOptions.map((option) => (
                <DropdownMenuItem
                  key={option.value}
                  onClick={() => onStatusFilterChange(option.value)}
                  className="flex items-center justify-between cursor-pointer"
                >
                  <span>{option.label}</span>
                  {statusFilter === option.value && (
                    <Check className="w-4 h-4 text-teal-600" />
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* Column Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                aria-label="Toggle columns"
              >
                <Columns className="w-4 h-4" aria-hidden="true" />
                <span>Column</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel>Toggle Columns</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {columnOptions.map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.key}
                  checked={visibleColumns[column.key]}
                  onCheckedChange={(checked) => 
                    onVisibleColumnsChange({ ...visibleColumns, [column.key]: checked })
                  }
                >
                  {column.label}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* New Scan Button */}
          <Button 
            onClick={() => setIsDialogOpen(true)}
            className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white"
            aria-label="Create new scan"
          >
            <Plus className="w-4 h-4" aria-hidden="true" />
            <span>New scan</span>
          </Button>
        </div>
      </div>

      {/* New Scan Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Scan</DialogTitle>
            <DialogDescription>
              Schedule a new security scan for your project
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label htmlFor="scanName" className="text-sm font-medium">
                Scan Name <span className="text-red-500">*</span>
              </label>
              <Input
                id="scanName"
                value={newScanName}
                onChange={(e) => setNewScanName(e.target.value)}
                placeholder="e.g., Production API Scan"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="scanType" className="text-sm font-medium">
                Scan Type
              </label>
              <Input
                id="scanType"
                value={newScanType}
                onChange={(e) => setNewScanType(e.target.value)}
                placeholder="e.g., Full Scan, Quick Scan"
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button 
              onClick={handleCreateScan}
              className="bg-teal-500 hover:bg-teal-600 text-white"
            >
              Create Scan
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
