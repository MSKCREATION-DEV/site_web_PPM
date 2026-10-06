# Changelog — Prosperity Travel

## 2026-10-06 — Accueil restauré + Services bandes 50/50 + photos locales

- **Accueil** : structure validée (hero logo, manifesto craie, destinations, liste expériences, parcours, CTA) + polish léger
- **Services** : intro + ancres 01–05 + bandes éditoriales 50/50 ; images inset forme panneau adouci (fondu 4 côtés) ; CTA horaires
- **Contact** : hero split immersif, horaires éditoriaux, formulaire line-fields, carte fondue
- Photos : `public/images/*.webp` (pack Travel) — Unsplash retiré ; `hero-horizon.jpg` retiré
- Services (priorité) : Billetterie · Hadj · Omra · Visa · Hôtels
- Horaires : bureau 8h–17h · réservation de billets 24h/24

## 2026-10-05 — Charte officielle Travel

- Source de vérité marque : `docs/brand/CHARTE-TRAVEL.md` (extrait PDF)
- Palette : Bleu azur `#2F8AD0` · Azur profond `#123F70` · Or `#C9A24E` · Craie `#F5EFE0` · Blanc
- Assets Travel classés dans `public/brand/` + `docs/brand/assets/` ; autres entités supprimées
- Logos PNG officiels en header / footer / favicon
- CTA : or sur fond sombre uniquement ; azur sur fond clair (interdit or sur fond clair)
- Valeurs À propos alignées charte : Sérénité · Disponibilité · Ouverture
- F0 Sable/Cuivre abandonnée sur cette branche

## 2026-09-23 — Branches palette

| Branche | Palette |
|---------|---------|
| `main` / `design/p0-bleu-nuit-or` | **P0** Bleu nuit & or (figée) |
| `design/f0-sable-cuivre` | **F0** Sable/Cuivre — **obsolète**, remplacée par charte Travel |

### Sur `design/f0-sable-cuivre` (historique)
- Tokens CSS remappés (aliases or/ivoire → cuivre/sable)
- Fond page blanc, sections chaudes sable, CTA cuivre + texte blanc
- Gradient cuivre → sable
- Rules Cursor + SPEC mises à jour pour cette branche

## 2026-09-23 — V1.3 Copy anti-jargon IA

- Réécriture complète de `src/data/content.ts` : ton concret Bamako
- Rule Cursor `.cursor/rules/copy-voice.mdc`

## 2026-09-23 — V1.2 Design immersif + organisation repo

### Design & UX
- Accueil immersif (hero plein écran, grilles, listes)
- Animations reveal / parallax / header sticky
- Contenu dans `src/data/content.ts`

### Footer MSK
- « Design by » + SVG seul

### Organisation repo
```
docs/contrat/  docs/cahier/  docs/brand/  docs/references/
src/  public/
```
