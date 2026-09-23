# Prosperity Travel — Site vitrine

Agence de voyage · Billetterie · Tourisme — Bamako.

| Doc | Rôle |
|-----|------|
| [docs/SPEC.md](docs/SPEC.md) | Spec + périmètre contrat |
| [docs/CHANGELOG.md](docs/CHANGELOG.md) | Historique des changements |
| `docs/contrat/` | Contrat PDF |
| `docs/cahier/` | Cahier des charges |
| `docs/references/` | Palettes, moodboard |
| `docs/brand/` | Logo MSK source |

## Démarrage

```bash
npm install
npm run dev
```

Node.js **≥ 22.12** (LTS pair recommandé).

## Structure

```
src/components/  Header, Footer, heroes…
src/data/        site.ts (contact) · content.ts (éditorial)
src/layouts/     BaseLayout.astro
src/pages/       /, /a-propos, /services, /contact
src/styles/      tokens P0 + global + motion
public/          favicon, msk-creation.svg
```
