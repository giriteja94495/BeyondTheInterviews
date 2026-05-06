export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="brand__name">
            Beyond<span className="brand__accent">The</span>Interviews
          </span>
          <p>Bridging the gap between cracking interviews and becoming a great engineer.</p>
        </div>
        <div className="footer__cols">
          <div>
            <h4>Learn</h4>
            <a href="#">Tracks</a>
            <a href="#">Roadmaps</a>
            <a href="#">Projects</a>
          </div>
          <div>
            <h4>Community</h4>
            <a href="#">Discord</a>
            <a href="#">YouTube</a>
            <a href="#">Newsletter</a>
          </div>
          <div>
            <h4>Company</h4>
            <a href="#">Manifesto</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© 2026 BeyondTheInterviews · Made for engineers, by engineers.</span>
        <span>Built with care in the hours nobody saw.</span>
      </div>
    </footer>
  )
}
