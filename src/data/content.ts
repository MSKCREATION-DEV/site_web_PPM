/**
 * Contenu éditorial placeholder.
 * Ton : clair, concret, agence Bamako — pas de jargon marketing / « IA ».
 * Périmètre : voyage / billetterie / tourisme / pèlerinage.
 * Mission / vision / valeurs : docs/brand/CHARTE-TRAVEL.md
 */

import { site } from './site';

export const home = {
  hero: {
    eyebrow: 'Bamako',
    brand: 'Prosperity Travel',
    headline: 'Billets d’avion, Hadj et Omra.',
    sub: 'Une agence locale pour réserver, organiser et partir dans de bonnes conditions.',
    ctaPrimary: { label: 'Demander un devis', href: '/contact' },
    ctaSecondary: { label: 'Voir les services', href: '/services' },
    image: site.brandAssets.heroHorizon,
    imageAlt: 'Voyageur face à un horizon d’îles — Prosperity Travel',
    coords: '12.6392° N · 8.0029° W',
  },
  manifesto: {
    eyebrow: 'Prosperity Travel',
    title: 'Billetterie aérienne, Hadj et Omra à Bamako.',
    body:
      'Nous émettons vos billets (24h/24), organisons le Hadj et la Omra, et vous accompagnons sur le visa et l’hébergement. Vous parlez à quelqu’un sur place, pas à un formulaire anonyme.',
  },
  destinations: {
    eyebrow: 'Exemples de destinations',
    title: 'Là où partent souvent nos clients',
    intro: 'Quelques trajets fréquents. D’autres destinations sont possibles selon les compagnies et les dates.',
    items: [
      {
        name: 'La Mecque & Médine',
        region: 'Pèlerinage',
        blurb: 'Hadj et Omra : dossier, vols, hébergement et suivi.',
        image:
          'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&q=80',
        href: '/services#hadj',
      },
      {
        name: 'Paris',
        region: 'Europe',
        blurb: 'Vols vers la France, avec options d’escales selon le budget et le délai.',
        image:
          'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
        href: '/services#billetterie',
      },
      {
        name: 'Dubaï',
        region: 'Moyen-Orient',
        blurb: 'Liaisons via les grands hubs pour affaires ou séjour.',
        image:
          'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
        href: '/services#billetterie',
      },
      {
        name: 'Dakar',
        region: 'Afrique de l’Ouest',
        blurb: 'Trajets régionaux vers le Sénégal et la sous-région.',
        image:
          'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=1200&q=80',
        href: '/services#billetterie',
      },
    ],
  },
  experiences: {
    eyebrow: 'Services',
    title: 'Ce que nous faisons',
    items: [
      {
        id: '01',
        title: 'Billetterie aérienne',
        text: 'Recherche et réservation de billets d’avion selon votre destination, vos dates et votre budget. Disponible 24h/24.',
        href: '/services#billetterie',
      },
      {
        id: '02',
        title: 'Organisation du Hadj',
        text: 'Organisation complète : visa, billets, hébergement, transport et accompagnement des pèlerins.',
        href: '/services#hadj',
      },
      {
        id: '03',
        title: 'Organisation de la Omra',
        text: 'Omra avec billets, hébergement, transferts et accompagnement personnalisé.',
        href: '/services#omra',
      },
      {
        id: '04',
        title: 'Visa & hôtels',
        text: 'Démarches visa Hadj et Omra, et réservation d’hébergements à La Mecque et Médine.',
        href: '/services#visa',
      },
    ],
  },
  journeys: {
    eyebrow: 'Pour qui',
    title: 'Selon votre situation',
    items: [
      { title: 'Famille', text: 'Plusieurs passagers, mêmes dates, sièges coordonnés.' },
      { title: 'Affaires', text: 'Départs rapides, changements de date, réponse WhatsApp.' },
      { title: 'Seul(e)', text: 'Un trajet clair, billet émis, infos utiles avant le vol.' },
      { title: 'Pèlerinage', text: 'Hadj ou Omra : dossier suivi, vols et organisation groupés.' },
    ],
  },
  cta: {
    title: 'Un vol ou un pèlerinage à préparer ?',
    text: 'Écrivez-nous sur WhatsApp ou envoyez le formulaire. On vous répond depuis Bamako.',
    primary: { label: 'Nous contacter', href: '/contact' },
    secondary: { label: 'WhatsApp', href: 'whatsapp' },
  },
} as const;

