# Prosperity Travel — Site vitrine

<p align="center">
  <img src="public/brand/logo-horizontal-fond-clair.png" alt="Prosperity Travel" width="320" />
</p>

<p align="center">
  <strong>Agence de voyage · Billetterie · Tourisme</strong><br/>
  Bamako, Mali
</p>

<p align="center">
  <img src="public/brand/embleme.png" alt="Emblème Prosperity Travel" width="96" />
</p>

---

Site vitrine **statique** pour Prosperity Travel (MSK CREATION — contrat MSK-CONTRAT-2026-114).  
Stack : **Astro 7 · TypeScript · Tailwind 4 · output static**.

> **Statut :** en cours de validation client — déploiement **preview** uniquement (pas de production / domaine définitif).

---

## Aperçu marque

| Asset | Fichier |
|-------|---------|
| Logo horizontal (fond clair) | [`public/brand/logo-horizontal-fond-clair.png`](public/brand/logo-horizontal-fond-clair.png) |
| Logo horizontal (blanc) | [`public/brand/logo-horizontal-blanc.png`](public/brand/logo-horizontal-blanc.png) |
| Emblème couleur | [`public/brand/embleme.png`](public/brand/embleme.png) |
| Emblème blanc | [`public/brand/embleme-blanc.png`](public/brand/embleme-blanc.png) |
| Charte Travel | [`docs/brand/CHARTE-TRAVEL.md`](docs/brand/CHARTE-TRAVEL.md) |

### Palette officielle

| Token | Hex | Usage |
|-------|-----|--------|
| Azur | `#2F8AD0` | Accents, CTA fond clair |
| Azur profond | `#123F70` | Header scroll, footer, sections sombres |
| Or Prosperity | `#C9A24E` | Accents, CTA sur fond sombre |
| Craie | `#F5EFE0` | Fonds chauds clairs |
| Blanc | `#FFFFFF` | Fond page / formulaires |

---

## Pages

| Route | Contenu |
|-------|---------|
| `/` | Accueil — hero immersif, services, destinations |
| `/a-propos` | Identité, mission / vision, mot du directeur, équipe |
| `/services` | Billetterie, Hadj, Umrah |
| `/contact` | Hero équipe, horaires, formulaire, canaux, carte |

### Équipe (photos `public/images/team/`)

| Membre | Rôle | Fichier |
|--------|------|---------|
| Mamadou B. Traoré | PCA | `mamadou-traore.webp` |
| Siriman Sissoko | Gérant | `siriman-sissoko.webp` |
| Amadou Bah | Responsable Hadj & Umrah | `amadou-bah.webp` |
| Astan Traoré | Comptable | `astan-traore.webp` |
| Soumaïla Koné | Responsable billetterie | `soumaila-kone.webp` |
| Tidiane Dianka Samadiary | Billetterie & divers | `tidiane-dianka.webp` |
| Photo groupe / bureau | Scènes | `equipe-portrait.webp`, `equipe-bureau.webp` |
| Hero Contact | Bureau | `contact-hero.jpg` |

> Photo directeur (Brehima Traoré) : placeholder BT — à intégrer dès réception.

---

## Démarrage local

**Prérequis :** Node.js **≥ 22.12** (LTS pair ; éviter Node impair 23/25).

```bash
npm install
npm run dev
```

| Script | Description |
|--------|-------------|
| `npm run dev` | Serveur local (Astro) |
| `npm run build` | Build static → `dist/` |
| `npm run preview` | Prévisualiser le build |

---

## Structure du dépôt

```
src/
  components/   Header, Footer, heroes, équipe, contact…
  data/         site.ts (contact) · content.ts (éditorial)
  layouts/      BaseLayout.astro
  pages/        /, /a-propos, /services, /contact
  styles/       tokens.css (charte) · global.css
public/
  brand/        Logos Prosperity Travel
  images/       Photos WebP / JPG (équipe, heroes, destinations)
docs/
  SPEC.md       Spec + périmètre contrat
  CHANGELOG.md  Historique
  brand/        CHARTE-TRAVEL.md
  contrat/      PDF contrat
```

### Données à valider client

Tout contact / WhatsApp / Maps / réseaux → **`src/data/site.ts` uniquement**.  
Éditorial → `src/data/content.ts`.

---

## Documentation

| Doc | Rôle |
|-----|------|
| [docs/SPEC.md](docs/SPEC.md) | Spec + périmètre contrat |
| [docs/CHANGELOG.md](docs/CHANGELOG.md) | Changelog |
| [docs/brand/CHARTE-TRAVEL.md](docs/brand/CHARTE-TRAVEL.md) | Charte visuelle |
| [AGENTS.md](AGENTS.md) | Consignes agents / stack |

---

## Déploiement Vercel (preview)

Objectif : URL de **preview** pour relecture client — **ne pas** partager / promouvoir en production tant que non validé.

### URLs actuelles (équipe `mskcreations-projects`)

| Type | URL |
|------|-----|
| **Preview (à partager au client)** | https://prosperity-travel-9dvtyyle1-mskcreations-projects.vercel.app |
| Inspect | https://vercel.com/mskcreations-projects/prosperity-travel/H4RU8ftbNaEhzgkDVUduWen4Gd8b |
| Projet | https://vercel.com/mskcreations-projects/prosperity-travel |

> Le premier deploy CLI a automatiquement créé un alias `prosperity-travel.vercel.app` — **ne pas le traiter comme livrable client**. Utiliser uniquement le lien **Preview** ci-dessus. Ne jamais lancer `vercel --prod` avant validation.

### Paramètres projet

| Réglage | Valeur |
|---------|--------|
| Framework | Astro |
| Build command | `npm run build` |
| Output | `dist` |
| Node | `22.x` |
| Protection SSO | désactivée (accès client sans compte Vercel) |

### CLI

```bash
# Lier le projet (une fois)
npx vercel link --scope mskcreations-projects --project prosperity-travel

# Preview uniquement (sans --prod)
npx vercel deploy --yes --scope mskcreations-projects
```

### Branches

- `dev` — itération + previews
- `main` — réservé à la validation / prod ultérieure

---

## Périmètre contractuel

**Inclus :** agence de voyage, billetterie, tourisme / pèlerinage (Hadj & Umrah).  
**Hors scope V1 :** e-commerce, multilangue, newsletter, autres activités Groupe.

Priorité : **Contrat > SPEC > cahier client**.

---

## Crédit

Design & intégration — [MSK CREATION](https://mskcreation.net)

<p>
  <img src="public/msk-creation.svg" alt="MSK CREATION" height="28" />
</p>
