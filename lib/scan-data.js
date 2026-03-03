// Mock data for active scan details

export const scanData = {
  id: "scan_001",
  name: "Production Security Scan",
  status: "running",
  progress: 0,
  currentStep: "spidering",
  scanType: "Grey Box",
  target: "google.com",
  startedAt: "Nov 22, 09:00AM",
  credentials: "2 Active",
  files: "Control.pdf",
  checklists: "40/350",
  
  steps: [
    { id: "spidering", label: "Spidering", completed: false, active: true },
    { id: "mapping", label: "Mapping", completed: false, active: false },
    { id: "testing", label: "Testing", completed: false, active: false },
    { id: "validating", label: "Validating", completed: false, active: false },
    { id: "reporting", label: "Reporting", completed: false, active: false }
  ],

  activityLogs: [
    {
      timestamp: "09:00:00",
      message: "I'll begin a systematic penetration test on helpdesk.democorp.com. Let me start with reconnaissance and network discovery.",
      type: "info"
    },
    {
      timestamp: "09:01:00",
      message: "Good! target is online. Now let me perform port scanning to identify running services.",
      type: "success"
    },
    {
      timestamp: "09:02:00",
      message: "Excellent reconnaissance results: helpdesk.democorp.com: Apache httpd 2.4.45 on port 80 (web server). Let me probe the web app to understand its architecture.",
      type: "info",
      highlights: [
        { text: "helpdesk.democorp.com", color: "teal" },
        { text: "Apache httpd 2.4.45", color: "purple" }
      ]
    },
    {
      timestamp: "09:03:00",
      message: "Great! I found a login page for a Help Desk Platform. I can see a useful comment: \"TODO: Delete the testing account (test:test)\". Let me test this credential. The login form uses /password/access. Let me follow that path and explore it.",
      type: "warning",
      highlights: [
        { text: "TODO: Delete the testing account (test:test)", color: "orange" },
        { text: "/password/access", color: "teal" }
      ]
    },
    {
      timestamp: "09:04:00",
      message: "The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to a /reset endpoint page. Let me try a different approach.",
      type: "error",
      highlights: [
        { text: "/password/test", color: "teal" }
      ]
    },
    {
      timestamp: "09:05:00",
      message: "It looks like I need to go back to /password/test. Let me check if there's a /api endpoint or look for other paths. Let me also try exploring with the test:test password directly on other endpoints.",
      type: "info",
      highlights: [
        { text: "/password/test", color: "teal" },
        { text: "test:test", color: "orange" }
      ]
    },
    {
      timestamp: "09:06:00",
      message: "Great! I can access the dashboard using the \"X-UserId: 10032\" header. The dashboard shows \"Welcome, John Doe\". This suggests an IDOR vulnerability - I can access any user's dashboard by just changing the X-UserId header. Let me explore more of the application...",
      type: "critical",
      highlights: [
        { text: "X-UserId: 10032", color: "blue" },
        { text: "IDOR vulnerability", color: "red" }
      ]
    }
  ],

  findings: [
    {
      id: "finding_001",
      severity: "critical",
      timestamp: "09:06:23",
      title: "SQL Injection in Authentication Endpoint",
      endpoint: "/api/users/profile",
      description: "Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access."
    },
    {
      id: "finding_002",
      severity: "high",
      timestamp: "09:05:14",
      title: "Unauthorized Access to User Metadata",
      endpoint: "/api/auth/login",
      description: "Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing."
    },
    {
      id: "finding_003",
      severity: "medium",
      timestamp: "09:04:23",
      title: "Ineffective Authentication Rate Limiting",
      endpoint: "/api/search",
      description: "No effective rate limit detected on login attempts. Automated brute-force attempts possible."
    }
  ],

  statusBar: {
    subAgents: 0,
    parallelExecutions: 2,
    operations: 1,
    vulnerabilities: {
      critical: 0,
      high: 0,
      medium: 0,
      low: 0
    }
  }
}

export async function getScanData(id) {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(scanData)
    }, 300)
  })
}
