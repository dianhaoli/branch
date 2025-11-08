import { Clock, BookOpen, Code, Languages, Calculator } from "lucide-react"

const sessions = [
  {
    subject: "Mathematics",
    duration: "45 min",
    time: "2 hours ago",
    icon: Calculator,
    color: "#629460",
  },
  {
    subject: "Programming",
    duration: "1h 20min",
    time: "Yesterday",
    icon: Code,
    color: "#96be8c",
  },
  {
    subject: "Literature",
    duration: "30 min",
    time: "Yesterday",
    icon: BookOpen,
    color: "#aceca1",
  },
  {
    subject: "Spanish",
    duration: "55 min",
    time: "2 days ago",
    icon: Languages,
    color: "#c9f2c7",
  },
]

export function RecentSessions() {
  return (
    <div className="rounded-2xl bg-card border border-border/40 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground">Recent Sessions</h2>
        <button className="text-sm text-primary hover:text-primary/80 font-medium transition-colors">View all</button>
      </div>

      <div className="space-y-3">
        {sessions.map((session, index) => {
          const Icon = session.icon
          return (
            <div
              key={index}
              className="group flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all"
            >
              <div className="p-2.5 rounded-xl" style={{ backgroundColor: `${session.color}20` }}>
                <Icon className="w-5 h-5" style={{ color: session.color }} strokeWidth={2} />
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground">{session.subject}</p>
                <p className="text-sm text-muted-foreground">{session.time}</p>
              </div>

              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Clock className="w-4 h-4" strokeWidth={2} />
                <span className="text-sm font-medium">{session.duration}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
