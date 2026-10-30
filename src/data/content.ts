/**
 * Contenu éditorial.
 * Ton : clair, concret, agence Bamako.
 * Images : public/images/ (charte / pack web Travel).
 */

export const images = {
  heroAeroport: '/images/hero-aeroport.webp',
  coverVoyageuse: '/images/cover-voyageuse.webp',
  heroHublot: '/images/hero-hublot.webp',
  heroDunesH01: '/images/hero-dunes-h01.webp',
  dubai: '/images/dubai.webp',
  istanbul: '/images/istanbul.webp',
  laMecque: '/images/la-mecque.webp',
  medine: '/images/medine.webp',
  paris: '/images/paris.webp',
  dakar: '/images/dakar.webp',
  marrakech: '/images/marrakech.webp',
  conseillere: '/images/conseillere.webp',
  voyageuseDjenne: '/images/voyageuse-djenne.webp',
  voyageuseDunes: '/images/voyageuse-dunes.webp',
  voyageuseBamako: '/images/voyageuse-bamako.webp',
  voyageuseIstanbul: '/images/voyageuse-istanbul.webp',
  /** Équipe — portraits & scènes bureau */
  teamSiriman: '/images/team/siriman-sissoko.webp',
  teamAstan: '/images/team/astan-traore.webp',
  teamSoumaila: '/images/team/soumaila-kone.webp',
  teamTidiane: '/images/team/tidiane-dianka.webp',
  teamMamadou: '/images/team/mamadou-traore.webp',
  teamAmadou: '/images/team/amadou-bah.webp',
  teamEquipePortrait: '/images/team/equipe-portrait.webp',
  teamEquipeBureau: '/images/team/equipe-bureau.webp',
  /** Hero Contact — JPEG HQ (évite artefacts WebP sur grand format) */
  contactHero: '/images/team/contact-hero.jpg',
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
  gallery: {
    eyebrow: 'Horizons',
    title: 'Des départs qui comptent',
    slides: [
      {
        image: images.heroDunesH01,
        label: 'Sahel',
        caption: 'Voyage et patrimoine',
      },
      {
        image: images.heroHublot,
        label: 'En vol',
        caption: 'Billetterie aérienne',
      },
      {
        image: images.laMecque,
        label: 'La Mecque',
        caption: 'Hadj et Umrah',
      },
      {
        image: images.medine,
        label: 'Médine',
        caption: 'Pèlerinage',
      },
      {
        image: images.istanbul,
        label: 'Istanbul',
        caption: 'Escales et séjour',
      },
      {
        image: images.dubai,
        label: 'Dubaï',
        caption: 'Affaires et voyage',
      },
    ],
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
        name: 'Istanbul',
        region: 'Turquie',
        blurb: 'Hub fréquent pour l’Europe et le Moyen-Orient.',
        image: images.istanbul,
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
    image: images.voyageuseDunes,
  },
  mission: {
    eyebrow: 'Notre mission',
    text: 'Rendre le voyage simple et sûr, du premier conseil jusqu’au retour.',
  },
  vision: {
    eyebrow: 'Notre vision',
    text: 'Être, depuis Bamako, la porte d’entrée de confiance vers le monde.',
  },
  story: {
    eyebrow: 'Notre identité',
    title: 'Prosperity Travel',
    lead:
      'Prosperity Travel est le pôle voyage de Prosperity Management Mali, basé à Bamako. Nous travaillons la billetterie aérienne, le Hadj, l’Umrah, les visas et l’hébergement.',
    practical: [
      { label: 'Bureau', value: 'Ouvert de 8h à 17h' },
      { label: 'Billetterie', value: 'Réservation possible 24h/24' },
    ],
    practicalNote: 'Infos claires, délais tenus, interlocuteur joignable.',
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
  director: {
    eyebrow: 'Mot du directeur',
    title: 'Depuis Bamako, un engagement simple.',
    name: 'Brehima Traoré',
    role: 'Directeur',
    quote: [
      'Depuis Bamako, notre rôle est simple : vous aider à partir dans de bonnes conditions.',
      'Billet, dossier, pèlerinage — vous avez un interlocuteur joignable, du premier échange jusqu’au retour.',
    ],
    brand: 'Prosperity Travel',
    /** Photo à recevoir — placeholder BT jusqu’à livraison */
    image: '',
    initials: 'BT',
    imageAlt: 'Brehima Traoré, directeur de Prosperity Travel à Bamako',
  },
  teamScene: {
    eyebrow: 'Notre équipe',
    titleLead: 'Une équipe à',
    titleAccent: 'votre service',
    text: 'Conseillers joignables pour vos billets d’avion, dossiers Hadj et Umrah, et le suivi de votre départ.',
    image: images.teamEquipePortrait,
    imageAlt:
      'Équipe Prosperity Travel à Bamako — Siriman Sissoko, Astan Traoré et Soumaïla Koné au bureau',
    highlights: [
      { title: 'Billets d’avion', text: 'Toutes destinations.' },
      { title: 'Hadj & Umrah', text: 'Accompagnement complet.' },
      { title: 'Suivi personnalisé', text: 'À chaque étape.' },
    ],
    values: [
      { title: 'Confiance', text: 'Votre sécurité, notre engagement.' },
      { title: 'Proximité', text: 'Une équipe toujours à l’écoute.' },
      { title: 'Expertise', text: 'Une connaissance fine de vos besoins.' },
      { title: 'Satisfaction', text: 'Votre confort, notre réussite.' },
    ],
  },
  team: {
    eyebrow: 'Notre équipe',
    title: 'Ceux qui vous accompagnent',
    kicker: 'L’équipe à votre service',
    members: [
      {
        id: '01',
        name: 'Mamadou B. Traoré',
        role: 'PCA',
        bio: 'Président du conseil d’administration — orientation et gouvernance de l’agence.',
        image: images.teamMamadou,
        initials: 'MT',
        imageAlt: 'Mamadou B. Traoré, PCA de Prosperity Travel à Bamako',
      },
      {
        id: '02',
        name: 'Siriman Sissoko',
        role: 'Gérant',
        bio: 'Pilotage du quotidien, relation clients et coordination des dossiers.',
        image: images.teamSiriman,
        initials: 'SS',
        imageAlt: 'Siriman Sissoko, gérant de Prosperity Travel à Bamako',
      },
      {
        id: '03',
        name: 'Amadou Bah',
        role: 'Responsable Hadj & Umrah',
        bio: 'Organisation du Hadj et de l’Umrah : dossiers, vols, hébergement et suivi des pèlerins.',
        image: images.teamAmadou,
        initials: 'AB',
        imageAlt: 'Amadou Bah, responsable Hadj et Umrah — Prosperity Travel Bamako',
      },
      {
        id: '04',
        name: 'Astan Traoré',
        role: 'Comptable',
        bio: 'Suivi comptable, facturation et transparence des dossiers clients.',
        image: images.teamAstan,
        initials: 'AT',
        imageAlt: 'Astan Traoré, comptable chez Prosperity Travel à Bamako',
      },
      {
        id: '05',
        name: 'Soumaïla Koné',
        role: 'Responsable billetterie',
        bio: 'Recherche et émission de billets d’avion, suivi jusqu’au départ.',
        image: images.teamSoumaila,
        initials: 'SK',
        imageAlt: 'Soumaïla Koné, responsable billetterie — Prosperity Travel Bamako',
      },
      {
        id: '06',
        name: 'Tidiane Dianka Samadiary',
        role: 'Billetterie & divers',
        bio: 'Appui billetterie et accompagnement sur les demandes du quotidien.',
        image: images.teamTidiane,
        initials: 'TD',
        imageAlt: 'Tidiane Dianka Samadiary, billetterie — Prosperity Travel Bamako',
      },
    ],
  },
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
    image: images.heroHublot,
  },
  blocks: [
    {
      id: 'billetterie',
      eyebrow: '01',
      title: 'Billetterie aérienne',
      text:
        'Recherche et réservation de billets d’avion selon votre destination, vos dates et votre budget.',
      points: ['International et régional', 'Réservation possible 24h/24', 'Suivi jusqu’au départ'],
      image: images.heroHublot,
      imageAlt: 'Voyageuse regardant le ciel depuis le hublot',
    },
    {
      id: 'hadj',
      eyebrow: '02',
      title: 'Organisation du Hadj',
      text:
        'Organisation complète du Hadj : visa, billets, hébergement, transport et accompagnement personnalisé des pèlerins.',
      points: ['Visa et dossier', 'Vols et hébergement', 'Accompagnement des pèlerins'],
      image: images.medine,
      imageAlt: 'Médine — organisation du Hadj',
    },
    {
      id: 'umrah',
      eyebrow: '03',
      title: 'Organisation de l’Umrah',
      text:
        'Organisation de votre Umrah avec billets, hébergement, transferts et accompagnement personnalisé.',
      points: ['Billets et transferts', 'Hébergement', 'Accompagnement personnalisé'],
      image: images.laMecque,
      imageAlt: 'La Mecque — organisation de l’Umrah',
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
      image: images.istanbul,
      imageAlt: 'Séjour et hébergement — destinations',
    },
  ] satisfies ServiceBlock[],
};

export const contactPage = {
  hero: {
    eyebrow: 'Contact',
    title: 'Parlons de votre départ',
    sub: 'Un message, un appel ou un passage à Bamako. On vous répond.',
    image: images.contactHero,
    imageAlt:
      'Équipe Prosperity Travel au bureau à Bamako — collaboration autour d’un dossier voyage',
  },
} as const;
