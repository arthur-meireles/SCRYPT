// Todo o texto do site vive aqui. Os valores marcados com TODO são provisórios.

export const studio = {
  name: 'S-Crypt',
  headline: 'Games independentes, feitos com esmero.',
  subline: 'Design autoral, código sólido e acabamento sem pressa.',
  email: 'contato@s-crypt.example', // TODO
}

export const game = {
  title: 'Party Game Web', // nome de trabalho: o título oficial ainda não foi definido
  status: 'Em desenvolvimento',
  genre: 'Party game',
  platforms: 'Navegador (Web)',
  pitch:
    'Um party game para jogar direto no navegador, construído sobre as mecânicas de pedra, papel e tesoura. O jogo está em desenvolvimento e o processo fica registrado no blog.',
}

export const about = {
  title: 'Ofício, escala pequena, controle total.',
  text: 'Somos um estúdio independente de desenvolvimento de games. Mantemos a equipe enxuta para decidir rápido e responder por cada detalhe, da mecânica ao acabamento. Um projeto por vez, publicado quando está pronto.',
}

export interface Member {
  slug: string
  name: string
  role: string // aparece na frente da carta
  bio: string // aparece no verso
  skills: string[] // chips no verso
  art?: string // retrato da carta, ex.: '/team/pessoa-um.webp' (veja README)
  artPosition?: string // background-position do retrato (padrão: 'center')
  framed?: boolean // true: a arte já traz a própria moldura; o site não desenha a dele
}

// Uma carta por pessoa. Troque os dados e solte o retrato em public/team/.
export const team: Member[] = [
  {
    slug: 'rannyel-lino',
    name: 'Rannyel Lino',
    art: '/team/rannyel-lino.webp',
    artPosition: 'center 40%', // retrato vertical: enquadra capa, rosto e braço
    role: 'Programação', // TODO: confirmar a função
    bio: 'Responsável pelo motor do jogo: gameplay, ferramentas e desempenho. Transforma o design em algo que roda liso.', // TODO
    skills: ['Gameplay', 'Ferramentas', 'Performance'],
  },
  {
    slug: 'luiz-sachez',
    name: 'Luiz Sachez',
    art: '/team/luiz-sachez.webp',
    role: 'Direção e design', // TODO: confirmar a função
    bio: 'Conduz a visão do jogo e desenha as mecânicas, o ritmo e a progressão. Decide o que entra, o que sai e por quê.', // TODO
    skills: ['Game design', 'Direção', 'Narrativa'],
  },
  {
    slug: 'arthur-meireles',
    name: 'Arthur Meireles',
    art: '/team/arthur-meireles.webp',
    framed: true, // a imagem já é a carta inteira, com moldura (2:3, cantos transparentes)
    role: 'Arte e animação', // TODO: confirmar a função
    bio: 'Define a identidade visual, dos personagens aos cenários, e dá vida a tudo em movimento.', // TODO
    skills: ['Direção de arte', 'Animação', 'VFX'],
  },
]

export interface Post {
  slug: string
  title: string
  date: string // ISO
  tag: string // tema
  excerpt: string
  body: string[]
}

// Mais recentes primeiro. Para publicar: adicione um item no topo.
// Os textos abaixo são de exemplo (TODO: substituir pelos reais).
export const posts: Post[] = [
  {
    slug: 'por-que-abrimos-o-estudio',
    title: 'Por que abrimos o estúdio',
    date: '2026-10-26',
    tag: 'Estúdio',
    excerpt: 'A decisão de fazer games por conta própria e de mostrar o processo.',
    body: [
      'Este é o primeiro texto do blog. Aqui registramos o que estamos construindo, o que deu errado e o que aprendemos no caminho.',
      'A newsletter envia cada novo post por e-mail, sem frequência fixa e sem spam.',
    ],
  },
  {
    slug: 'do-prototipo-a-primeira-sala',
    title: 'Do protótipo à primeira sala jogável',
    date: '2026-10-20',
    tag: 'Desenvolvimento',
    excerpt: 'O que mudou quando o protótipo virou um nível de verdade.',
    body: [
      'Texto de exemplo. Substitua por um relato real do desenvolvimento do jogo.',
    ],
  },
  {
    slug: 'linguagem-visual',
    title: 'Em busca da linguagem visual',
    date: '2026-10-12',
    tag: 'Arte',
    excerpt: 'Referências, testes de paleta e as decisões que definiram o estilo.',
    body: [
      'Texto de exemplo. Aqui entram referências, estudos de cor e o raciocínio por trás da direção de arte.',
    ],
  },
  {
    slug: 'ritmo-e-risco',
    title: 'Ritmo e risco: como pensamos o combate',
    date: '2026-10-05',
    tag: 'Design',
    excerpt: 'Princípios de design que guiam cada encontro do jogo.',
    body: [
      'Texto de exemplo. Descreva os princípios de design de combate e os testes que os validaram.',
    ],
  },
  {
    slug: 'uma-semana-de-trabalho',
    title: 'Uma semana de trabalho no estúdio',
    date: '2026-09-28',
    tag: 'Bastidores',
    excerpt: 'Como organizamos o dia a dia de uma equipe pequena.',
    body: [
      'Texto de exemplo. Rotina, ferramentas e o que não funcionou.',
    ],
  },
]

export const tags = Array.from(new Set(posts.map((p) => p.tag)))
