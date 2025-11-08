'use client';

import { useAuthContext } from '@/contexts/AuthContext';
import Leaderboard from '@/components/social/Leaderboard';
import { useState } from 'react';
import { Navbar } from '@/components/navbar';

export default function LeaderboardPage() {
  const { user } = useAuthContext();
  const [selectedType, setSelectedType] = useState<'hours' | 'xp' | 'streak'>('hours');
  const [selectedPeriod, setSelectedPeriod] = useState<'weekly' | 'monthly' | 'all-time'>('weekly');
  const [scope, setScope] = useState<'global' | 'friends'>('global');

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8 md:px-6 lg:px-8 max-w-7xl space-y-6">
        <div>
          <h1 className="text-3xl font-semibold text-foreground">Leaderboard</h1>
          <p className="text-muted-foreground mt-1">Compete with friends and the global community.</p>
        </div>

        {/* Filters */}
        <div className="rounded-2xl bg-card border border-border/40 p-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">Metric</label>
              <div className="flex gap-2">
                {(['hours', 'xp', 'streak'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`flex-1 px-4 py-2 rounded-xl font-medium transition-colors ${
                      selectedType === type
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-accent/50 text-foreground hover:bg-accent/60'
                    }`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">Period</label>
              <div className="flex gap-2">
                {(['weekly', 'monthly', 'all-time'] as const).map((period) => (
                  <button
                    key={period}
                    onClick={() => setSelectedPeriod(period)}
                    className={`flex-1 px-4 py-2 rounded-xl font-medium text-sm transition-colors ${
                      selectedPeriod === period
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-accent/50 text-foreground hover:bg-accent/60'
                    }`}
                  >
                    {period === 'all-time' ? 'All Time' : period.charAt(0).toUpperCase() + period.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">Scope</label>
              <div className="flex gap-2">
                {(['global', 'friends'] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setScope(s)}
                    className={`flex-1 px-4 py-2 rounded-xl font-medium transition-colors ${
                      scope === s
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-accent/50 text-foreground hover:bg-accent/60'
                    }`}
                  >
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Leaderboard */}
        <Leaderboard type={selectedType} period={selectedPeriod} scope={scope} userId={user.id} />
      </main>
    </div>
  );
}

