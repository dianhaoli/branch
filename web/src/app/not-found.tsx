import Link from "next/link"
import { BranchLogo } from "@/components/landing/BranchLogo"
import { TreeCharacter } from "@/components/landing/TreeCharacter"

export default function NotFound() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-white text-gray-900">
      {/* Soft green background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e8f5e3] via-[#d4f4d0] to-[#b8e6b0]" />

      {/* Header */}
      <header className="relative z-10 border-b border-gray-200/60 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl px-6 py-4">
          <BranchLogo size="text-xl" />
        </div>
      </header>

      {/* Main */}
      <main className="relative z-10 container mx-auto max-w-3xl px-6 py-24 md:py-32">
        <div className="flex flex-col items-center text-center gap-8">
          <TreeCharacter size={150} showMessage animated />

          <div className="space-y-3">
            <p className="text-sm tracking-widest text-gray-600">ERROR 404</p>
            <h1 className="text-4xl md:text-5xl font-bold">
              Page not found
            </h1>
            <p className="text-gray-700">
              The page you’re looking for doesn’t exist or was moved.
            </p>
          </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="rounded-2xl bg-[#6fb168] px-6 py-3 text-white font-semibold shadow-lg hover:shadow-xl hover:bg-[#5a9a54] transition-all"
            >
              Back to Home
            </Link>
            <Link
              href="/dashboard"
              className="rounded-2xl border border-gray-300 bg-white px-6 py-3 text-gray-800 font-semibold hover:bg-gray-50 transition-all"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-200/60 py-6 text-center text-gray-600 text-sm">
        <p>© 2025 Branch</p>
      </footer>
    </div>
  )
}