export const about = {
  hero: {
    eyebrow: 'À propos',
    title: 'Qui nous sommes',
    image:
      'https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=2000&q=80',
  },
  /** Textes charte — docs/brand/CHARTE-TRAVEL.md */
  mission: {
    title: 'Mission',
    text: 'Rendre le voyage simple et sûr, du premier conseil jusqu’au retour.',
  },
  vision: {
    title: 'Vision',
    text: 'Être, depuis Bamako, la porte d’entrée de confiance vers le monde.',
  },
  story: {
    title: 'Prosperity Travel',
    body: [
      'Prosperity Travel est le pôle voyage de Prosperity Management Mali, basé à Bamako. Nous travaillons la billetterie aérienne, le Hadj, la Omra, les visas et l’hébergement.',
      'Bureau ouvert de 8h à 17h. Réservation de billets possible 24h/24. Infos claires, délais tenus, interlocuteur joignable.',
    ],
  },
  values: [
    {
      title: 'Sérénité',
      text: 'Le client part l’esprit libre : tout est prévu, tout est vérifié.',
    },
    {
      title: 'Disponibilité',
      text: 'Un conseiller joignable avant, pendant et après le voyage.',
    },
    {
      title: 'Ouverture',
      text: 'Des destinations pour chaque budget, sans jamais sacrifier la qualité.',
    },
  ],
} as const;

export const services = {
  hero: {
    eyebrow: 'Spécialités',
    title: 'Nos services',
    sub: 'Billetterie, Hadj, Omra — et l’accompagnement autour du départ.',
    image:
      'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=2000&q=80',
  },
  /** Ordre client : billetterie, Hadj, Omra en priorité ; puis visa et hôtels (fiche Services). */
  blocks: [
    {
      id: 'billetterie',
      eyebrow: '01',
      title: 'Billetterie aérienne',
      text:
        'Recherche et réservation de billets d’avion selon votre destination, vos dates et votre budget.',
      points: [
        'International et régional',
        'Réservation possible 24h/24',
        'Suivi jusqu’au départ',
      ],
      image:
        'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=1400&q=80',
    },
    {
      id: 'hadj',
      eyebrow: '02',
      title: 'Organisation du Hadj',
      text:
        'Organisation complète du Hadj : visa, billets, hébergement, transport et accompagnement personnalisé des pèlerins.',
      points: ['Visa et dossier', 'Vols et hébergement', 'Accompagnement des pèlerins'],
      image:
        'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1400&q=80',
    },
    {
      id: 'omra',
      eyebrow: '03',
      title: 'Organisation de la Omra',
      text:
        'Organisation de votre Omra avec billets, hébergement, transferts et accompagnement personnalisé.',
      points: ['Billets et transferts', 'Hébergement', 'Accompagnement personnalisé'],
      image:
        'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1400&q=80',
    },
    {
      id: 'visa',
      eyebrow: '04',
      title: 'Visa Hadj et Omra',
      text:
        'Assistance complète pour vos démarches de visa Hadj et Omra : préparation du dossier, vérification des pièces et suivi administratif.',
      points: ['Préparation du dossier', 'Vérification des pièces', 'Suivi administratif'],
      image:
        'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80',
    },
    {
      id: 'hotels',
      eyebrow: '05',
      title: 'Réservation d’hôtels',
      text:
        'Réservation d’hébergements adaptés à vos besoins, notamment à La Mecque et Médine.',
      points: ['La Mecque et Médine', 'Selon vos besoins et votre budget', 'Coordination avec le voyage'],
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80',
    },
  ],
} as const;

export const contactPage = {
  hero: {
    eyebrow: 'Contact',
    title: 'Nous joindre',
    sub: 'Formulaire, WhatsApp, téléphone ou visite à Bamako.',
  },
} as const;
