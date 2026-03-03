export const statsData = {
  critical: { count: 86, change: "+2% increase than yesterday", trend: "up" },
  high: { count: 16, change: "+0.9% increase than yesterday", trend: "up" },
  medium: { count: 26, change: "+0.9% decrease than yesterday", trend: "down" },
  low: { count: 16, change: "+0.5% increase than yesterday", trend: "up" }
}

export const scansData = [
  {
    id: 1,
    name: "Web App Servers",
    type: "Greybox",
    status: "completed",
    progress: 100,
    vulnerabilities: { critical: 1, high: 2, medium: 3, low: 4 },
    lastScan: "4d ago"
  },
  {
    id: 2,
    name: "Web App Servers",
    type: "Greybox",
    status: "completed",
    progress: 100,
    vulnerabilities: { critical: 1, high: 2, medium: 3, low: 4 },
    lastScan: "4d ago"
  },
  {
    id: 3,
    name: "Web App Servers",
    type: "Greybox",
    status: "completed",
    progress: 100,
    vulnerabilities: { critical: 1, high: 2, medium: 3, low: 4 },
    lastScan: "4d ago"
  },
  {
    id: 4,
    name: "Web App Servers",
    type: "Greybox",
    status: "completed",
    progress: 100,
    vulnerabilities: { critical: 1, high: 2, medium: 3, low: 1 },
    lastScan: "4d ago"
  },
  {
    id: 5,
    name: "Web App Servers",
    type: "Greybox",
    status: "completed",
    progress: 100,
    vulnerabilities: { critical: 1, high: 2, medium: 3, low: 1 },
    lastScan: "4d ago"
  },
  {
    id: 6,
    name: "Web App Servers",
    type: "Greybox",
    status: "completed",
    progress: 100,
    vulnerabilities: { critical: 1, high: 2, medium: 3, low: 1 },
    lastScan: "4d ago"
  },
  {
    id: 7,
    name: "Web App Servers",
    type: "Greybox",
    status: "completed",
    progress: 100,
    vulnerabilities: { critical: 1, high: 2, medium: 3, low: 1 },
    lastScan: "4d ago"
  },
  {
    id: 8,
    name: "Web App Servers",
    type: "Greybox",
    status: "scheduled",
    progress: 100,
    vulnerabilities: { critical: 1, high: 2 },
    lastScan: "4d ago"
  },
  {
    id: 9,
    name: "Web App Servers",
    type: "Greybox",
    status: "scheduled",
    progress: 100,
    vulnerabilities: { critical: 1, high: 2 },
    lastScan: "4d ago"
  },
  {
    id: 10,
    name: "IoT Devices",
    type: "Blackbox",
    status: "failed",
    progress: 10,
    vulnerabilities: { critical: 1, high: 2, medium: 3, low: 1 },
    lastScan: "5d ago"
  },
  {
    id: 11,
    name: "Temp Data",
    type: "Blackbox",
    status: "failed",
    progress: 10,
    vulnerabilities: { critical: 1, high: 2, medium: 3, low: 1 },
    lastScan: "5d ago"
  }
]

// Simulated async data fetch
export async function getDashboardData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ stats: statsData, scans: scansData })
    }, 500)
  })
}
