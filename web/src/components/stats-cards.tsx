import { TrendingUp, Clock, Flame, Target } from "lucide-react"

const stats = [
  {
    label: "Current Streak",
    value: "12",
    unit: "days",
    icon: Flame,
    trend: "+2 from last week",
    gradient: "from-[#c9f2c7] to-[#aceca1]",
  },
  {
    label: "Study Time",
    value: "24.5",
    unit: "hours",
    icon: Clock,
    trend: "This week",
    gradient: "from-[#aceca1] to-[#96be8c]",
  },
  {
    label: "Sessions",
    value: "38",
    unit: "completed",
    icon: Target,
    trend: "+6 from last week",
    gradient: "from-[#96be8c] to-[#629460]",
  },
  {
    label: "Growth",
    value: "+18%",
    unit: "progress",
    icon: TrendingUp,
    trend: "Month over month",
    gradient: "from-[#629460] to-[#243119]",
  },
]

export function StatsCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <div
            key={stat.label}
            className="group relative overflow-hidden rounded-2xl bg-card border border-border/40 p-6 transition-all hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20"
          >
            {/* Subtle gradient background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-[0.03] group-hover:opacity-[0.06] transition-opacity`}
            />

            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${stat.gradient} bg-opacity-10`}>
                  <Icon className="w-5 h-5 text-primary" strokeWidth={2} />
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-semibold text-foreground tracking-tight">{stat.value}</p>
                  <span className="text-sm text-muted-foreground">{stat.unit}</span>
                </div>
                <p className="text-xs text-muted-foreground pt-1">{stat.trend}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
