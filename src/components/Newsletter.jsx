import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 4000)
  }

  return (
    <section className="newsletter" id="newsletter">
      <div className="newsletter__card">
        <div className="newsletter__copy">
          <h3>One letter. Every Sunday.</h3>
          <p>
            A short, honest essay on the engineering craft — plus one real-world breakdown.
            No hot takes. No spam.
          </p>
        </div>
        <form className="newsletter__form" onSubmit={onSubmit}>
          <input
            type="email"
            placeholder="you@whereyoubuild.dev"
            required
            aria-label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="btn btn--primary">
            {subscribed ? 'Subscribed ✓' : 'Subscribe'}
          </button>
        </form>
      </div>
    </section>
  )
}
