// Todo o texto do site vive aqui. Os valores marcados com TODO são provisórios.

export const studio = {
  name: 'Studio S', // TODO: nome real do estúdio
  tagline: 'Jogos feitos por três pessoas, do jeito devagar e bem feito.',
  email: 'oi@studio-s.example', // TODO
}

export const game = {
  title: 'Projeto Aurora', // TODO: nome real do jogo
  status: 'Em desenvolvimento',
  genre: 'Ação · Aventura', // TODO
  platforms: 'PC', // TODO
  pitch:
    'Um mundo em ruínas, uma luz que não se apaga e escolhas que mudam o caminho. Nosso primeiro jogo nasce de um protótipo e cresce com a comunidade acompanhando cada passo.', // TODO
  wishlistUrl: '#', // TODO: link Steam
}

export const about = {
  title: 'Somos três.',
  text: 'Um estúdio pequeno por escolha: decisões rápidas, zero burocracia e cuidado em cada detalhe. Fazemos um jogo por vez e mostramos o processo sem filtro.',
}

export const team = [
  { name: 'Pessoa Um', role: 'Direção e design', initials: 'P1' }, // TODO
  { name: 'Pessoa Dois', role: 'Programação', initials: 'P2' }, // TODO
  { name: 'Pessoa Três', role: 'Arte e animação', initials: 'P3' }, // TODO
]

export interface Post {
  slug: string
  title: string
  date: string // ISO
  tag: string
  excerpt: string
  body: string[]
}

// Mais recentes primeiro. Para publicar: adicione um item no topo.
export const posts: Post[] = [
  {
    slug: 'primeiro-diario',
    title: 'Por que abrimos o estúdio',
    date: '2026-10-26',
    tag: 'Estúdio',
    excerpt: 'Três pessoas, uma ideia e a decisão de fazer tudo à vista.',
    body: [
      'Este é o primeiro texto do diário. Aqui contamos o que estamos construindo, o que deu errado e o que aprendemos.',
      'A newsletter chega no seu e-mail sempre que publicamos algo novo, sem frequência fixa e sem spam.',
    ],
  },
  {
    slug: 'prototipo',
    title: 'Do protótipo à primeira sala jogável',
    date: '2026-10-20',
    tag: 'Desenvolvimento',
    excerpt: 'O que mudou quando o protótipo virou um nível de verdade.',
    body: [
      'Texto de exemplo. Substitua por um relato real do desenvolvimento do jogo.',
    ],
  },
]
