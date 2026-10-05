# SPEC — Site vitrine Prosperity Travel

**Version :** 1.5-charte  
**Palette active :** Charte officielle Travel — Bleu azur `#2F8AD0` · Azur profond `#123F70` · Or `#C9A24E` · Craie `#F5EFE0` · Blanc  
**Source marque :** `docs/brand/CHARTE-TRAVEL.md`  
**Archive PDF :** `docs/brand/Prosperity-Mises-en-situation.pdf`

### Organisation documentation

| Dossier | Contenu |
|---------|---------|
| `docs/contrat/` | PDF contrat |
| `docs/cahier/` | Cahier des charges |
| `docs/brand/` | Charte Travel MD, PDF archive, assets marque |
| `docs/references/` | Moodboard / références (palettes F0 obsolètes retirées) |
| `public/brand/` | Logos & hero web |

---

## Statut données client

| Élément | Statut |
|---------|--------|
| Palette | **Charte Travel officielle** (azur / or / craie) |
| Logos / assets marque | Intégrés depuis charte (`public/brand/`) |
| WhatsApp / tél / e-mail / adresse / Maps | **Placeholders** (`src/data/site.ts`) issus cahier + contrat — à remplacer après validation |
| Nom de domaine | Pas encore pris |
| Textes & photos définitifs | Placeholders éditoriaux OK ; mission/valeurs = charte |
| Réseaux sociaux (URLs) | Placeholders Facebook / Instagram |

> Règle : toute donnée contact/marketing se modifie **uniquement** dans `src/data/site.ts` jusqu’à validation client.

---

## 1. Périmètre contractuel (source de vérité)

Le site est un **site vitrine** pour le périmètre exclusif :

> **Agence de voyage – Billetterie – Tourisme**

### Objectifs (contrat §02)

1. Représenter professionnellement l’agence en ligne  
2. Présenter les services (Agence de voyage – Billetterie – Tourisme)  
3. Générer des clients (prise de contact / WhatsApp)  
4. Être visible sur Google (SEO on-page)

### Pages obligatoires (contrat §03)

| # | Route | Contenu contractuel |
|---|--------|---------------------|
| 1 | `/` | Présentation agence, services phares, CTA contact |
| 2 | `/a-propos` | Histoire, valeurs, équipe, crédibilité |
| 3 | `/services` | Vente de billets d’avion · Gestion du pèlerinage |
| 4 | `/contact` | Formulaire, WhatsApp, adresse, Google Maps |

### Prestations à présenter (contrat §04)

- Billetterie – Voyage  
- Organisation de pèlerinage  

### Fonctionnalités incluses (contrat §04)

- Design moderne, mobile + desktop  
- Navigation rapide et intuitive  
- Chargement optimisé (connexions Mali)  
- HTTPS  
- Bouton WhatsApp sur **toutes** les pages  
- Formulaire de contact sécurisé  
- Liens réseaux sociaux actifs  
- Structure SEO + mots-clés : *Agence de voyage*, *billets d’avion*, *Pèlerinage*

### Hors périmètre (ne pas implémenter sur ce site)

Le cahier client liste d’autres activités (BTP, restauration, gardiennage, or, formation, etc.).  
**Elles sont hors contrat site vitrine** et ne doivent **pas** apparaître dans la navigation, le SEO, ou les pages.

Également hors V1 contractuelle (éventuelle phase 2 / maintenance) :

- E-commerce / catalogue produits  
- Multilingue  
- Newsletter  
- Moteur de recherche interne  
- Avis / commentaires  
- Réservation hôtels / location voitures en ligne  
- Back-office catalogue (sauf mention maintenance séparée)

> En cas de doute : **le contrat prime**. Le cahier client sert de contexte métier uniquement pour enrichir voyage / billetterie / tourisme / pèlerinage.

---

## 2. Identité & positionnement

| Élément | Décision |
|---------|----------|
| Marque affichée | **Prosperity Travel** (branche voyage du groupe) |
| Entité légale | Prosperity Management Mali SARL |
| Ton | Premium, rassurant, professionnel, hospitalité |
| Marché | Bamako / Mali · voyageurs particuliers & professionnels |
| Différenciation | Conciergerie voyage locale haut de gamme, billetterie, pèlerinage |

