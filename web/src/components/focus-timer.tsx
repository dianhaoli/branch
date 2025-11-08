"use client"

import { useState } from "react"
import { Play, Pause, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FocusTimer() {
  const [isRunning, setIsRunning] = useState(false)
  const [time, setTime] = useState(25 * 60) // 25 minutes in seconds

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  return (
    <div className="rounded-2xl bg-card border border-border/40 p-6">
      <h2 className="text-xl font-semibold text-foreground mb-6">Focus Timer</h2>

      <div className="relative">
        {/* Circular Progress Background */}
        <div className="relative w-full aspect-square max-w-[240px] mx-auto">
          <svg className="w-full h-full -rotate-90">
            <circle
              cx="50%"
              cy="50%"
              r="45%"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              className="text-muted/20"
            />
            <circle
              cx="50%"
              cy="50%"
              r="45%"
              fill="none"
              stroke="url(#timerGradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 45} ${2 * Math.PI * 45}`}
              strokeDashoffset={`${2 * Math.PI * 45 * (1 - time / (25 * 60))}`}
              className="transition-all duration-1000"
            />
            <defs>
              <linearGradient id="timerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c9f2c7" />
                <stop offset="100%" stopColor="#629460" />
              </linearGradient>
            </defs>
          </svg>

          {/* Time Display */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-5xl font-semibold text-foreground tabular-nums tracking-tight">
              {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
            </div>
            <p className="text-sm text-muted-foreground mt-2">{isRunning ? "Focus mode active" : "Ready to focus"}</p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-3 mt-6">
        <Button
          variant="outline"
          size="icon"
          className="w-12 h-12 rounded-xl bg-transparent"
          onClick={() => setTime(25 * 60)}
        >
          <RotateCcw className="w-5 h-5" strokeWidth={2} />
        </Button>
        <Button
          size="lg"
          className="w-16 h-16 rounded-2xl bg-primary hover:bg-primary/90 transition-all hover:scale-105"
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? (
            <Pause className="w-6 h-6" strokeWidth={2} fill="currentColor" />
          ) : (
            <Play className="w-6 h-6 ml-0.5" strokeWidth={2} fill="currentColor" />
          )}
        </Button>
        <div className="w-12" /> {/* Spacer for symmetry */}
      </div>

      {/* Quick Timers */}
      <div className="flex gap-2 mt-6">
        <button
          onClick={() => setTime(15 * 60)}
          className="flex-1 py-2 text-sm font-medium rounded-xl bg-muted/50 hover:bg-muted transition-colors text-foreground"
        >
          15m
        </button>
        <button
          onClick={() => setTime(25 * 60)}
          className="flex-1 py-2 text-sm font-medium rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors text-primary"
        >
          25m
        </button>
        <button
          onClick={() => setTime(45 * 60)}
          className="flex-1 py-2 text-sm font-medium rounded-xl bg-muted/50 hover:bg-muted transition-colors text-foreground"
        >
          45m
        </button>
      </div>
    </div>
  )
}
