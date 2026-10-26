# Registro de gerações (Magnific)

Tag no Magnific: `studio-hero` (projeto Personal).

| Data | O quê | Modelo | Créditos | Resultado |
|---|---|---|---|---|
| 2026-10-26 | Quadro inicial: logo sobre fundo escuro violeta (edição precisa da logo original) | ideogram-4-5 | 80 | Usado. Fidelidade da forma preservada. |
| 2026-10-26 | Expansão 16:9 do quadro | expand (ideogram) | 50 | **Descartado**: alucinou texto na imagem. Substituído por composição local (`public/brand/keyframe-169.jpg`, degradê + feather). |
| 2026-10-26 | Vídeo da hero, 8 s, 1080p, 16:9, sem áudio, quadro inicial = keyframe | bytedance-seedance-pro-2.5 | 6.320 | Usado. Forma da logo estável, varredura de luz nas arestas, brilho crescente. |

**Total: 6.450 créditos** (saldo antes: 81.255).

## Prompt do vídeo

Cinematic hero background for a game studio. The glossy purple beveled metallic emblem stays perfectly centered and keeps its exact shape and proportions throughout, never morphing or changing. Very slow, smooth push-in toward the emblem. A soft violet light sweep glides across its faceted bevels, catching crisp highlights edge by edge. Fine violet embers and dust motes drift slowly through deep dark volumetric haze, a gentle purple glow pulses behind the emblem. Deep near-black violet environment, premium game-trailer look, shallow depth of field.

## Pós-processo

O clipe termina mais brilhante e mais próximo do que começa, então `public/video/hero.mp4` é um **ping-pong** (frente + reverso, 16 s, H.264, sem áudio) para o loop não ter corte:

```bash
ffmpeg -i hero_original.mp4 -filter_complex "[0:v]split[a][b];[b]reverse[r];[a][r]concat=n=2:v=1:a=0,format=yuv420p" \
  -c:v libx264 -crf 23 -preset slow -movflags +faststart -an public/video/hero.mp4
```

O original sem perdas está no Magnific (download pelo projeto Personal, tag `studio-hero`).
