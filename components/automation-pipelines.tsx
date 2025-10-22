"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock, AlertCircle } from "lucide-react"

const pipelines = [
  {
    name: "Data Processing Pipeline",
    status: "running",
    lastRun: "2 minutes ago",
    duration: "1.2s",
    success: 98.5,
  },
  {
    name: "ETL Transformation",
    status: "completed",
    lastRun: "15 minutes ago",
    duration: "3.8s",
    success: 99.2,
  },
  {
    name: "Analytics Aggregation",
    status: "running",
    lastRun: "5 minutes ago",
    duration: "2.1s",
    success: 97.8,
  },
  {
    name: "Report Generation",
    status: "pending",
    lastRun: "1 hour ago",
    duration: "4.5s",
    success: 96.4,
  },
]

export function AutomationPipelines() {
  return (
    <Card className="p-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">Automation Pipelines</h2>
        <Badge variant="secondary" className="text-xs">
          4 Active
        </Badge>
      </div>
      <div className="space-y-4">
        {pipelines.map((pipeline) => (
          <div
            key={pipeline.name}
            className="flex items-center justify-between rounded-lg border border-border bg-card p-4"
          >
            <div className="flex items-center gap-3">
              {pipeline.status === "completed" && <CheckCircle2 className="h-5 w-5 text-accent" />}
              {pipeline.status === "running" && <Clock className="h-5 w-5 animate-pulse text-primary" />}
              {pipeline.status === "pending" && <AlertCircle className="h-5 w-5 text-muted-foreground" />}
              <div>
                <p className="font-medium text-foreground">{pipeline.name}</p>
                <p className="text-xs text-muted-foreground">
                  Last run: {pipeline.lastRun} • {pipeline.duration}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-foreground">{pipeline.success}%</p>
              <p className="text-xs text-muted-foreground">Success rate</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
