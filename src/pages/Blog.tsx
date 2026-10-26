import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { posts, tags } from '../content/site'
import { formatDate, readingMinutes } from '../format'
import Newsletter from '../components/Newsletter'

const norm = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

export default function Blog() {
  const [params, setParams] = useSearchParams()
  const q = params.get('q') ?? ''
  const tema = params.get('tema') ?? ''

  const results = useMemo(() => {
    const needle = norm(q.trim())
    return posts.filter((p) => {
      if (tema && p.tag !== tema) return false
      if (!needle) return true
      return norm([p.title, p.excerpt, p.tag, ...p.body].join(' ')).includes(needle)
    })
  }, [q, tema])

  function update(next: { q?: string; tema?: string }) {
    const n = new URLSearchParams(params)
    for (const [k, v] of Object.entries(next)) {
      if (v) n.set(k, v)
      else n.delete(k)
    }
    setParams(n, { replace: true })
  }

  return (
    <>
      <section className="blog-head">
        <div className="wrap">
          <p className="eyebrow">Blog</p>
          <h1>Diário de desenvolvimento</h1>
          <p className="lead">Bastidores, decisões de design e arte do que estamos construindo.</p>

          <div className="blog-tools">
            <label htmlFor="blog-q" className="sr-only">Pesquisar no blog</label>
            <input
              id="blog-q"
              type="search"
              className="search"
              placeholder="Pesquisar posts"
              value={q}
              onChange={(e) => update({ q: e.target.value })}
            />
            <div className="chips chips--filter" role="group" aria-label="Temas">
              <button
                type="button"
                className={!tema ? 'is-on' : ''}
                aria-pressed={!tema}
                onClick={() => update({ tema: '' })}
              >
                Todos <span>{posts.length}</span>
              </button>
              {tags.map((t) => (
                <button
                  key={t}
                  type="button"
                  className={tema === t ? 'is-on' : ''}
                  aria-pressed={tema === t}
                  onClick={() => update({ tema: tema === t ? '' : t })}
                >
                  {t} <span>{posts.filter((p) => p.tag === t).length}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section blog-list">
        <div className="wrap">
          <p className="blog-count" role="status" aria-live="polite">
            {results.length} {results.length === 1 ? 'post' : 'posts'}
            {tema && <> em <strong>{tema}</strong></>}
            {q && <> para “{q}”</>}
          </p>

          {results.length === 0 ? (
            <div className="empty">
              <p>Nada encontrado.</p>
              <button type="button" className="btn btn--ghost" onClick={() => setParams({}, { replace: true })}>
                Limpar filtros
              </button>
            </div>
          ) : (
            <div className="grid-posts">
              {results.map((p) => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="post-card">
                  <span className="post__meta">
                    <span className="badge badge--soft">{p.tag}</span>
                    <time dateTime={p.date}>{formatDate(p.date)}</time>
                  </span>
                  <span className="post__title">{p.title}</span>
                  <span className="post__excerpt">{p.excerpt}</span>
                  <span className="post-card__foot">{readingMinutes(p.body)} min de leitura</span>
                </Link>
              ))}
            </div>
          )}

          <Newsletter className="newsletter--wide" />
        </div>
      </section>
    </>
  )
}
