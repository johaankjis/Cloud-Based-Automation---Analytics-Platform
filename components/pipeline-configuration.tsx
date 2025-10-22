"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Settings, Save, RotateCcw, AlertCircle } from "lucide-react"

export function PipelineConfiguration() {
  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Settings className="h-5 w-5 text-primary" />
          <div>
            <h2 className="text-lg font-semibold text-foreground">Pipeline Configuration</h2>
            <p className="text-sm text-muted-foreground">Customize pipeline behavior and settings</p>
          </div>
        </div>
        <Badge variant="secondary">CI/CD Pipeline</Badge>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="environment">Environment</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="pipeline-name">Pipeline Name</Label>
              <Input id="pipeline-name" defaultValue="Production Deployment" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" defaultValue="Automated CI/CD pipeline for production deployments" rows={3} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="timeout">Timeout (minutes)</Label>
              <div className="flex items-center gap-4">
                <Slider id="timeout" defaultValue={[30]} max={120} step={5} className="flex-1" />
                <span className="w-12 text-sm text-muted-foreground">30m</span>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border p-4">
              <div className="space-y-0.5">
                <Label htmlFor="auto-retry">Auto Retry on Failure</Label>
                <p className="text-xs text-muted-foreground">Automatically retry failed pipeline runs</p>
              </div>
              <Switch id="auto-retry" defaultChecked />
            </div>
            <div className="space-y-2">
              <Label htmlFor="retry-count">Maximum Retry Attempts</Label>
              <Select defaultValue="3">
                <SelectTrigger id="retry-count">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 attempt</SelectItem>
                  <SelectItem value="2">2 attempts</SelectItem>
                  <SelectItem value="3">3 attempts</SelectItem>
                  <SelectItem value="5">5 attempts</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="environment" className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Environment Variables</Label>
              <Button variant="outline" size="sm">
                Add Variable
              </Button>
            </div>
            <div className="space-y-3">
              {[
                { key: "NODE_ENV", value: "production", secure: false },
                { key: "API_URL", value: "https://api.example.com", secure: false },
                { key: "DATABASE_URL", value: "••••••••••••", secure: true },
                { key: "API_KEY", value: "••••••••••••", secure: true },
              ].map((env, index) => (
                <div key={index} className="flex items-center gap-3 rounded-lg border border-border bg-card p-3">
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium text-foreground">{env.key}</p>
                    <p className="text-xs text-muted-foreground">{env.value}</p>
                  </div>
                  {env.secure && (
                    <Badge variant="secondary" className="text-xs">
                      Secure
                    </Badge>
                  )}
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </div>
              ))}
            </div>
            <div className="rounded-lg border border-border bg-muted/30 p-4">
              <div className="flex gap-2">
                <AlertCircle className="h-4 w-4 text-primary" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">Secure Variables</p>
                  <p className="text-xs text-muted-foreground">
                    Sensitive values are encrypted and never exposed in logs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border border-border p-4">
              <div className="space-y-0.5">
                <Label htmlFor="notify-success">Notify on Success</Label>
                <p className="text-xs text-muted-foreground">Send notification when pipeline completes successfully</p>
              </div>
              <Switch id="notify-success" defaultChecked />
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border p-4">
              <div className="space-y-0.5">
                <Label htmlFor="notify-failure">Notify on Failure</Label>
                <p className="text-xs text-muted-foreground">Send notification when pipeline fails</p>
              </div>
              <Switch id="notify-failure" defaultChecked />
            </div>
            <div className="space-y-2">
              <Label htmlFor="notification-channel">Notification Channel</Label>
              <Select defaultValue="email">
                <SelectTrigger id="notification-channel">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="slack">Slack</SelectItem>
                  <SelectItem value="webhook">Webhook</SelectItem>
                  <SelectItem value="all">All Channels</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="recipients">Recipients</Label>
              <Input
                id="recipients"
                placeholder="team@example.com, alerts@example.com"
                defaultValue="devops@example.com"
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="concurrency">Concurrent Runs</Label>
              <Select defaultValue="1">
                <SelectTrigger id="concurrency">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 (Sequential)</SelectItem>
                  <SelectItem value="2">2 runs</SelectItem>
                  <SelectItem value="5">5 runs</SelectItem>
                  <SelectItem value="unlimited">Unlimited</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border p-4">
              <div className="space-y-0.5">
                <Label htmlFor="cache-enabled">Enable Caching</Label>
                <p className="text-xs text-muted-foreground">Cache dependencies to speed up builds</p>
              </div>
              <Switch id="cache-enabled" defaultChecked />
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border p-4">
              <div className="space-y-0.5">
                <Label htmlFor="artifacts">Save Artifacts</Label>
                <p className="text-xs text-muted-foreground">Store build artifacts for later use</p>
              </div>
              <Switch id="artifacts" defaultChecked />
            </div>
            <div className="space-y-2">
              <Label htmlFor="artifact-retention">Artifact Retention (days)</Label>
              <Select defaultValue="30">
                <SelectTrigger id="artifact-retention">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7">7 days</SelectItem>
                  <SelectItem value="30">30 days</SelectItem>
                  <SelectItem value="90">90 days</SelectItem>
                  <SelectItem value="forever">Forever</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4">
              <div className="flex gap-2">
                <AlertCircle className="h-4 w-4 text-destructive" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-destructive">Danger Zone</p>
                  <p className="text-xs text-muted-foreground">These actions cannot be undone</p>
                  <Button variant="destructive" size="sm" className="mt-3">
                    Delete Pipeline
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-6 flex justify-end gap-2 border-t border-border pt-6">
        <Button variant="outline">
          <RotateCcw className="mr-2 h-4 w-4" />
          Reset
        </Button>
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>
    </Card>
  )
}
