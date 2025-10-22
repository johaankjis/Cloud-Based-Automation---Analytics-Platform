"use client"

import { DashboardHeader } from "@/components/dashboard-header"
import { SecurityCompliance } from "@/components/security-compliance"
import { SecurityDashboard } from "@/components/security-dashboard"

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-6 space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Security & Compliance</h1>
          <p className="text-muted-foreground">Monitor security posture and compliance status</p>
        </div>
        <SecurityDashboard />
        <SecurityCompliance />
      </main>
    </div>
  )
}
