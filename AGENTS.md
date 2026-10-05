## Prosperity Travel — Site vitrine

Lire d’abord : **`docs/SPEC.md`** + **`docs/CHANGELOG.md`** + **`docs/brand/CHARTE-TRAVEL.md`**.

### Stack

Astro 7 · TypeScript · Tailwind 4 · output static · Node ≥ 22.12 (éviter Node impair type 23/25).

### Dev

```bash
npm run dev
# ou pour agents :
npx astro dev --background
```

### Règles Cursor

`.cursor/rules/` — scope contrat, charte Travel, UI/UX, conventions Astro, placeholders.

### Pages contractuelles

`/`, `/a-propos`, `/services`, `/contact`

### Contenu

- Contact / MSK / logos : `src/data/site.ts`
- Éditorial : `src/data/content.ts`
- Charte marque : `docs/brand/CHARTE-TRAVEL.md`
- Assets web : `public/brand/`
- Footer : « Design by » + SVG MSK seul (pas de texte doublon)

### Docs Astro

https://docs.astro.build
