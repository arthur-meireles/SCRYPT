import { Link } from 'react-router-dom'
import { studio } from '../content/site'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__row">
        <span className="footer__brand">
          <img src="/brand/logo.png" alt="" width="24" height="24" />
          {studio.name}
        </span>
        <nav className="footer__links" aria-label="Rodapé">
          <Link to="/blog">Blog</Link>
          <a href={`mailto:${studio.email}`}>{studio.email}</a>
        </nav>
        <span>© {year} {studio.name}</span>
      </div>
    </footer>
  )
}
