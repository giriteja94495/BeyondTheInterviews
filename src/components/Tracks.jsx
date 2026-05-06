import TrackCard from './TrackCard.jsx'
import {
  RealWorldIllus,
  SystemsIllus,
  SystemDesignIllus,
  CleanCodeIllus,
  ConcurrencyIllus,
  MentorshipIllus,
} from './Illustrations.jsx'

const tracks = [
  {
    title: 'Real-World Engineering',
    desc: "How code actually ships at top companies. PRs, on-calls, postmortems, and the meetings nobody told you about.",
    Illus: RealWorldIllus,
  },
  {
    title: "Systems That Don't Topple",
    desc: 'Design distributed systems by understanding their failure modes first. Caches, queues, retries, and the tradeoffs no slide deck shows.',
    Illus: SystemsIllus,
  },
  {
    title: 'System Design, Decoded',
    desc: 'Not memorized. Understood. 50+ real-world breakdowns of products you use daily — with diagrams, dollars, and decisions.',
    Illus: SystemDesignIllus,
  },
  {
    title: 'Code That Outlives You',
    desc: 'Object-oriented design, clean architecture, and the patterns senior engineers reach for — taught with refactors of real codebases.',
    Illus: CleanCodeIllus,
  },
  {
    title: 'Concurrency, Calmly',
    desc: 'Threads, locks, async, and event loops — explained the way you wished your CS prof had explained them.',
    Illus: ConcurrencyIllus,
  },
  {
    title: 'The Career You Actually Want',
    desc: 'Mentorship, communication, navigating reviews, and finding meaning in the work. Soft skills, treated like the hard skills they are.',
    Illus: MentorshipIllus,
  },
]

export default function Tracks() {
  return (
    <section className="tracks" id="tracks">
      <div className="tracks__head">
        <h2 className="tracks__title">
          Beyond the whiteboard.<br />
          Into the <span className="grad-text">real engineering world.</span>
        </h2>
        <p className="tracks__sub">
          Six tracks that pick up where interview prep ends — built around the way great
          engineers actually grow.
        </p>
      </div>

      <div className="cards">
        {tracks.map((t) => (
          <TrackCard key={t.title} {...t} />
        ))}
      </div>
    </section>
  )
}
