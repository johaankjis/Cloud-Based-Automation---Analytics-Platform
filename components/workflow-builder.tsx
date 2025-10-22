"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Play, Trash2, Settings, GitBranch, Zap, Database, Mail } from "lucide-react"

const workflowTemplates = [
  {
    id: "ci-cd",
    name: "CI/CD Pipeline",
    description: "Build, test, and deploy your application",
    icon: GitBranch,
    steps: 4,
  },
  {
    id: "data-sync",
    name: "Data Synchronization",
    description: "Sync data between systems",
    icon: Database,
    steps: 3,
  },
  {
    id: "notification",
    name: "Notification Workflow",
    description: "Send alerts and notifications",
    icon: Mail,
    steps: 2,
  },
  {
    id: "automation",
    name: "Custom Automation",
    description: "Build your own workflow",
    icon: Zap,
    steps: 0,
  },
]

const workflowSteps = [
  { id: "trigger", name: "Trigger", type: "trigger", status: "configured" },
  { id: "build", name: "Build", type: "action", status: "configured" },
  { id: "test", name: "Run Tests", type: "action", status: "configured" },
  { id: "deploy", name: "Deploy", type: "action", status: "pending" },
]

export function WorkflowBuilder() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState("")

  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Workflow Builder</h2>
          <p className="text-sm text-muted-foreground">Design and manage automation workflows</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Workflow
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Workflow</DialogTitle>
              <DialogDescription>
                Choose a template to get started or build a custom workflow from scratch
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                {workflowTemplates.map((template) => {
                  const Icon = template.icon
                  return (
                    <button
                      key={template.id}
                      onClick={() => setSelectedTemplate(template.id)}
                      className={`flex flex-col items-start gap-2 rounded-lg border p-4 text-left transition-colors hover:bg-accent ${
                        selectedTemplate === template.id ? "border-primary bg-accent" : "border-border"
                      }`}
                    >
                      <Icon className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">{template.name}</p>
                        <p className="text-xs text-muted-foreground">{template.description}</p>
                      </div>
                      {template.steps > 0 && (
                        <Badge variant="secondary" className="text-xs">
                          {template.steps} steps
                        </Badge>
                      )}
                    </button>
                  )
                })}
              </div>
              <div className="space-y-4 border-t pt-4">
                <div className="space-y-2">
                  <Label htmlFor="workflow-name">Workflow Name</Label>
                  <Input id="workflow-name" placeholder="My Automation Workflow" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="workflow-description">Description</Label>
                  <Textarea id="workflow-description" placeholder="Describe what this workflow does..." rows={3} />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsDialogOpen(false)}>Create Workflow</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="visual" className="w-full">
        <TabsList>
          <TabsTrigger value="visual">Visual Editor</TabsTrigger>
          <TabsTrigger value="code">Code View</TabsTrigger>
          <TabsTrigger value="history">Run History</TabsTrigger>
        </TabsList>

        <TabsContent value="visual" className="space-y-4">
          <div className="rounded-lg border border-border bg-muted/30 p-6">
            <div className="space-y-4">
              {workflowSteps.map((step, index) => (
                <div key={step.id}>
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                        step.status === "configured"
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-muted-foreground bg-background text-muted-foreground"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <div className="flex flex-1 items-center justify-between rounded-lg border border-border bg-card p-4">
                      <div>
                        <p className="font-medium text-foreground">{step.name}</p>
                        <p className="text-xs text-muted-foreground capitalize">{step.type}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={step.status === "configured" ? "default" : "secondary"} className="text-xs">
                          {step.status}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  {index < workflowSteps.length - 1 && <div className="ml-5 h-8 w-0.5 bg-border" />}
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-center">
              <Button variant="outline" size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add Step
              </Button>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline">Save Draft</Button>
            <Button>
              <Play className="mr-2 h-4 w-4" />
              Run Workflow
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="code" className="space-y-4">
          <div className="rounded-lg border border-border bg-muted/30 p-4">
            <pre className="text-sm text-foreground">
              <code>{`workflow:
  name: "CI/CD Pipeline"
  on:
    push:
      branches: [main]
  
  steps:
    - name: Build
      run: npm run build
    
    - name: Test
      run: npm test
    
    - name: Deploy
      run: npm run deploy`}</code>
            </pre>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline">Copy Code</Button>
            <Button>Save Changes</Button>
          </div>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <div className="space-y-2">
            {[
              { time: "2 minutes ago", status: "success", duration: "1m 23s" },
              { time: "1 hour ago", status: "success", duration: "1m 18s" },
              { time: "3 hours ago", status: "failed", duration: "45s" },
            ].map((run, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg border border-border bg-card p-4"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`h-2 w-2 rounded-full ${run.status === "success" ? "bg-accent" : "bg-destructive"}`}
                  />
                  <div>
                    <p className="text-sm font-medium text-foreground">Run #{index + 1}</p>
                    <p className="text-xs text-muted-foreground">{run.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-sm text-muted-foreground">{run.duration}</p>
                  <Button variant="ghost" size="sm">
                    View Logs
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  )
}
