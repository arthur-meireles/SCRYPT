import { Link, NavLink } from 'react-router-dom'
import { studio } from '../content/site'
import type { Theme } from '../useTheme'

interface Props {
  theme: Theme
  onToggleTheme: () => void
}

export default function Nav({ theme, onToggleTheme }: Props) {
  return (
    <header className="nav">
      <Link className="nav__brand" to="/" aria-label={studio.name}>
        <img src="/brand/logo.png" alt="" width="32" height="32" />
        <span>{studio.name}</span>
      </Link>
      <nav className="nav__links" aria-label="Seções">
        <Link to="/#jogo">Jogo</Link>
        <Link to="/#estudio">Estúdio</Link>
        <NavLink to="/blog">Blog</NavLink>
      </nav>
      <div className="nav__actions">
        <button
          type="button"
          className="icon-btn"
          onClick={onToggleTheme}
          aria-label={theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
        >
          {theme === 'dark' ? (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            </svg>
          )}
        </button>
        <Link className="btn btn--small" to="/#newsletter">Newsletter</Link>
      </div>
    </header>
  )
}
