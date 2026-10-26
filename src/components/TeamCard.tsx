import { useState } from 'react'
import type { Member } from '../content/site'

// Carta de jogo: frente (arte em tela cheia + nome) e verso (o que a pessoa faz).
// Desktop vira no hover/foco; no toque, vira ao tocar.
export default function TeamCard({ member }: { member: Member }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className={`flip${flipped ? ' is-flipped' : ''}`}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={`Carta de ${member.name}, ${member.role}. Virar a carta.`}
      onClick={() => setFlipped((f) => !f)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setFlipped((f) => !f)
        }
      }}
    >
      <div className="flip__inner">
        <div className="face face--front">
          <div className="face__panel">
            <div
              className="face__art"
              style={
                member.art
                  ? { backgroundImage: `url(${member.art})`, backgroundPosition: member.artPosition }
                  : undefined
              }
            >
              {!member.art && <img src="/brand/logo.png" alt="" />}
            </div>
            <div className="face__shade" aria-hidden="true" />
            <div className="face__caption">
              <span className="face__name">{member.name}</span>
              <span className="face__role">{member.role}</span>
            </div>
          </div>
        </div>

        <div className="face face--back">
          <div className="face__panel">
            <img className="face__mark" src="/brand/logo.png" alt="" />
            <h3>{member.name}</h3>
            <span className="face__role">{member.role}</span>
            <p>{member.bio}</p>
            <ul className="chips">
              {member.skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
