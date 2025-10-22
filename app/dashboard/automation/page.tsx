"use client"

import { DashboardHeader } from "@/components/dashboard-header"
import { WorkflowBuilder } from "@/components/workflow-builder"
import { TriggerManagement } from "@/components/trigger-management"
import { PipelineConfiguration } from "@/components/pipeline-configuration"

export default function AutomationPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-6 space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Automation</h1>
          <p className="text-muted-foreground">Build and manage automated workflows and pipelines</p>
        </div>
        <WorkflowBuilder />
        <div className="grid gap-6 lg:grid-cols-2">
          <TriggerManagement />
          <PipelineConfiguration />
        </div>
      </main>
    </div>
  )
}
