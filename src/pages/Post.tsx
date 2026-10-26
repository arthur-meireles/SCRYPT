import { Link, useParams } from 'react-router-dom'
import { posts } from '../content/site'
import { formatDate, readingMinutes } from '../format'
import Newsletter from '../components/Newsletter'

export default function Post() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <section className="section post-page">
        <div className="wrap wrap--narrow">
          <h1>Post não encontrado</h1>
          <p className="lead">Esse endereço não existe ou foi removido.</p>
          <Link className="btn" to="/blog">Voltar ao blog</Link>
        </div>
      </section>
    )
  }

  return (
    <article className="section post-page">
      <div className="wrap wrap--narrow">
        <Link className="back" to="/blog">← Blog</Link>
        <p className="post__meta">
          <Link to={`/blog?tema=${encodeURIComponent(post.tag)}`} className="badge badge--soft">{post.tag}</Link>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>{readingMinutes(post.body)} min de leitura</span>
        </p>
        <h1>{post.title}</h1>
        <div className="prose">
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <Newsletter className="newsletter--wide" />
      </div>
    </article>
  )
}
