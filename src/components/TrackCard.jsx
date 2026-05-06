export default function TrackCard({ title, desc, Illus }) {
  return (
    <a href="#" className="card">
      <div className="card__media">
        <Illus />
      </div>
      <div className="card__body">
        <h3>{title}</h3>
        <p>{desc}</p>
        <span className="card__cta">Explore the track →</span>
      </div>
    </a>
  )
}
