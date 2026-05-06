import Brand from './Brand.jsx'

const menus = [
  {
    label: 'Learn',
    items: ['Tracks & Roadmaps', 'Real-World Projects', 'Code Reviews'],
  },
  {
    label: 'Practice',
    items: ['Engineering Drills', 'Open Source Lab', 'Mock On-Calls'],
  },
  {
    label: 'Newsletter',
    items: ['Weekly Letter', 'Past Issues'],
  },
  {
    label: 'Resources',
    items: ['Engineering Library', 'Career Playbooks', 'Community'],
  },
]

export default function Nav({ theme, onToggleTheme }) {
  return (
    <header className="nav">
      <div className="nav__inner">
        <Brand />

        <nav className="nav__menu" aria-label="Primary">
          {menus.map((m) => (
            <div className="nav__item has-menu" key={m.label}>
              <button className="nav__link">
                {m.label} <span className="caret">▾</span>
              </button>
              <div className="nav__dropdown">
                {m.items.map((it) => (
                  <a key={it} href="#tracks">
                    {it}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="nav__actions">
          <button className="icon-btn" aria-label="Search">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
          </button>

          <a href="#pricing" className="pill-btn">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2L12 16.8 5.7 21l2.3-7.2-6-4.4h7.6L12 2z" />
            </svg>
            Premium
          </a>

          <a className="icon-btn icon-btn--brand" aria-label="YouTube" href="#">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M23.5 7.1a3 3 0 0 0-2.1-2.1C19.5 4.5 12 4.5 12 4.5s-7.5 0-9.4.5A3 3 0 0 0 .5 7.1C0 9 0 12 0 12s0 3 .5 4.9a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-4.9.5-4.9s0-3-.5-4.9zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
            </svg>
          </a>

          <button className="icon-btn" aria-label="Toggle theme" onClick={onToggleTheme}>
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
              </svg>
            )}
          </button>

          <a href="#account" className="avatar" aria-label="Your account">
            <span>P</span>
          </a>
        </div>
      </div>
    </header>
  )
}
