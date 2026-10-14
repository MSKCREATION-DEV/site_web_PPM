/**
 * Contenu éditorial.
 * Ton : clair, concret, agence Bamako.
 * Images : public/images/ (charte / pack web Travel).
 */

export const images = {
  heroAeroport: '/images/hero-aeroport.webp',
  coverVoyageuse: '/images/cover-voyageuse.webp',
  dubai: '/images/dubai.webp',
  istanbul: '/images/istanbul.webp',
  laMecque: '/images/la-mecque.webp',
  paris: '/images/paris.webp',
  dakar: '/images/dakar.webp',
  marrakech: '/images/marrakech.webp',
  conseillere: '/images/conseillere.webp',
  voyageuseDjenne: '/images/voyageuse-djenne.webp',
  voyageuseDunes: '/images/voyageuse-dunes.webp',
  voyageuseBamako: '/images/voyageuse-bamako.webp',
  voyageuseIstanbul: '/images/voyageuse-istanbul.webp',
} as const;

export const home = {
  hero: {
    eyebrow: 'Bienvenue à',
    brand: 'Prosperity Travel',
    brandPrimary: 'Prosperity',
    brandAccent: 'Travel',
    blurbTitle: 'Billets d’avion, Hadj et Umrah.',
    blurb:
      'Une agence locale pour réserver, organiser et partir dans de bonnes conditions.',
    image: images.coverVoyageuse,
    imageAlt: 'Voyageuse — Prosperity Travel',
    coords: '12.6392° N, 8.0029° W',
    /** Chargée uniquement au clic Play (preload none) — Mali-friendly. */
    videoSrc: '/videos/hero-presentation.mp4',
  },
  manifesto: {
    eyebrow: 'Prosperity Travel',
    title: 'Billetterie aérienne, Hadj et Umrah à Bamako.',
    body:
      'Nous émettons vos billets (24h/24), organisons le Hadj et l’Umrah, et vous accompagnons sur le visa et l’hébergement. Vous parlez à quelqu’un sur place, pas à un formulaire anonyme.',
  },
  destinations: {
    eyebrow: 'Exemples de destinations',
    title: 'Là où partent souvent nos clients',
    intro: 'Quelques trajets fréquents. D’autres destinations sont possibles selon les compagnies et les dates.',
    items: [
      {
        name: 'La Mecque & Médine',
        region: 'Pèlerinage',
        blurb: 'Hadj et Umrah : dossier, vols, hébergement et suivi.',
        image: images.laMecque,
        href: '/services#hadj',
      },
      {
        name: 'Paris',
        region: 'Europe',
        blurb: 'Vols vers la France, avec options d’escales selon le budget et le délai.',
        image: images.paris,
        href: '/services#billetterie',
      },
      {
        name: 'Dubaï',
        region: 'Moyen-Orient',
        blurb: 'Liaisons via les grands hubs pour affaires ou séjour.',
        image: images.dubai,
        href: '/services#billetterie',
      },
      {
        name: 'Dakar',
        region: 'Afrique de l’Ouest',
        blurb: 'Trajets régionaux vers le Sénégal et la sous-région.',
        image: images.dakar,
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
        title: 'Organisation de l’Umrah',
        text: 'Umrah avec billets, hébergement, transferts et accompagnement personnalisé.',
        href: '/services#umrah',
      },
      {
        id: '04',
        title: 'Visa & hôtels',
        text: 'Démarches visa Hadj et Umrah, et réservation d’hébergements à La Mecque et Médine.',
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
      { title: 'Pèlerinage', text: 'Hadj ou Umrah : dossier suivi, vols et organisation groupés.' },
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
    image: images.voyageuseBamako,
  },
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
      'Prosperity Travel est le pôle voyage de Prosperity Management Mali, basé à Bamako. Nous travaillons la billetterie aérienne, le Hadj, l’Umrah, les visas et l’hébergement.',
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

export type ServiceBlock = {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  points: string[];
  image: string;
  imageAlt?: string;
};

export const services = {
  hero: {
    eyebrow: 'Nos services',
    title: 'Un accompagnement clair pour chaque départ',
    sub: 'Billetterie, Hadj, Umrah — et l’accompagnement autour du voyage. À Bamako, un interlocuteur joignable.',
    image: images.voyageuseDunes,
  },
  blocks: [
    {
      id: 'billetterie',
      eyebrow: '01',
      title: 'Billetterie aérienne',
      text:
        'Recherche et réservation de billets d’avion selon votre destination, vos dates et votre budget.',
      points: ['International et régional', 'Réservation possible 24h/24', 'Suivi jusqu’au départ'],
      image: images.dubai,
      imageAlt: 'Départ international — billetterie',
    },
    {
      id: 'hadj',
      eyebrow: '02',
      title: 'Organisation du Hadj',
      text:
        'Organisation complète du Hadj : visa, billets, hébergement, transport et accompagnement personnalisé des pèlerins.',
      points: ['Visa et dossier', 'Vols et hébergement', 'Accompagnement des pèlerins'],
      image: images.laMecque,
      imageAlt: 'La Mecque — organisation du Hadj',
    },
    {
      id: 'umrah',
      eyebrow: '03',
      title: 'Organisation de l’Umrah',
      text:
        'Organisation de votre Umrah avec billets, hébergement, transferts et accompagnement personnalisé.',
      points: ['Billets et transferts', 'Hébergement', 'Accompagnement personnalisé'],
      image: images.istanbul,
      imageAlt: 'Istanbul — escale et Umrah',
    },
    {
      id: 'visa',
      eyebrow: '04',
      title: 'Visa Hadj et Umrah',
      text:
        'Assistance complète pour vos démarches de visa Hadj et Umrah : préparation du dossier, vérification des pièces et suivi administratif.',
      points: ['Préparation du dossier', 'Vérification des pièces', 'Suivi administratif'],
      image: images.conseillere,
      imageAlt: 'Conseillère Prosperity Travel',
    },
    {
      id: 'hotels',
      eyebrow: '05',
      title: 'Réservation d’hôtels',
      text:
        'Réservation d’hébergements adaptés à vos besoins, notamment à La Mecque et Médine.',
      points: ['La Mecque et Médine', 'Selon vos besoins et votre budget', 'Coordination avec le voyage'],
      image: images.marrakech,
      imageAlt: 'Hébergement et destinations',
    },
  ] satisfies ServiceBlock[],
};

export const contactPage = {
  hero: {
    eyebrow: 'Contact',
    title: 'Parlons de votre départ',
    sub: 'Un message, un appel ou un passage à Bamako. On vous répond.',
    image: images.conseillere,
    imageAlt: 'Conseillère en agence Prosperity Travel',
  },
} as const;
