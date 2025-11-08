import { Navbar } from "@/components/navbar"
import { GrowthChart } from "@/components/growth-chart"
import { TrendingUp, Award, Target, Zap } from "lucide-react"

const insights = [
  {
    title: "Most Productive Day",
    value: "Saturday",
    detail: "5.2 hours average",
    icon: Award,
  },
  {
    title: "Peak Hours",
    value: "2-4 PM",
    detail: "Most focused time",
    icon: Zap,
  },
  {
    title: "Weekly Goal",
    value: "85%",
    detail: "34 of 40 hours",
    icon: Target,
  },
  {
    title: "Improvement",
    value: "+28%",
    detail: "vs. last month",
    icon: TrendingUp,
  },
]

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8 md:px-6 lg:px-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-2">Analytics</h1>
          <p className="text-muted-foreground text-lg">Track your progress and insights</p>
        </div>

        {/* Insights Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
          {insights.map((insight) => {
            const Icon = insight.icon
            return (
              <div key={insight.title} className="rounded-2xl bg-card border border-border/40 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10">
                    <Icon className="w-5 h-5 text-primary" strokeWidth={2} />
                  </div>
                </div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">{insight.title}</h3>
                <p className="text-2xl font-semibold text-foreground mb-1">{insight.value}</p>
                <p className="text-xs text-muted-foreground">{insight.detail}</p>
              </div>
            )
          })}
        </div>

        {/* Chart */}
        <GrowthChart />
      </main>
    </div>
  )
}
