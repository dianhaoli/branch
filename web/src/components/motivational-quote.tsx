"use client"

import { Sparkles } from "lucide-react"

const quotes = [
  {
    text: "Growth is a process, not a destination. Each session is progress.",
    author: "Branch",
  },
  {
    text: "Like branches reaching toward the sun, your knowledge grows daily.",
    author: "Branch",
  },
  {
    text: "Consistency is the root of all great achievements.",
    author: "Branch",
  },
]

export function MotivationalQuote() {
  // In a real app, this would rotate or be random
  const quote = quotes[0]

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#c9f2c7]/20 to-[#96be8c]/20 border border-primary/10 p-6 mb-6">
      <div className="relative flex items-start gap-4">
        <div className="p-2.5 rounded-xl bg-primary/10 shrink-0">
          <Sparkles className="w-5 h-5 text-primary" strokeWidth={2} />
        </div>

        <div className="flex-1">
          <p className="text-lg font-medium text-foreground text-balance leading-relaxed">"{quote.text}"</p>
          <p className="text-sm text-muted-foreground mt-2">— {quote.author}</p>
        </div>
      </div>
    </div>
  )
}
