import { Link } from 'react-router-dom'
import { posts } from '../content/site'
import { formatDate } from '../format'
import Newsletter from './Newsletter'

export default function Journal() {
  return (
    <section className="section" id="diario">
      <div className="wrap journal">
        <div>
          <p className="eyebrow">Diário</p>
          <h2>O que estamos construindo</h2>
          <div className="posts">
            {posts.slice(0, 3).map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="post reveal">
                <span className="post__meta">
                  <span className="badge badge--soft">{p.tag}</span>
                  <time dateTime={p.date}>{formatDate(p.date)}</time>
                </span>
                <span className="post__title">{p.title}</span>
                <span className="post__excerpt">{p.excerpt}</span>
              </Link>
            ))}
          </div>
          <Link className="btn btn--ghost journal__all" to="/blog">Abrir o blog</Link>
        </div>
        <Newsletter className="reveal" />
      </div>
    </section>
  )
}
