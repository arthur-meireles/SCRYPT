const fmt = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })

export const formatDate = (iso: string) => fmt.format(new Date(iso + 'T12:00:00'))

export const readingMinutes = (paragraphs: string[]) =>
  Math.max(1, Math.round(paragraphs.join(' ').split(/\s+/).length / 200))
