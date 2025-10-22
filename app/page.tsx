import { DashboardHeader } from "@/components/dashboard-header"
import { MetricsGrid } from "@/components/metrics-grid"
import { AutomationPipelines } from "@/components/automation-pipelines"
import { DeploymentStatus } from "@/components/deployment-status"
import { SecurityCompliance } from "@/components/security-compliance"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-6 space-y-6">
        <MetricsGrid />
        <div className="grid gap-6 lg:grid-cols-2">
          <AutomationPipelines />
          <DeploymentStatus />
        </div>
        <SecurityCompliance />
      </main>
    </div>
  )
}
