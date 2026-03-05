# Security Scanner Dashboard

A modern dashboard for managing and monitoring security scans.

## Quick Start

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000`

## What's Inside

- **Dashboard** - Overview of all security scans with stats
- **Scans Page** - List and grid views of scan results
- **Scan Details** - Live console logs and findings for each scan
- **Dark Mode** - Toggle between light/dark themes (check the sidebar)

## Tech Stack

- Next.js 15
- Tailwind CSS
- shadcn/ui components
- next-themes for dark mode

## Project Structure

```
app/
  ├── (app)/           # Main app pages
  │   ├── dashboard/
  │   ├── scans/
  │   └── scan/[id]/
  └── login/
components/
  ├── dashboard/       # Dashboard components
  ├── scan/           # Scan detail components
  ├── layout/         # Sidebar, etc.
  └── ui/             # Reusable UI components
```

## Notes

The scan data is mocked for demo purposes. Theme toggle is in the sidebar bottom.
