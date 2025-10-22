"use client"

import { DashboardHeader } from "@/components/dashboard-header"
import { DeploymentStatus } from "@/components/deployment-status"
import { DeploymentPipeline } from "@/components/deployment-pipeline"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Activity, Clock } from "lucide-react"

export default function DeploymentsPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-6 space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Deployments</h1>
          <p className="text-muted-foreground">Monitor and manage your CI/CD deployments</p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Success Rate</p>
                <p className="text-2xl font-bold text-foreground">98.5%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-accent" />
            </div>
            <div className="mt-2 flex items-center gap-1 text-xs text-accent">
              <TrendingUp className="h-3 w-3" />
              <span>+2.3% from last week</span>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Duration</p>
                <p className="text-2xl font-bold text-foreground">2m 15s</p>
              </div>
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <div className="mt-2 flex items-center gap-1 text-xs text-accent">
              <TrendingDown className="h-3 w-3" />
              <span>-15s faster</span>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Pipelines</p>
                <p className="text-2xl font-bold text-foreground">3</p>
              </div>
              <Activity className="h-8 w-8 text-primary" />
            </div>
            <div className="mt-2">
              <Badge variant="secondary" className="text-xs">
                2 in progress
              </Badge>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Deploys</p>
                <p className="text-2xl font-bold text-foreground">1,247</p>
              </div>
              <TrendingUp className="h-8 w-8 text-accent" />
            </div>
            <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
              <span>This month</span>
            </div>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <DeploymentPipeline />
          <DeploymentStatus />
        </div>
      </main>
    </div>
  )
}
