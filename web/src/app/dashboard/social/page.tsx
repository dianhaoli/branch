'use client';

import { useAuthContext } from '@/contexts/AuthContext';
import FriendFeed from '@/components/social/FriendFeed';
import BadgeShowcase from '@/components/social/BadgeShowcase';
import { Navbar } from '@/components/navbar';

export default function SocialPage() {
  const { user } = useAuthContext();

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8 md:px-6 lg:px-8 max-w-7xl space-y-6">
        <div>
          <h1 className="text-3xl font-semibold text-foreground">Social Feed</h1>
          <p className="text-muted-foreground mt-1">See what your friends are studying and share your progress.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Feed */}
          <div className="lg:col-span-2">
            <FriendFeed userId={user.id} />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <BadgeShowcase userId={user.id} />
            
            <div className="rounded-2xl bg-card border border-border/40 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Add Friends</h3>
              <input
                type="text"
                placeholder="Search by email..."
                className="w-full px-4 py-2 border border-input rounded-xl focus:outline-none focus:ring-1 focus:ring-ring bg-background text-foreground"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

