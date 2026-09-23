## 2026-09-23 — V1.3 Copy anti-jargon IA

- Réécriture complète de `src/data/content.ts` : ton concret Bamako, sans « premium / sur mesure / planifier mon voyage »
- Metas et textes UI nettoyés (pages + layout)
- Rule Cursor `.cursor/rules/copy-voice.mdc` pour empêcher le retour du jargon IA


### Design & UX
- Accueil immersif style Wilderness (hero plein écran, destinations, expériences, parcours, CTA)
- Contenu riche placeholder dans `src/data/content.ts` (toujours périmètre voyage / billetterie / pèlerinage)
- Animations : reveal au scroll, parallax léger hero, zoom image au hover, header sticky transparent → nuit
- Pages À propos / Services / Contact redesignées (photos, rythme clair/sombre)
- Palette **P0 confirmée**

### Footer MSK
- Correction : **« Design by » + SVG seul** (le fichier SVG contient déjà « MSK CREATION »)
- SVG footer : viewBox recadré + texte ivoire lisible sur fond nuit
- Plus de doublon texte « MSK CREATION » à côté du logo

### Organisation repo
```
docs/
  SPEC.md
  CHANGELOG.md          ← ce fichier
  contrat/              Contrat Site Vitrine.pdf
  cahier/               Cahier des charges .docx
  brand/                msk-creation.svg (source)
  references/           palettes, moodboard, captures
src/                    code Astro
public/                 assets web (favicon, msk-creation.svg)
```
Racine nettoyée : plus de PDF / DOCX / captures en vrac.

### Technique
- Composants : `Header`, `Footer`, `PageHero`, `WhatsAppFab`
- Script motion : `src/scripts/motion.ts`
- Images placeholder Unsplash (à remplacer par photos client)

### À faire ensuite
- Endpoint formulaire HTTPS
- sitemap / robots / schema SEO
- Photos & textes client définitifs
- Domaine + déploiement
