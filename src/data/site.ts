/**
 * Données site — placeholders jusqu’à validation client.
 * Remplacer ici uniquement après validation (ne pas hardcoder ailleurs).
 * Sources provisoires : contrat + cahier des charges (fusion à confirmer).
 */
export const site = {
  brand: 'Prosperity Travel',
  legalName: 'Prosperity Management Mali SARL',
  tagline: 'Agence de voyage · Billetterie · Tourisme',
  locale: 'fr',
  /** Domaine pas encore réservé */
  domain: null as string | null,
  url: 'https://example.ml',

  contact: {
    /** PLACEHOLDER — cahier (Mamadou Boussanga Traoré) */
    phoneDisplay: '+223 70 86 91 91',
    phoneAltDisplay: '+223 70 86 92 92',
    phoneE164: '22370869191',
    email: 'managementprosp@gmail.com',
    /** PLACEHOLDER — Kalaban Coura ACI (cahier) */
    addressLine: 'Kalaban Coura ACI, Bamako',
    country: 'Mali',
    /** Horaires fictifs jusqu’à validation */
    hours: 'Lun – Sam · 8h00 – 18h00',
    /** WhatsApp Business — même numéro placeholder */
    whatsappE164: '22370869191',
    /** Embed Maps placeholder (Bamako centre — à remplacer) */
    mapsEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0!2d-8.0029!3d12.6392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBamako!5e0!3m2!1sfr!2sml!4v1700000000000!5m2!1sfr!2sml',
    mapsLink: 'https://maps.google.com/?q=Kalaban+Coura+ACI,+Bamako,+Mali',
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
