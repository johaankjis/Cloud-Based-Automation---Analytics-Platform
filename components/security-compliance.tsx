"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Lock, Key, FileCheck, AlertTriangle, CheckCircle2, XCircle, ExternalLink } from "lucide-react"

const securityMetrics = [
  {
    title: "IAM Roles Configured",
    value: 24,
    total: 24,
    icon: Key,
    status: "compliant",
  },
  {
    title: "Encryption at Rest",
    value: 100,
    total: 100,
    icon: Lock,
    status: "compliant",
  },
  {
    title: "Security Audits Passed",
    value: 12,
    total: 12,
    icon: FileCheck,
    status: "compliant",
  },
  {
    title: "Critical Findings",
    value: 0,
    total: 0,
    icon: Shield,
    status: "compliant",
  },
]

const vulnerabilities = [
  {
    severity: "high",
    title: "Outdated SSL Certificate",
    description: "SSL certificate expires in 7 days",
    affected: "api.example.com",
    status: "open",
  },
  {
    severity: "medium",
    title: "Weak Password Policy",
    description: "Password complexity requirements not enforced",
    affected: "User Authentication",
    status: "in-progress",
  },
  {
    severity: "low",
    title: "Missing Security Headers",
    description: "X-Frame-Options header not configured",
    affected: "Web Application",
    status: "resolved",
  },
]

const complianceFrameworks = [
  { name: "SOC 2 Type II", status: "compliant", score: 98, lastAudit: "2 weeks ago" },
  { name: "ISO 27001", status: "compliant", score: 96, lastAudit: "1 month ago" },
  { name: "GDPR", status: "compliant", score: 100, lastAudit: "3 weeks ago" },
  { name: "HIPAA", status: "partial", score: 87, lastAudit: "1 week ago" },
]

const auditLogs = [
  {
    time: "2 minutes ago",
    user: "admin@example.com",
    action: "Updated IAM policy",
    status: "success",
  },
  {
    time: "15 minutes ago",
    user: "security@example.com",
    action: "Ran security scan",
    status: "success",
  },
  {
    time: "1 hour ago",
    user: "system",
    action: "Failed login attempt detected",
    status: "warning",
  },
  {
    time: "2 hours ago",
    user: "devops@example.com",
    action: "Rotated API keys",
    status: "success",
  },
]

export function SecurityCompliance() {
  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Security & Compliance</h2>
          <p className="text-sm text-muted-foreground">All systems secure and compliant</p>
        </div>
        <Badge className="bg-accent text-accent-foreground">
          <Shield className="mr-1 h-3 w-3" />
          Compliant
        </Badge>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="vulnerabilities">Vulnerabilities</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
          <TabsTrigger value="audit">Audit Logs</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {securityMetrics.map((metric) => {
              const Icon = metric.icon
              const percentage = metric.total > 0 ? (metric.value / metric.total) * 100 : 100
              return (
                <div key={metric.title} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="rounded-lg bg-accent/10 p-2">
                      <Icon className="h-4 w-4 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{metric.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {metric.value}/{metric.total}
                      </p>
                    </div>
                  </div>
                  <Progress value={percentage} className="h-2" />
                </div>
              )
            })}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-foreground">Security Score</h3>
                <Badge variant="default">Excellent</Badge>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-foreground">94</span>
                  <span className="text-sm text-muted-foreground">out of 100</span>
                </div>
                <Progress value={94} className="h-2" />
                <p className="text-xs text-muted-foreground">+6 points from last month</p>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-foreground">Active Threats</h3>
                <Badge variant="secondary">0 Critical</Badge>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">High</span>
                  <span className="text-sm font-medium text-foreground">1</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Medium</span>
                  <span className="text-sm font-medium text-foreground">2</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Low</span>
                  <span className="text-sm font-medium text-foreground">5</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="vulnerabilities" className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">8 total vulnerabilities found</p>
            <Button size="sm">Run New Scan</Button>
          </div>
          <div className="space-y-3">
            {vulnerabilities.map((vuln, index) => (
              <div key={index} className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    {vuln.status === "resolved" ? (
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                    ) : vuln.status === "in-progress" ? (
                      <AlertTriangle className="h-5 w-5 text-primary" />
                    ) : (
                      <XCircle className="h-5 w-5 text-destructive" />
                    )}
                    <div className="flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <p className="font-medium text-foreground">{vuln.title}</p>
                        <Badge
                          variant={
                            vuln.severity === "high"
                              ? "destructive"
                              : vuln.severity === "medium"
                                ? "default"
                                : "secondary"
                          }
                          className="text-xs capitalize"
                        >
                          {vuln.severity}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{vuln.description}</p>
                      <p className="mt-1 text-xs text-muted-foreground">Affected: {vuln.affected}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">4 compliance frameworks monitored</p>
            <Button size="sm">
              <ExternalLink className="mr-2 h-4 w-4" />
              Generate Report
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {complianceFrameworks.map((framework, index) => (
              <div key={index} className="rounded-lg border border-border bg-card p-4">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">{framework.name}</h3>
                  <Badge variant={framework.status === "compliant" ? "default" : "secondary"} className="capitalize">
                    {framework.status}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-foreground">{framework.score}%</span>
                    <span className="text-xs text-muted-foreground">Compliance Score</span>
                  </div>
                  <Progress value={framework.score} className="h-2" />
                  <p className="text-xs text-muted-foreground">Last audit: {framework.lastAudit}</p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="audit" className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">Recent security events</p>
            <Button variant="outline" size="sm">
              Export Logs
            </Button>
          </div>
          <div className="space-y-2">
            {auditLogs.map((log, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg border border-border bg-card p-3"
              >
                <div className="flex items-center gap-3">
                  {log.status === "success" ? (
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                  ) : (
                    <AlertTriangle className="h-4 w-4 text-primary" />
                  )}
                  <div>
                    <p className="text-sm font-medium text-foreground">{log.action}</p>
                    <p className="text-xs text-muted-foreground">
                      {log.user} • {log.time}
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  Details
                </Button>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  )
}
