import { useState } from 'react'
import { posts, studio } from '../content/site'

const ENDPOINT = import.meta.env.VITE_NEWSLETTER_ENDPOINT as string | undefined

const fmt = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })

type Status = 'idle' | 'sending' | 'ok' | 'error'

export default function Journal() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  async function subscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!ENDPOINT) {
      // sem backend configurado: cai para o e-mail do estúdio
      const subject = encodeURIComponent('Quero receber o diário')
      const body = encodeURIComponent(`Inscrever: ${email}`)
      window.location.href = `mailto:${studio.email}?subject=${subject}&body=${body}`
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('ok')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="section" id="diario">
      <div className="wrap journal">
        <div className="journal__posts">
          <p className="eyebrow">Diário</p>
          <h2>O que estamos construindo</h2>
          <div className="posts">
            {posts.map((p) => (
              <details key={p.slug} className="post reveal">
                <summary>
                  <span className="post__meta">
                    <span className="badge badge--soft">{p.tag}</span>
                    <time dateTime={p.date}>{fmt.format(new Date(p.date + 'T12:00:00'))}</time>
                  </span>
                  <span className="post__title">{p.title}</span>
                  <span className="post__excerpt">{p.excerpt}</span>
                </summary>
                <div className="post__body">
                  {p.body.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>

        <aside className="newsletter reveal" id="newsletter">
          <h3>Newsletter</h3>
          <p>Os textos do diário direto no seu e-mail. Sem frequência fixa, sem spam.</p>
          <form onSubmit={subscribe}>
            <label htmlFor="nl-email" className="sr-only">E-mail</label>
            <input
              id="nl-email"
              type="email"
              required
              placeholder="seu@email.com"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Enviando…' : 'Inscrever'}
            </button>
          </form>
          <p className="form-msg" role="status" aria-live="polite">
            {status === 'ok' && 'Inscrição feita. Obrigado!'}
            {status === 'error' && 'Não foi possível inscrever agora. Tente de novo em instantes.'}
          </p>
        </aside>
      </div>
    </section>
  )
}
