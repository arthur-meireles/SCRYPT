# S-Crypt: site do estúdio

Estúdio indie de games. Vite + React + TypeScript, tema escuro/claro com o roxo da marca, blog com pesquisa e temas.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

## Onde editar

- **Textos, jogo, equipe e posts:** `src/content/site.ts` (itens com `TODO` são provisórios).
- **Novo post do blog:** adicione um objeto no topo de `posts`. O `tag` vira o tema (filtro na página `/blog`); a pesquisa varre título, resumo, tema e texto.
- **Newsletter:** defina `VITE_NEWSLETTER_ENDPOINT` (veja `.env.example`) com um endpoint que aceite `POST { "email": "..." }`. Sem ele, o formulário abre o e-mail do estúdio.
- **Vídeo da hero:** `public/video/hero.mp4` (provisório; veja `docs/hero-v2-briefing.md`).

## Cartas da equipe

Cada pessoa é uma carta que vira no hover (no celular, ao tocar). Para colocar o retrato gerado por IA:

1. Salve a imagem em `public/team/` (ex.: `pessoa-um.webp`).
2. Em `src/content/site.ts`, no membro, preencha `art: '/team/pessoa-um.webp'`.

Medidas: o retrato aparece numa janela com topo arredondado, proporção aproximada **4:5** (sugestão 800×1000 px), com o rosto no terço superior/centro. Sem `art`, a carta mostra a logo como placeholder. A moldura, a faixa com o nome e o verso são feitos em CSS (`src/styles.css`, bloco "cartas").

## Hospedagem

O blog usa rotas (`/blog`, `/blog/:slug`). Em servidor Apache/cPanel o `public/.htaccess` já devolve o `index.html` para essas rotas; em outros hosts configure o mesmo fallback de SPA.