**Inspiration UX :** [Wilderness Destinations](https://www.wildernessdestinations.com/) — storytelling immersif, hero plein écran, grilles destinations, listes expériences, CTA fort.  
**Originalité :** ancrage Malien, pèlerinage, billetterie, identité charte Travel (azur / or / craie) — **pas de clone**. Contenu : `src/data/content.ts` + `docs/brand/CHARTE-TRAVEL.md`.  

**Motion V1 :** reveal scroll, parallax hero léger, zoom image hover, header sticky. `prefers-reduced-motion` respecté.

---

## 3. Design system — palette charte Travel

Source : `docs/brand/CHARTE-TRAVEL.md`.

| Token | Nom | Hex | Usage |
|-------|-----|-----|--------|
| `--color-azur` | Bleu azur | `#2F8AD0` | Dominant (~60 %), CTA sur fond clair |
| `--color-azur-profond` | Bleu azur profond | `#123F70` | Header, footer, sections sombres |
| `--color-or` | Or Prosperity | `#C9A24E` | Accents, filets, CTA sur fonds foncés (~10 %) |
| `--color-craie` / `--color-ivoire` | Craie | `#F5EFE0` | Fonds chauds clairs |
| `--color-blanc` | Blanc | `#FFFFFF` | Fond page / formulaires (~30 %) |
| `--color-nuit` | Alias | → azur-profond | Compat classes existantes |
| `--gradient-or-metal` | Or métallisé | dérivé de `#C9A24E` | Filets, accents |

### Règles CTA (charte)

- Fond sombre → CTA or + texte blanc  
- Fond clair → CTA azur / azur-profond + texte blanc (**pas** d’or plein sur fond clair)

### Typographie

- **Wordmark marque :** PNG officiels (`public/brand/`) uniquement  
- **Display / titres :** serif expressive (Cormorant Garamond)  
- **Corps / UI :** sans-serif lisible (DM Sans) — **pas** Inter / Roboto / Arial  
- Hiérarchie claire : H1 hero ≤ 1 ligne d’accroche + 1 sous-texte court

### Principes UI/UX (expert)

1. **Premier viewport = une composition** : logo PNG + 1 headline + 1 phrase + CTA + image plein cadre  
2. **Pas de cards dans le hero** ; cards seulement si interaction (formulaire, service cliquable)  
3. **Hero full-bleed** (pas d’image inset / collage)  
4. **Pas d’overlays marketing** (badges, chips) ; overlay azur pour lisibilité logo OK  
5. Alternance sections **craie** / **azur-profond**  
6. Motion : 2–3 animations intentionnelles — élégantes, lentes, pas de bounce  
7. WhatsApp flottant discret mais toujours visible  
8. Performance Mali : images optimisées, lazy-load, CSS léger, peu de JS  
9. Header / footer = logo **horizontal** (pas emblème seul)
---

## 4. Architecture des pages (détail)

### `/` Accueil

1. Hero immersif (photo voyage / aéroport / destination) + logo Prosperity Travel + CTA Contact + CTA WhatsApp  
2. Bandeau promesse (1 phrase)  
3. 3 services phares (Voyage · Billetterie · Pèlerinage) — liens vers `/services`  
4. Bloc confiance (valeurs courtes / chiffres si fournis)  
5. CTA final contact  

### `/a-propos`

Histoire, philosophie, valeurs (intégrité, professionnalisme, satisfaction client… adaptées au voyage), équipe (si photos fournies), crédibilité.

### `/services`

Deux blocs principaux + intro tourisme :

1. **Billetterie / Voyage** — billets d’avion, conseil, accompagnement  
2. **Pèlerinage** — organisation, accompagnement  
3. CTA devis / contact / WhatsApp  

### `/contact`

Formulaire (nom, email, téléphone, sujet, message) · WhatsApp · téléphone · email · adresse · carte Google Maps · réseaux sociaux.

---

## 5. SEO & contenu

- Langue V1 : **français** uniquement  
- Title / meta uniques par page  
- H1 unique ; balises Open Graph  
- Mots-clés prioritaires : agence de voyage Mali, billets d’avion Bamako, pèlerinage, Prosperity Travel  
- `sitemap.xml`, `robots.txt`  
- URLs propres en français  
- Schema.org : `TravelAgency` + `LocalBusiness` (si données complètes)

Contenus textes/photos : **fournis par le client** (contrat §07). Placeholders élégants en attendant.

---

## 6. Technique

| Choix | Détail |
|-------|--------|
| Framework | Astro (static output) — Node ≥ 22.12 |
| Styles | Tailwind CSS + tokens CSS variables |
| Formulaires | Endpoint sécurisé (Formspree / Astro Actions / API MSK) — HTTPS |
| WhatsApp | Lien `wa.me` + numéro client |
| Maps | Embed Google Maps adresse client |
| Images | `astro:assets` + formats modernes |
| Accessibilité | Contraste AA, focus visibles, labels formulaires |
| Hébergement | Assuré par MSK Création (contrat §05) |

Structure projet cible :

```
src/
  components/   # Header, Footer, WhatsApp, Hero, ServiceCard…
  layouts/      # BaseLayout.astro
  pages/        # index, a-propos, services, contact
  styles/       # tokens.css, global.css
  assets/       # images optimisées
public/         # favicon, robots.txt
docs/           # SPEC + références
.cursor/rules/  # règles agent
```

---

## 7. Coordonnées (placeholders actifs)

Source unique runtime : **`src/data/site.ts`**.

| Champ | Valeur provisoire (cahier) |
|-------|----------------------------|
| Tél / WhatsApp | +223 70 86 91 91 (alt. 70 86 92 92) |
| E-mail | managementprosp@gmail.com |
| Adresse | Kalaban Coura ACI, Bamako |
| Maps | Embed Bamako provisoire |
| Réseaux | Facebook / Instagram génériques |
| Interlocuteurs | Mamadou Boussanga Traoré (cahier) · SIRIMAN SISSOKO (contrat) |

Horaires affichés : fictifs (`Lun – Sam · 8h00 – 18h00`) jusqu’à validation.

---

## 8. Planning (contrat §06) — rappel

Cadrage → Maquettes → Validation → Développement → Contenus → Recette → Mise en ligne (~3 semaines).  
Deux cycles de corrections inclus.

**Étape actuelle :** Cadrage — validation structure, charte, brief design (cette SPEC).

---

## 9. Checklist contrat — conformité

| Exigence contrat | Statut |
|------------------|--------|
| 4 pages (Accueil, À propos, Services, Contact) | OK (structure) |
| Périmètre Voyage / Billetterie / Tourisme / Pèlerinage | OK |
| Design moderne mobile + desktop | En cours (fondation P0) |
| Navigation claire | OK |
| WhatsApp toutes pages | OK (FAB + footer) |
| Formulaire de contact | UI OK · endpoint HTTPS à brancher |
| Liens réseaux sociaux | OK (placeholders) |
| Adresse + Google Maps | OK (placeholders Bamako) |
| SEO mots-clés voyage / billets / pèlerinage | Partiel (titles/metas) · sitemap/robots à ajouter |
| Perf connexions Mali | À peaufiner (images, fonts) |
| HTTPS + hébergement MSK | Mise en ligne (plus tard) |
| Charte graphique livrée avec le site | En cours (P0 + tokens) |
| Crédit prestataire footer « Design by » + logo SVG MSK | OK (texte inclus dans le SVG) |
| Contenu immersif + motion (inspiration Wilderness) | OK (placeholders) |
| Contenus client définitifs | Placeholders jusqu’à validation |

## 10. Critères d’acceptation V1

- [x] 4 pages contractuelles navigables  
- [x] Palette P0 confirmée + tokens  
- [x] WhatsApp sur toutes les pages  
- [x] Footer avec crédit MSK CREATION  
- [x] Maps + coordonnées + réseaux (placeholders)  
- [ ] Responsive / design premium finalisé  
- [ ] Formulaire sécurisé (endpoint)  
- [ ] SEO complet (sitemap, robots, schema)  
- [ ] Images & textes client validés  
- [ ] Domaine + HTTPS + déploiement  

---

## 11. Décisions ouvertes

1. ~~Palette P0~~ → **confirmée**  
2. Nom de domaine (pas encore pris)  
3. Remplacer placeholders contact / WhatsApp / Maps / réseaux après validation  
4. Photos / textes définitifs  
5. Fournisseur formulaire (Formspree vs endpoint MSK)  

---

*Document de travail MSK Création — à valider avec le référent Prosperity Management Mali.*
