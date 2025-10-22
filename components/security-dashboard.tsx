"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Shield, Lock, AlertTriangle, Eye, Key, FileCheck, Activity } from "lucide-react"

const securityStats = [
  {
    title: "Security Posture",
    value: "Strong",
    score: 94,
    icon: Shield,
    trend: "+6%",
    color: "text-accent",
  },
  {
    title: "Active Threats",
    value: "8",
    score: 92,
    icon: AlertTriangle,
    trend: "-3",
    color: "text-primary",
  },
  {
    title: "Access Controls",
    value: "Configured",
    score: 100,
    icon: Lock,
    trend: "100%",
    color: "text-accent",
  },
  {
    title: "Monitoring",
    value: "Active",
    score: 98,
    icon: Eye,
    trend: "24/7",
    color: "text-accent",
  },
]

const securityControls = [
  { name: "Multi-Factor Authentication", enabled: true, coverage: 100 },
  { name: "Encryption in Transit", enabled: true, coverage: 100 },
  { name: "Encryption at Rest", enabled: true, coverage: 100 },
  { name: "API Rate Limiting", enabled: true, coverage: 95 },
  { name: "DDoS Protection", enabled: true, coverage: 100 },
  { name: "Web Application Firewall", enabled: true, coverage: 98 },
]

const recentIncidents = [
  {
    time: "2 hours ago",
    type: "Suspicious Login",
    severity: "medium",
    status: "investigating",
  },
  {
    time: "1 day ago",
    type: "Failed API Authentication",
    severity: "low",
    status: "resolved",
  },
  {
    time: "3 days ago",
    type: "Unusual Traffic Pattern",
    severity: "low",
    status: "resolved",
  },
]

export function SecurityDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {securityStats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title} className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                </div>
                <Icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <Progress value={stat.score} className="h-1.5 flex-1" />
                <span className="ml-3 text-xs text-muted-foreground">{stat.trend}</span>
              </div>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Key className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-foreground">Security Controls</h3>
            </div>
            <Badge variant="default">6 Active</Badge>
          </div>
          <div className="space-y-3">
            {securityControls.map((control, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg border border-border bg-muted/30 p-3"
              >
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{control.name}</p>
                  <div className="mt-1 flex items-center gap-2">
                    <Progress value={control.coverage} className="h-1 flex-1" />
                    <span className="text-xs text-muted-foreground">{control.coverage}%</span>
                  </div>
                </div>
                <Badge variant={control.enabled ? "default" : "secondary"} className="ml-3 text-xs">
                  {control.enabled ? "Enabled" : "Disabled"}
                </Badge>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-foreground">Recent Incidents</h3>
            </div>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
          <div className="space-y-3">
            {recentIncidents.map((incident, index) => (
              <div key={index} className="rounded-lg border border-border bg-card p-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-1 flex items-center gap-2">
                      <p className="text-sm font-medium text-foreground">{incident.type}</p>
                      <Badge
                        variant={
                          incident.severity === "high"
                            ? "destructive"
                            : incident.severity === "medium"
                              ? "default"
                              : "secondary"
                        }
                        className="text-xs capitalize"
                      >
                        {incident.severity}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{incident.time}</p>
                  </div>
                  <Badge
                    variant={incident.status === "resolved" ? "default" : "secondary"}
                    className="text-xs capitalize"
                  >
                    {incident.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileCheck className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-foreground">Compliance Status</h3>
          </div>
          <Badge className="bg-accent text-accent-foreground">All Compliant</Badge>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {["SOC 2", "ISO 27001", "GDPR", "HIPAA"].map((framework) => (
            <div key={framework} className="rounded-lg border border-border bg-muted/30 p-4 text-center">
              <Shield className="mx-auto mb-2 h-6 w-6 text-accent" />
              <p className="text-sm font-medium text-foreground">{framework}</p>
              <Badge variant="default" className="mt-2 text-xs">
                Compliant
              </Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
