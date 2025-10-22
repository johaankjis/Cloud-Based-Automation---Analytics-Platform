"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Plus, Clock, GitBranch, Webhook, Calendar, Database, MoreVertical, Trash2, Edit } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const triggers = [
  {
    id: "1",
    name: "Deploy on Push",
    type: "git",
    icon: GitBranch,
    enabled: true,
    config: "main branch",
    lastTriggered: "5 minutes ago",
  },
  {
    id: "2",
    name: "Nightly Build",
    type: "schedule",
    icon: Clock,
    enabled: true,
    config: "Every day at 2:00 AM",
    lastTriggered: "8 hours ago",
  },
  {
    id: "3",
    name: "Webhook Listener",
    type: "webhook",
    icon: Webhook,
    enabled: false,
    config: "POST /api/webhook",
    lastTriggered: "Never",
  },
  {
    id: "4",
    name: "Database Change",
    type: "database",
    icon: Database,
    enabled: true,
    config: "users table",
    lastTriggered: "1 hour ago",
  },
]

const triggerTypes = [
  { value: "git", label: "Git Push", icon: GitBranch },
  { value: "schedule", label: "Schedule", icon: Clock },
  { value: "webhook", label: "Webhook", icon: Webhook },
  { value: "database", label: "Database Event", icon: Database },
  { value: "manual", label: "Manual Trigger", icon: Calendar },
]

export function TriggerManagement() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedType, setSelectedType] = useState("")

  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Trigger Management</h2>
          <p className="text-sm text-muted-foreground">Configure automation triggers and events</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Trigger
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Trigger</DialogTitle>
              <DialogDescription>Configure when and how your automation workflows should run</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="trigger-name">Trigger Name</Label>
                <Input id="trigger-name" placeholder="My Trigger" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="trigger-type">Trigger Type</Label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger id="trigger-type">
                    <SelectValue placeholder="Select trigger type" />
                  </SelectTrigger>
                  <SelectContent>
                    {triggerTypes.map((type) => {
                      const Icon = type.icon
                      return (
                        <SelectItem key={type.value} value={type.value}>
                          <div className="flex items-center gap-2">
                            <Icon className="h-4 w-4" />
                            {type.label}
                          </div>
                        </SelectItem>
                      )
                    })}
                  </SelectContent>
                </Select>
              </div>
              {selectedType === "git" && (
                <div className="space-y-2">
                  <Label htmlFor="branch">Branch</Label>
                  <Input id="branch" placeholder="main" />
                </div>
              )}
              {selectedType === "schedule" && (
                <div className="space-y-2">
                  <Label htmlFor="cron">Cron Expression</Label>
                  <Input id="cron" placeholder="0 2 * * *" />
                  <p className="text-xs text-muted-foreground">Every day at 2:00 AM</p>
                </div>
              )}
              {selectedType === "webhook" && (
                <div className="space-y-2">
                  <Label htmlFor="endpoint">Webhook Endpoint</Label>
                  <Input id="endpoint" placeholder="/api/webhook" />
                </div>
              )}
              {selectedType === "database" && (
                <div className="space-y-2">
                  <Label htmlFor="table">Table Name</Label>
                  <Input id="table" placeholder="users" />
                </div>
              )}
              <div className="flex items-center justify-between rounded-lg border border-border p-4">
                <div className="space-y-0.5">
                  <Label htmlFor="enabled">Enable Trigger</Label>
                  <p className="text-xs text-muted-foreground">Activate this trigger immediately</p>
                </div>
                <Switch id="enabled" defaultChecked />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsDialogOpen(false)}>Create Trigger</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-3">
        {triggers.map((trigger) => {
          const Icon = trigger.icon
          return (
            <div
              key={trigger.id}
              className="flex items-center justify-between rounded-lg border border-border bg-card p-4"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-foreground">{trigger.name}</p>
                    <Badge variant={trigger.enabled ? "default" : "secondary"} className="text-xs">
                      {trigger.enabled ? "Active" : "Disabled"}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{trigger.config}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Last triggered</p>
                  <p className="text-sm font-medium text-foreground">{trigger.lastTriggered}</p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Clock className="mr-2 h-4 w-4" />
                      View History
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-6 rounded-lg border border-border bg-muted/30 p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">Trigger Statistics</p>
            <p className="text-xs text-muted-foreground">Last 24 hours</p>
          </div>
          <div className="flex gap-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">127</p>
              <p className="text-xs text-muted-foreground">Total Triggers</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-accent">119</p>
              <p className="text-xs text-muted-foreground">Successful</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-destructive">8</p>
              <p className="text-xs text-muted-foreground">Failed</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
