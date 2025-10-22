"use client"

import { Input } from "@/components/ui/input"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GitBranch, CheckCircle2, XCircle, Clock, ExternalLink, RotateCcw, Terminal, Activity } from "lucide-react"

const deployments = [
  {
    environment: "Production",
    branch: "main",
    commit: "a3f2c1d",
    status: "success",
    time: "5 minutes ago",
    duration: "2m 34s",
    url: "https://app.example.com",
    health: 100,
  },
  {
    environment: "Staging",
    branch: "develop",
    commit: "b7e9f2a",
    status: "success",
    time: "12 minutes ago",
    duration: "1m 58s",
    url: "https://staging.example.com",
    health: 98,
  },
  {
    environment: "Development",
    branch: "feature/analytics",
    commit: "c4d8e1b",
    status: "in-progress",
    time: "now",
    duration: "1m 12s",
    url: "https://dev.example.com",
    health: 95,
    progress: 65,
  },
  {
    environment: "Testing",
    branch: "hotfix/security",
    commit: "d9a2f3c",
    status: "failed",
    time: "1 hour ago",
    duration: "3m 45s",
    url: "https://test.example.com",
    health: 0,
  },
]

const deploymentLogs = [
  { time: "00:00", message: "Starting deployment...", type: "info" },
  { time: "00:15", message: "Building application...", type: "info" },
  { time: "00:45", message: "Running tests...", type: "info" },
  { time: "01:20", message: "All tests passed ✓", type: "success" },
  { time: "01:30", message: "Deploying to production...", type: "info" },
  { time: "02:34", message: "Deployment completed successfully", type: "success" },
]

const deploymentHistory = [
  { version: "v2.4.1", commit: "a3f2c1d", time: "5 minutes ago", status: "success" },
  { version: "v2.4.0", commit: "f8e2b9a", time: "2 hours ago", status: "success" },
  { version: "v2.3.9", commit: "c7d1a4e", time: "1 day ago", status: "success" },
  { version: "v2.3.8", commit: "b3f9e2c", time: "2 days ago", status: "failed" },
  { version: "v2.3.7", commit: "a1c8d5f", time: "3 days ago", status: "success" },
]

export function DeploymentStatus() {
  const [selectedDeployment, setSelectedDeployment] = useState(deployments[0])
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <Card className="p-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">CI/CD Deployments</h2>
        <Badge variant="secondary" className="text-xs">
          100% Automated
        </Badge>
      </div>
      <div className="space-y-4">
        {deployments.map((deployment) => (
          <div
            key={deployment.environment}
            className="flex items-center justify-between rounded-lg border border-border bg-card p-4"
          >
            <div className="flex flex-1 items-center gap-3">
              {deployment.status === "success" && <CheckCircle2 className="h-5 w-5 text-accent" />}
              {deployment.status === "in-progress" && <Clock className="h-5 w-5 animate-pulse text-primary" />}
              {deployment.status === "failed" && <XCircle className="h-5 w-5 text-destructive" />}
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-medium text-foreground">{deployment.environment}</p>
                  <Badge variant="outline" className="text-xs">
                    <GitBranch className="mr-1 h-3 w-3" />
                    {deployment.branch}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  {deployment.commit} • {deployment.time} • {deployment.duration}
                </p>
                {deployment.status === "in-progress" && deployment.progress && (
                  <div className="mt-2">
                    <Progress value={deployment.progress} className="h-1.5" />
                    <p className="mt-1 text-xs text-muted-foreground">{deployment.progress}% complete</p>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              {deployment.status !== "in-progress" && (
                <div className="text-right">
                  <div className="flex items-center gap-1">
                    <Activity className="h-3 w-3 text-muted-foreground" />
                    <p className="text-xs text-muted-foreground">Health</p>
                  </div>
                  <p
                    className={`text-sm font-medium ${
                      deployment.health >= 95
                        ? "text-accent"
                        : deployment.health >= 80
                          ? "text-primary"
                          : "text-destructive"
                    }`}
                  >
                    {deployment.health}%
                  </p>
                </div>
              )}
              <Badge
                variant={
                  deployment.status === "success"
                    ? "default"
                    : deployment.status === "failed"
                      ? "destructive"
                      : "secondary"
                }
                className="text-xs"
              >
                {deployment.status}
              </Badge>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSelectedDeployment(deployment)
                      setIsDialogOpen(true)
                    }}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl">
                  <DialogHeader>
                    <DialogTitle>{selectedDeployment.environment} Deployment Details</DialogTitle>
                    <DialogDescription>
                      {selectedDeployment.branch} • {selectedDeployment.commit}
                    </DialogDescription>
                  </DialogHeader>
                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList>
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="logs">Logs</TabsTrigger>
                      <TabsTrigger value="history">History</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="rounded-lg border border-border bg-muted/30 p-4">
                          <p className="text-xs text-muted-foreground">Status</p>
                          <p className="text-lg font-semibold text-foreground capitalize">
                            {selectedDeployment.status}
                          </p>
                        </div>
                        <div className="rounded-lg border border-border bg-muted/30 p-4">
                          <p className="text-xs text-muted-foreground">Duration</p>
                          <p className="text-lg font-semibold text-foreground">{selectedDeployment.duration}</p>
                        </div>
                        <div className="rounded-lg border border-border bg-muted/30 p-4">
                          <p className="text-xs text-muted-foreground">Environment</p>
                          <p className="text-lg font-semibold text-foreground">{selectedDeployment.environment}</p>
                        </div>
                        <div className="rounded-lg border border-border bg-muted/30 p-4">
                          <p className="text-xs text-muted-foreground">Health Score</p>
                          <p className="text-lg font-semibold text-foreground">{selectedDeployment.health}%</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-foreground">Deployment URL</p>
                        <div className="flex items-center gap-2">
                          <Input value={selectedDeployment.url} readOnly className="flex-1" />
                          <Button variant="outline" size="sm">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" className="flex-1 bg-transparent">
                          <RotateCcw className="mr-2 h-4 w-4" />
                          Rollback
                        </Button>
                        <Button className="flex-1">Redeploy</Button>
                      </div>
                    </TabsContent>

                    <TabsContent value="logs" className="space-y-4">
                      <div className="rounded-lg border border-border bg-muted/30 p-4">
                        <div className="mb-3 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Terminal className="h-4 w-4 text-primary" />
                            <p className="text-sm font-medium text-foreground">Deployment Logs</p>
                          </div>
                          <Button variant="outline" size="sm">
                            Download
                          </Button>
                        </div>
                        <div className="space-y-1 font-mono text-xs">
                          {deploymentLogs.map((log, index) => (
                            <div
                              key={index}
                              className={`flex gap-3 ${
                                log.type === "success"
                                  ? "text-accent"
                                  : log.type === "error"
                                    ? "text-destructive"
                                    : "text-muted-foreground"
                              }`}
                            >
                              <span className="text-muted-foreground">[{log.time}]</span>
                              <span>{log.message}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="history" className="space-y-4">
                      <div className="space-y-2">
                        {deploymentHistory.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between rounded-lg border border-border bg-card p-3"
                          >
                            <div className="flex items-center gap-3">
                              {item.status === "success" ? (
                                <CheckCircle2 className="h-4 w-4 text-accent" />
                              ) : (
                                <XCircle className="h-4 w-4 text-destructive" />
                              )}
                              <div>
                                <p className="text-sm font-medium text-foreground">{item.version}</p>
                                <p className="text-xs text-muted-foreground">
                                  {item.commit} • {item.time}
                                </p>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm">
                              <RotateCcw className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
