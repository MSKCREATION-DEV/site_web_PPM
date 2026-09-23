/**
 * Contenu éditorial placeholder.
 * Ton : clair, concret, agence Bamako — pas de jargon marketing / « IA ».
 * Périmètre : voyage / billetterie / tourisme / pèlerinage.
 */

export const home = {
  hero: {
    eyebrow: 'Bamako',
    brand: 'Prosperity Travel',
    headline: 'Billets d’avion, voyages et pèlerinage.',
    sub: 'Une agence locale pour réserver, organiser et partir dans de bonnes conditions.',
    ctaPrimary: { label: 'Demander un devis', href: '/contact' },
    ctaSecondary: { label: 'Voir les services', href: '/services' },
    image:
      'https://images.unsplash.com/photo-14364918653355-a3b41f8c8eb0?auto=format&fit=crop&w=2400&q=80',
    imageAlt: 'Avion dans le ciel au crépuscule',
    coords: '12.6392° N · 8.0029° W',
  },
  manifesto: {
    eyebrow: 'Prosperity Travel',
    title: 'Une équipe à Bamako, des vols partout.',
    body:
      'Nous émettons vos billets, préparons vos dossiers de voyage et organisons le pèlerinage. Vous parlez à quelqu’un sur place, pas à un formulaire anonyme.',
  },
  destinations: {
    eyebrow: 'Exemples de destinations',
    title: 'Là où partent souvent nos clients',
    intro: 'Quelques trajets fréquents. D’autres destinations sont possibles selon les compagnies et les dates.',
    items: [
      {
        name: 'La Mecque & Médine',
        region: 'Pèlerinage',
        blurb: 'Organisation du pèlerinage : dossier, vols et suivi avant le départ.',
        image:
          'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&q=80',
        href: '/services#pelerinage',
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
        href: '/services#voyage',
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
        text: 'Recherche de vols, émission du billet et suivi jusqu’au départ.',
        href: '/services#billetterie',
      },
      {
        id: '02',
        title: 'Organisation de voyage',
        text: 'Dates, destination, contraintes famille ou travail : on construit le trajet avec vous.',
        href: '/services#voyage',
      },
      {
        id: '03',
        title: 'Pèlerinage',
        text: 'Préparation et organisation du pèlerinage, étape par étape.',
        href: '/services#pelerinage',
      },
      {
        id: '04',
        title: 'Contact direct',
        text: 'Téléphone, WhatsApp ou passage à l’agence à Bamako.',
        href: '/contact',
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
      { title: 'Pèlerinage', text: 'Dossier suivi, vols et organisation groupés.' },
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
  story: {
    title: 'Prosperity Travel',
    body: [
      'Prosperity Travel est le pôle voyage de Prosperity Management Mali, basé à Bamako. Nous travaillons la billetterie aérienne, l’organisation de voyages et le pèlerinage.',
      'On privilégie des infos claires, des délais tenus et un interlocuteur joignable. Pas de discours creux : des billets, des dossiers, des départs.',
      'L’histoire détaillée, les photos d’équipe et les textes définitifs arriveront après validation du client. Cette page sert de base en attendant.',
    ],
  },
  values: [
    { title: 'Transparence', text: 'On dit ce qui est possible, le prix et les contraintes avant de réserver.' },
    { title: 'Rigueur', text: 'Dossiers complets, billets vérifiés, dates confirmées.' },
    { title: 'Disponibilité', text: 'Réponses par téléphone ou WhatsApp aux horaires d’ouverture.' },
    { title: 'Proximité', text: 'Une agence à Bamako, pour se voir si besoin.' },
  ],
} as const;

export const services = {
  hero: {
    eyebrow: 'Nos services',
    title: 'Billetterie, voyage et pèlerinage',
    sub: 'Trois façons de travailler avec nous, selon votre besoin.',
    image:
      'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=2000&q=80',
  },
  blocks: [
    {
      id: 'billetterie',
      eyebrow: '01',
      title: 'Billetterie',
      text:
        'On cherche le vol, on compare les options, on émet le billet. International ou régional, pour particuliers et entreprises.',
      points: ['Vols internationaux et régionaux', 'Options d’escales et de dates', 'Suivi avant le départ'],
      image:
        'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=1400&q=80',
    },
    {
      id: 'voyage',
      eyebrow: '02',
      title: 'Organisation de voyage',
      text:
        'Au-delà du billet : on aligne dates, destination et contraintes (famille, budget, urgences professionnelles).',
      points: ['Conseil sur les trajets', 'Coordination des départs', 'Agence à Bamako'],
      image:
        'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1400&q=80',
    },
    {
      id: 'pelerinage',
      eyebrow: '03',
      title: 'Pèlerinage',
      text:
        'Organisation du pèlerinage : préparation du dossier, vols et suivi jusqu’au départ.',
      points: ['Suivi du dossier', 'Vols et organisation', 'Interlocuteur dédié'],
      image:
        'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1400&q=80',
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
