## Prosperity Travel — Site vitrine

Lire d’abord : **`docs/SPEC.md`** + **`docs/CHANGELOG.md`**.

### Stack

Astro 7 · TypeScript · Tailwind 4 · output static · Node ≥ 22.12 (éviter Node impair type 23/25).

### Dev

```bash
npm run dev
# ou pour agents :
npx astro dev --background
```

### Règles Cursor

`.cursor/rules/` — scope contrat, palette P0, UI/UX, conventions Astro, placeholders.

### Pages contractuelles

`/`, `/a-propos`, `/services`, `/contact`

### Contenu

- Contact / MSK : `src/data/site.ts`
- Éditorial immersif : `src/data/content.ts`
- Footer : « Design by » + SVG MSK seul (pas de texte doublon)

### Docs Astro

https://docs.astro.build
