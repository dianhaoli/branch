export function BranchLogo({ size = 'text-2xl' }: { size?: string }) {
  return (
    <div className={`${size} font-bold tracking-tight flex items-center gap-2`}>
      {/* Simple Tree Icon */}
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Tree trunk */}
        <rect x="10" y="14" width="4" height="8" rx="1" fill="#6fb168" />
        {/* Tree foliage */}
        <path
          d="M12 3 L18 10 L15 10 L19 15 L5 15 L9 10 L6 10 Z"
          fill="#6fb168"
        />
      </svg>
      <span className="text-gray-900">Branch</span>
    </div>
  );
}


