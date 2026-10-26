import { game } from '../content/site'

export default function Game() {
  return (
    <section className="section" id="jogo">
      <div className="wrap game">
        <div className="game__art reveal" role="img" aria-label={`Arte do jogo ${game.title}`}>
          <img src="/brand/logo.png" alt="" />
          <span className="badge">{game.status}</span>
        </div>
        <div className="game__info reveal">
          <p className="eyebrow">Nosso primeiro jogo</p>
          <h2>{game.title}</h2>
          <p className="lead">{game.pitch}</p>
          <dl className="facts">
            <div><dt>Gênero</dt><dd>{game.genre}</dd></div>
            <div><dt>Plataformas</dt><dd>{game.platforms}</dd></div>
          </dl>
          <div className="game__cta">
            <a className="btn" href={game.wishlistUrl}>Adicionar à lista de desejos</a>
            <a className="btn btn--ghost" href="#newsletter">Receber novidades</a>
          </div>
        </div>
      </div>
    </section>
  )
}
