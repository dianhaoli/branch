'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Timer, LineChart, User } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const items = [
  { href: '/dashboard', label: 'Home', icon: Home },
  { href: '/dashboard/sessions', label: 'Sessions', icon: Timer },
  { href: '/dashboard/insights', label: 'Analytics', icon: LineChart },
  { href: '/dashboard/profile', label: 'Profile', icon: User },
];

export default function BranchNavbar() {
  const path = usePathname();

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-[color:var(--surface)]/60 border-b border-white/60 dark:border-white/10">
      <nav className="mx-auto max-w-7xl px-4 h-14 flex items-center justify-between">
        <Link href="/dashboard" className="font-semibold text-[18px]">
          Branch
        </Link>
        <div className="flex items-center gap-1">
          {items.map(({ href, label, icon: Icon }) => {
            const active = path?.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`group px-3 py-2 rounded-xl transition ${
                  active
                    ? 'bg-branch-mint/60 text-branch-forest'
                    : 'text-[color:var(--muted)] hover:bg-[color:var(--halo)]'
                }`}
              >
                <span className="inline-flex items-center gap-2">
                  <Icon size={18} strokeWidth={1.75} />
                  <span className="hidden sm:inline text-sm">{label}</span>
                </span>
              </Link>
            );
          })}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}


