import { studio } from '../content/site'

export default function Hero() {
  return (
    <section className="hero" id="topo">
      <video
        className="hero__video"
        src="/video/hero.mp4"
        poster="/brand/keyframe-169.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="hero__shade" aria-hidden="true" />
      <div className="hero__content">
        <p className="eyebrow">Estúdio independente de games</p>
        <h1>{studio.tagline}</h1>
        <div className="hero__cta">
          <a className="btn" href="#jogo">Conheça o jogo</a>
          <a className="btn btn--ghost" href="#newsletter">Acompanhe o diário</a>
        </div>
      </div>
      <a className="hero__scroll" href="#jogo" aria-label="Rolar para o jogo">
        <span />
      </a>
    </section>
  )
}
