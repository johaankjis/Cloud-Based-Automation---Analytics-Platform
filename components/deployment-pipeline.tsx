"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, Circle, XCircle, Clock, Play } from "lucide-react"

const pipelineStages = [
  { name: "Source", status: "completed", duration: "2s" },
  { name: "Build", status: "completed", duration: "45s" },
  { name: "Test", status: "completed", duration: "1m 12s" },
  { name: "Security Scan", status: "in-progress", duration: "23s", progress: 68 },
  { name: "Deploy", status: "pending", duration: "-" },
  { name: "Verify", status: "pending", duration: "-" },
]

const recentPipelines = [
  { id: "#1247", branch: "main", trigger: "Push", status: "success", time: "5m ago" },
  { id: "#1246", branch: "develop", trigger: "Manual", status: "success", time: "1h ago" },
  { id: "#1245", branch: "feature/ui", trigger: "PR", status: "failed", time: "2h ago" },
]

export function DeploymentPipeline() {
  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Active Pipeline</h2>
          <p className="text-sm text-muted-foreground">Production deployment in progress</p>
        </div>
        <Badge variant="secondary" className="text-xs">
          Run #1247
        </Badge>
      </div>

      <div className="mb-6 space-y-4">
        {pipelineStages.map((stage, index) => (
          <div key={stage.name} className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2">
              {stage.status === "completed" && <CheckCircle2 className="h-5 w-5 text-accent" />}
              {stage.status === "in-progress" && <Clock className="h-5 w-5 animate-pulse text-primary" />}
              {stage.status === "failed" && <XCircle className="h-5 w-5 text-destructive" />}
              {stage.status === "pending" && <Circle className="h-5 w-5 text-muted-foreground" />}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">{stage.name}</p>
                  <p className="text-xs text-muted-foreground">Duration: {stage.duration}</p>
                </div>
                <Badge
                  variant={
                    stage.status === "completed" ? "default" : stage.status === "failed" ? "destructive" : "secondary"
                  }
                  className="text-xs capitalize"
                >
                  {stage.status}
                </Badge>
              </div>
              {stage.status === "in-progress" && stage.progress && (
                <div className="mt-2">
                  <Progress value={stage.progress} className="h-1.5" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-foreground">Recent Pipelines</h3>
          <Button variant="ghost" size="sm">
            View All
          </Button>
        </div>
        <div className="space-y-2">
          {recentPipelines.map((pipeline) => (
            <div
              key={pipeline.id}
              className="flex items-center justify-between rounded-lg border border-border bg-card p-3"
            >
              <div className="flex items-center gap-3">
                {pipeline.status === "success" ? (
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                ) : (
                  <XCircle className="h-4 w-4 text-destructive" />
                )}
                <div>
                  <p className="text-sm font-medium text-foreground">{pipeline.id}</p>
                  <p className="text-xs text-muted-foreground">
                    {pipeline.branch} • {pipeline.trigger}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-xs text-muted-foreground">{pipeline.time}</p>
                <Button variant="ghost" size="sm">
                  <Play className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
