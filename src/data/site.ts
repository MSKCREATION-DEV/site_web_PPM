/**
 * Données site — placeholders jusqu’à validation client.
 * Remplacer ici uniquement après validation (ne pas hardcoder ailleurs).
 * Sources provisoires : contrat + cahier des charges (fusion à confirmer).
 * Marque / logos : docs/brand/CHARTE-TRAVEL.md
 */
export const site = {
  brand: 'Prosperity Travel',
  legalName: 'Prosperity Management Mali SARL',
  tagline: 'Agence de voyage · Billetterie · Tourisme',
  locale: 'fr',
  /** Domaine pas encore réservé */
  domain: null as string | null,
  url: 'https://example.ml',

  brandAssets: {
    logoHorizontalBlanc: '/brand/logo-horizontal-blanc.png',
    logoHorizontalClair: '/brand/logo-horizontal-fond-clair.png',
    embleme: '/brand/embleme.png',
    emblemeBlanc: '/brand/embleme-blanc.png',
  },

  contact: {
    /** PLACEHOLDER — cahier (Mamadou Boussanga Traoré) */
    phoneDisplay: '+223 70 86 91 91',
    phoneAltDisplay: '+223 70 86 92 92',
    phoneE164: '22370869191',
    email: 'managementprosp@gmail.com',
    /** PLACEHOLDER — Kalaban Coura ACI (cahier) */
    addressLine: 'Kalaban Coura ACI, Bamako',
    country: 'Mali',
    /** Bureau : 8h–17h · billets 24h/24 */
    hours: 'Bureau · 8h00 – 17h00',
    hoursTickets: 'Réservation de billets · 24h/24',
    /** WhatsApp Business — même numéro placeholder */
    whatsappE164: '22370869191',
    /** Localisation réelle (lat/lng validés) */
    mapsEmbedUrl:
      'https://www.google.com/maps?q=12.576008,-8.010945&hl=fr&z=16&output=embed',
    mapsLink: 'https://maps.google.com/?q=12.576008,-8.010945',
  },

  social: {
    /** PLACEHOLDERS — liens fictifs jusqu’à URLs client */
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
  },

  msk: {
    name: 'MSK CREATION',
    url: 'https://mskcreation.net',
    logoSrc: '/msk-creation.svg',
  },

  /** Contenu éditorial : placeholders OK jusqu’à validation */
  contentStatus: 'placeholder' as const,
} as const;

export const nav = [
  { href: '/', label: 'Accueil' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
] as const;
