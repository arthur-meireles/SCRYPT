# lp-studio

Site do estúdio de games (3 pessoas, 1 jogo em desenvolvimento, diário/newsletter). Vite + React + TypeScript, tema escuro/claro com o roxo da marca.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

## Onde editar

- **Textos, jogo, equipe e posts do diário:** `src/content/site.ts` (itens com `TODO` são provisórios).
- **Novo post:** adicione um objeto no topo de `posts`.
- **Newsletter:** defina `VITE_NEWSLETTER_ENDPOINT` (veja `.env.example`) com um endpoint que aceite `POST { "email": "..." }`. Sem ele, o formulário abre o e-mail do estúdio.
- **Vídeo da hero:** `public/video/hero.mp4` (como foi gerado: `docs/registro-geracoes.md`).
