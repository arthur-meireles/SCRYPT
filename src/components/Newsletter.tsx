import { useState } from 'react'
import { studio } from '../content/site'

const ENDPOINT = import.meta.env.VITE_NEWSLETTER_ENDPOINT as string | undefined

type Status = 'idle' | 'sending' | 'ok' | 'error'

export default function Newsletter({ className = '' }: { className?: string }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  async function subscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!ENDPOINT) {
      // sem backend configurado: cai para o e-mail do estúdio
      const subject = encodeURIComponent('Quero receber o blog')
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
    <aside className={`newsletter ${className}`} id="newsletter">
      <h3>Newsletter</h3>
      <p>Cada novo post do blog direto no seu e-mail. Sem frequência fixa, sem spam.</p>
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
  )
}
