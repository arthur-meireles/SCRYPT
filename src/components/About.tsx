import { about, team } from '../content/site'

export default function About() {
  return (
    <section className="section section--alt" id="estudio">
      <div className="wrap">
        <div className="about reveal">
          <p className="eyebrow">O estúdio</p>
          <h2>{about.title}</h2>
          <p className="lead">{about.text}</p>
        </div>
        <ul className="team">
          {team.map((p) => (
            <li key={p.name} className="card reveal">
              <span className="avatar" aria-hidden="true">{p.initials}</span>
              <strong>{p.name}</strong>
              <span>{p.role}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
