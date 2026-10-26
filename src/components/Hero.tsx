import { Link } from 'react-router-dom'
import { studio } from '../content/site'

export default function Hero() {
  return (
    <section className="hero" id="topo">
      <video
        className="hero__video"
        src="/video/hero.mp4"
        poster="/brand/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="hero__shade" aria-hidden="true" />
      <div className="hero__content">
        <p className="eyebrow">Estúdio indie de games</p>
        <h1>{studio.headline}</h1>
        <p className="hero__sub">{studio.subline}</p>
        <div className="hero__cta">
          <Link className="btn" to="/#jogo">Conheça o jogo</Link>
          <Link className="btn btn--ghost" to="/blog">Ler o blog</Link>
        </div>
      </div>
    </section>
  )
}
