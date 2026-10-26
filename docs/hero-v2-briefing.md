# Hero v2: vídeo claro, 5 a 6 ângulos, cortes enérgicos

## Estado
`public/video/hero.mp4` é um **provisório**: o clipe escuro gerado antes, invertido para tom claro e remontado em 6 cortes secos (enquadramentos de zoom, inclinação e espelho do mesmo take). Não são ângulos reais de câmera. O definitivo precisa ser gerado no Magnific (o conector estava indisponível quando o pedido chegou).

## Direção
- Tom **claro**: fundo branco-lavanda, logo roxa metálica com brilho. O texto do hero é escuro.
- **6 planos** com pontos de vista diferentes da logo, cortes secos (sem fusão), ritmo rápido (~1,2 a 1,8 s cada), total 8 a 10 s, loop.
- Mesmo objeto em todos os planos: emblema roxo facetado, forma e proporção fiéis ao original (`public/brand/logo-source.png`, que já é fundo claro).

## Planos
1. Frontal aberto, logo centralizada, luz varrendo as arestas.
2. Close extremo da quina superior esquerda, câmera deslizando pelo chanfro.
3. Três-quartos baixo (contra-plongée), logo monumental, leve inclinação.
4. Lateral/asa direita em perfil, profundidade de campo rasa, partículas.
5. Plongée de cima, rotação lenta de 30°.
6. Pull-out rápido, revelando a logo inteira (fecha em quadro parecido com o 1 para o loop).

## Como gerar
- Quadros: partir de `logo-source.png` (fundo claro) e gerar cada ângulo com a ferramenta de troca de câmera / referência; checar fidelidade da forma.
- Clipes: Seedance 2.5, 1080p, 16:9, sem áudio. Para cortes realmente secos, um clipe curto (4 s) por plano, depois montar com ffmpeg (corte reto) em vez de pedir cortes ao modelo.
- Custo de referência medido: 8 s em 1080p = 6.320 créditos (~790/s). 6 clipes de 4 s ≈ 19 mil créditos. Alternativa mais barata: 720p para os planos.
- Prompt-base de cada plano: "light airy studio, white-lavender background, glossy purple faceted metallic emblem, [ângulo], crisp highlights sweeping across bevels, fine violet dust, no text, shape never changes".
- Registrar tudo em `docs/registro-geracoes.md`.
