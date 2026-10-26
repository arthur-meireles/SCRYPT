import { about, team } from '../content/site'
import TeamCard from './TeamCard'

export default function About() {
  return (
    <section className="section section--alt" id="estudio">
      <div className="wrap">
        <div className="about reveal">
          <p className="eyebrow">O estúdio</p>
          <h2>{about.title}</h2>
          <p className="lead">{about.text}</p>
        </div>
        <div className="team">
          {team.map((m) => (
            <div key={m.slug} className="reveal">
              <TeamCard member={m} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
