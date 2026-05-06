export default function Brand() {
  return (
    <a href="#" className="brand" aria-label="BeyondTheInterviews home">
      <span className="brand__logo" aria-hidden="true">
        {/* Ink mark: a "bridge" arch + a single terracotta dot for the accent */}
        <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
          <rect x="1" y="1" width="30" height="30" rx="8" fill="var(--text)" />
          <path
            d="M7 22 Q16 8 25 22"
            stroke="var(--bg)"
            strokeWidth="2.4"
            strokeLinecap="round"
            fill="none"
          />
          <line x1="7" y1="22" x2="25" y2="22" stroke="var(--bg)" strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="16" cy="14.5" r="2" fill="var(--accent)" />
        </svg>
      </span>
      <span className="brand__text">
        <span className="brand__name">
          Beyond<span className="brand__accent">The</span>Interviews
        </span>
        <span className="brand__tag">we bridge the gap</span>
      </span>
    </a>
  )
}
