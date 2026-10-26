import type Lenis from 'lenis'

// A instância do Lenis é criada uma vez no Layout; as páginas rolam por aqui.
let instance: Lenis | null = null

export function setLenis(l: Lenis | null) {
  instance = l
}

export function scrollToHash(hash: string) {
  // a página mudou de altura: o Lenis precisa recalcular o limite antes de rolar
  instance?.resize()
  const el = hash ? document.querySelector(hash) : null
  if (!el) {
    if (instance) instance.scrollTo(0, { immediate: true })
    else window.scrollTo({ top: 0, behavior: 'instant' })
    return
  }
  // o recuo da barra vem do scroll-margin-top das seções (o Lenis o respeita)
  if (instance) instance.scrollTo(el as HTMLElement)
  else el.scrollIntoView({ behavior: 'smooth' })
}
