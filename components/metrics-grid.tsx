"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Clock, Shield, Zap, Database } from "lucide-react"

const metrics = [
  {
    title: "Processing Time Saved",
    value: "70%",
    change: "+15%",
    trend: "up",
    icon: Clock,
    description: "vs. manual processing",
  },
  {
    title: "Release Cadence",
    value: "Weekly",
    change: "2x faster",
    trend: "up",
    icon: Zap,
    description: "from biweekly",
  },
  {
    title: "Decision Speed",
    value: "35%",
    change: "+12%",
    trend: "up",
    icon: TrendingUp,
    description: "faster with dashboards",
  },
  {
    title: "Security Findings",
    value: "0",
    change: "Critical",
    trend: "neutral",
    icon: Shield,
    description: "audit compliance",
  },
  {
    title: "Lambda Executions",
    value: "2.4M",
    change: "+8.2%",
    trend: "up",
    icon: Database,
    description: "this month",
  },
  {
    title: "Avg Response Time",
    value: "142ms",
    change: "-23ms",
    trend: "down",
    icon: TrendingDown,
    description: "p95 latency",
  },
]

export function MetricsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {metrics.map((metric) => {
        const Icon = metric.icon
        return (
          <Card key={metric.title} className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-muted-foreground">{metric.title}</p>
                <div className="mt-2 flex items-baseline gap-2">
                  <h3 className="text-3xl font-bold text-foreground">{metric.value}</h3>
                  <span
                    className={`text-sm font-medium ${
                      metric.trend === "up"
                        ? "text-accent"
                        : metric.trend === "down"
                          ? "text-chart-3"
                          : "text-muted-foreground"
                    }`}
                  >
                    {metric.change}
                  </span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{metric.description}</p>
              </div>
              <div className="rounded-lg bg-primary/10 p-2">
                <Icon className="h-5 w-5 text-primary" />
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
