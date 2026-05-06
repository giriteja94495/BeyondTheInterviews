export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="blob blob--violet" />
        <div className="blob blob--pink" />
        <div className="grid" />
      </div>

      <div className="hero__content">
        <a href="#manifesto" className="hero__pill">
          <span className="dot" /> A new home for engineers who want to build, not just pass
        </a>

        <h1 className="hero__title">
          Fall in Love with{' '}
          <span className="hero__title-grad">Software Engineering</span>{' '}
          <span className="hero__title-line">Again</span>
        </h1>

        <p className="hero__subtitle">
          You learned to crack the interview. Now learn the craft.{' '}
          <strong>BeyondTheInterviews</strong> bridges the gap between LeetCode wins and
          real-world engineering — through stories, systems, and shipping.
        </p>

        <div className="hero__cta">
          <a href="#tracks" className="btn btn--primary">
            Start your journey
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#manifesto" className="btn btn--ghost">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="6 4 20 12 6 20 6 4" />
            </svg>
            Watch the manifesto
          </a>
        </div>

        <ul className="hero__stats" aria-label="Community stats">
          <li>
            <b>32k+</b>
            <span>engineers learning</span>
          </li>
          <li>
            <b>120+</b>
            <span>real-world breakdowns</span>
          </li>
          <li>
            <b>4.9★</b>
            <span>from members</span>
          </li>
        </ul>
      </div>
    </section>
  )
}
