/* =========================================================================
   DevoriaTech — Données du site (source unique de vérité)
   Contenu migré depuis le site vanilla, conservé à l'identique.
   ========================================================================= */

export const site = {
  name: 'DevoriaTech',
  tagline: 'Solutions digitales · Afrique',
  domain: 'https://devoriatech.com',
  email: 'contact@devoriatech.com',
  linkedin: 'https://linkedin.com/in/maxwilfred-gak',
  founder: 'DJASRANGUÉ G. Maxwilfred',
  description:
    'DevoriaTech accompagne les PME et startups d’Afrique dans leur transformation digitale : ERP Odoo, sites web, applications mobiles et automatisation IA.',
} as const;

export const nav = [
  { href: '/services', label: 'Services' },
  { href: '/solutions', label: 'Solutions Odoo' },
  { href: '/realisations', label: 'Réalisations' },
  { href: '/a-propos', label: 'À propos' },
] as const;

export const heroStats = [
  { value: 15, suffix: '', label: 'Domaines d’expertise' },
  { value: 5, suffix: '', label: 'Familles de services' },
  { value: 100, suffix: '%', label: 'Sur mesure' },
  { value: 24, suffix: 'h', label: 'Réponse garantie' },
] as const;

export type Service = {
  id: string;
  icon: string;
  title: string;
  short: string;
  description: string;
  features: string[];
  cta: string;
};

export const services: Service[] = [
  {
    id: 'odoo',
    icon: 'grid',
    title: 'Implémentation Odoo ERP/CRM',
    short:
      'Déploiement complet d’Odoo pour gérer vos ventes, achats, stock et relation client, paramétré selon votre activité.',
    description:
      'Odoo est l’un des ERP les plus puissants et accessibles du marché. Nous déployons et configurons Odoo pour votre activité spécifique, que vous soyez dans le commerce, la distribution, les services ou l’industrie.',
    features: [
      'Installation Odoo Community ou Enterprise',
      'Modules CRM, Ventes, Stock, Achats, Comptabilité',
      'Migration de vos données existantes',
      'Développement de modules personnalisés',
      'Formation de vos équipes incluse',
      'Intégration IoT et IA possible',
    ],
    cta: 'Demander un devis',
  },
  {
    id: 'web',
    icon: 'browser',
    title: 'Création de sites web',
    short:
      'Sites vitrines, e-commerce ou plateformes sur mesure : design moderne, responsive et optimisé pour convertir.',
    description:
      'Un site web professionnel est votre première vitrine digitale. Nous créons des sites modernes, rapides et optimisés pour convertir vos visiteurs en clients, adaptés à votre secteur et à votre marché.',
    features: [
      'Site vitrine professionnel (5 à 10 pages)',
      'Site e-commerce avec gestion des commandes',
      'Design responsive, parfait sur mobile',
      'Optimisation SEO incluse',
      'Bilingue français/anglais si besoin',
      'Intégration formulaire de contact et WhatsApp',
    ],
    cta: 'Demander un devis',
  },
  {
    id: 'mobile',
    icon: 'device-mobile',
    title: 'Applications mobiles',
    short:
      'Applications iOS et Android pour digitaliser vos opérations terrain en temps réel.',
    description:
      'En Afrique, le mobile est le premier écran. Nous développons des applications iOS et Android pour digitaliser vos processus terrain, améliorer l’expérience client ou créer de nouveaux canaux de vente.',
    features: [
      'Applications iOS et Android natives ou hybrides',
      'MVP (Minimum Viable Product) pour valider votre idée',
      'Intégration avec Odoo ou votre système existant',
      'Interface intuitive adaptée au contexte africain',
      'Mode hors-ligne disponible si besoin',
    ],
    cta: 'Discutons de votre projet',
  },
  {
    id: 'formation',
    icon: 'school',
    title: 'Formation & accompagnement',
    short:
      'Formation de vos équipes sur Odoo et vos outils digitaux avec support continu.',
    description:
      'Un outil digital n’a de valeur que si vos équipes savent l’utiliser. Nous formons vos collaborateurs sur Odoo et vos outils, et nous restons disponibles après la livraison pour garantir une adoption réussie.',
    features: [
      'Formations Odoo par module (demi-journée ou journée)',
      'Documentation personnalisée pour votre équipe',
      'Formation en présentiel ou à distance',
      'Support technique mensuel disponible',
      'Suivi post-implémentation 30 à 90 jours',
    ],
    cta: 'Planifier une formation',
  },
  {
    id: 'ia',
    icon: 'sparkles',
    title: 'Automatisation & IA',
    short:
      'Automatisation de vos processus et intégration IA pour gagner en productivité.',
    description:
      'Automatisez les tâches répétitives et exploitez la puissance de l’IA pour gagner en efficacité. De la prévision des ventes à la génération automatique de rapports, nous intégrons l’IA là où elle a du sens pour votre activité.',
    features: [
      'Automatisation des workflows Odoo',
      'Intégration d’IA pour la prévision et recommandation',
      'Intégration IoT pour le suivi en temps réel',
      'Tableaux de bord intelligents et alertes',
      'Prototype livré en 2 à 4 semaines',
    ],
    cta: 'Découvrir les possibilités',
  },
];

export const whyPoints = [
  {
    num: '01',
    title: 'Expertise Odoo solide',
    text: 'Spécialisés Odoo Community et Enterprise, avec expérience en intégration IoT et IA.',
  },
  {
    num: '02',
    title: 'Accessible aux entreprises africaines',
    text: 'Une expertise de niveau international, pensée pour rester accessible aux PME et startups du continent.',
  },
  {
    num: '03',
    title: 'Accompagnement humain de bout en bout',
    text: 'Formation, support et évolutions après livraison, parce que votre succès est le nôtre.',
  },
] as const;

export const processSteps = [
  { num: 1, title: 'Analyse', text: 'Étude de vos besoins et objectifs métier' },
  { num: 2, title: 'Proposition', text: 'Devis détaillé et planning de livraison' },
  { num: 3, title: 'Déploiement', text: 'Développement, tests et mise en production' },
  { num: 4, title: 'Accompagnement', text: 'Formation équipe et support continu' },
] as const;

export const geoPills = [
  { label: 'Afrique', color: '#3fe68c' },
  { label: 'PME & startups', color: '#185fa5' },
  { label: 'Sur mesure', color: '#0f6e56' },
] as const;

/* ── Packages Odoo (page services) ── */
export const pricing = [
  {
    name: 'Starter',
    featured: false,
    desc: 'Pour les TPE et startups qui démarrent leur digitalisation.',
    features: [
      'Installation Odoo Community',
      '2 modules (ex. CRM + Ventes)',
      'Paramétrage de base',
      'Formation 4h en ligne',
      'Support 30 jours',
    ],
    cta: 'Choisir Starter',
  },
  {
    name: 'Business',
    featured: true,
    badge: 'Le plus demandé',
    desc: 'Pour les PME qui veulent un ERP complet et opérationnel.',
    features: [
      'Odoo Community ou Enterprise',
      '4 modules (CRM, Ventes, Stock, Achats)',
      'Paramétrage avancé + données initiales',
      'Migration de données existantes',
      'Formation 8h + documentation',
      'Support 60 jours',
    ],
    cta: 'Choisir Business',
  },
  {
    name: 'Enterprise',
    featured: false,
    desc: 'Pour les entreprises avec des besoins spécifiques et intégrations complexes.',
    features: [
      'Tous modules selon votre besoin',
      'Développement de modules custom',
      'Intégration IoT et IA',
      'Formation équipe complète',
      'Support 6 à 12 mois',
      'SLA garanti',
    ],
    cta: 'Demander un devis',
  },
] as const;

export const rates = [
  { service: 'Site web vitrine (5–8 pages)', delay: '2–3 semaines' },
  { service: 'Site e-commerce', delay: '3–6 semaines' },
  { service: 'Application mobile (MVP)', delay: '6–12 semaines' },
  { service: 'Formation Odoo (demi-journée)', delay: '1 jour' },
  { service: 'Automatisation IA (prototype)', delay: '2–4 semaines' },
  { service: 'Maintenance mensuelle', delay: 'Récurrent' },
] as const;

/* ── Odoo (page solutions) ── */
export const odooStats = [
  { value: 7, suffix: 'M+', label: 'Utilisateurs' },
  { value: 150, suffix: '+', label: 'Pays' },
  { value: 80, suffix: '+', label: 'Modules' },
  { value: 100, suffix: '%', label: 'Open Source' },
] as const;

export const odooModules = [
  { icon: 'users', name: 'CRM', desc: 'Gérez vos prospects, opportunités et pipeline de vente.', tag: 'Très demandé' },
  { icon: 'cash', name: 'Ventes', desc: 'Créez des devis, bons de commande et factures en quelques clics.', tag: 'Très demandé' },
  { icon: 'package', name: 'Gestion des stocks', desc: 'Suivez vos entrées/sorties, gérez plusieurs entrepôts et alertes.', tag: 'Populaire' },
  { icon: 'shopping-cart', name: 'Achats', desc: 'Gérez vos fournisseurs, bons de commande et réceptions.', tag: '' },
  { icon: 'calculator', name: 'Comptabilité', desc: 'Facturation, paiements, rapprochement bancaire et états financiers.', tag: '' },
  { icon: 'user-heart', name: 'Ressources humaines', desc: 'Gestion des employés, congés, notes de frais et évaluations.', tag: '' },
  { icon: 'world', name: 'Site web', desc: 'Site web avec éditeur visuel et intégration e-commerce native.', tag: '' },
  { icon: 'mail', name: 'Email Marketing', desc: 'Campagnes email ciblées avec suivi des résultats intégré.', tag: '' },
  { icon: 'tool', name: 'Maintenance', desc: 'Maintenance préventive/corrective, équipements et techniciens.', tag: '' },
] as const;

export const odooProcess = [
  { num: 1, title: 'Analyse & cadrage', text: 'On étudie votre activité en détail : vos processus actuels, vos besoins, vos contraintes et vos objectifs. C’est la base de tout projet réussi.', duration: '1–2 jours' },
  { num: 2, title: 'Proposition & devis', text: 'Devis détaillé avec modules recommandés, planning et conditions.', duration: '24–48h' },
  { num: 3, title: 'Installation & configuration', text: 'Installation, configuration, paramétrage et import de vos données existantes.', duration: '1–3 semaines' },
  { num: 4, title: 'Tests & validation', text: 'Tests complets avec vos données réelles. Tout est validé avant la mise en production.', duration: '2–5 jours' },
  { num: 5, title: 'Formation de vos équipes', text: 'Formation en visio ou en présentiel. Documentation personnalisée remise à la fin.', duration: '4h – 2 jours' },
  { num: 6, title: 'Support post-livraison', text: 'Support inclus 30 à 60 jours. Maintenance mensuelle disponible pour les besoins continus.', duration: '30–60 jours inclus' },
] as const;

export const odooCompare = [
  { feature: 'Coût de la licence', community: 'Gratuit', enterprise: 'Abonnement annuel', communityFree: true },
  { feature: 'CRM & Ventes', community: true, enterprise: true },
  { feature: 'Gestion des stocks', community: true, enterprise: true },
  { feature: 'Achats', community: true, enterprise: true },
  { feature: 'Comptabilité complète', community: 'partial', enterprise: true },
  { feature: 'Signature électronique', community: false, enterprise: true },
  { feature: 'Modules IoT', community: false, enterprise: true },
  { feature: 'Support officiel Odoo', community: false, enterprise: true },
  { feature: 'Modules custom Python', community: true, enterprise: true },
] as const;

export const iotAi = [
  {
    icon: 'plug-connected',
    title: 'Intégration IoT',
    desc: 'Connectez vos équipements physiques à Odoo pour un suivi en temps réel.',
    items: [
      'Capteurs de stock connectés à Odoo',
      'Scanners de codes-barres et QR',
      'Alertes automatiques en temps réel',
      'Tableau de bord de monitoring IoT',
    ],
  },
  {
    icon: 'robot',
    title: 'Intelligence Artificielle',
    desc: 'Intégrez l’IA pour prédire, recommander et automatiser vos opérations.',
    items: [
      'Prévision des ventes par IA',
      'Recommandations de réapprovisionnement',
      'Analyse de sentiment client (CRM)',
      'Génération automatique de rapports',
    ],
  },
] as const;

/* ── Réalisations ── */
export const projects = [
  {
    category: 'odoo',
    label: 'Odoo',
    icon: 'chart-dots',
    tags: ['Odoo CRM', 'Python'],
    title: 'Module CRM personnalisé',
    context: 'Module CRM sur mesure avec pipeline visuel et tableaux de bord analytiques.',
    stack: 'Odoo Community 16',
    year: '2024',
  },
  {
    category: 'web',
    label: 'Web',
    icon: 'world-www',
    tags: ['HTML/CSS/JS', 'Responsive'],
    title: 'Site vitrine e-commerce',
    context: 'Site e-commerce responsive avec catalogue, panier et formulaire de commande.',
    stack: 'HTML/CSS/JS',
    year: '2024',
  },
  {
    category: 'ia',
    label: 'IA / IoT',
    icon: 'cpu',
    tags: ['Python', 'IoT'],
    title: 'Intégration IoT dans Odoo',
    context: 'Capteurs IoT connectés à Odoo pour suivi de stock en temps réel avec alertes automatiques.',
    stack: 'Odoo + Python + IoT',
    year: '2025',
  },
  {
    category: 'ia',
    label: 'IA',
    icon: 'brain',
    tags: ['Python', 'Machine Learning'],
    title: 'Module IA de recommandation',
    context: 'Module ML pour recommandation produits personnalisée selon l’historique client dans Odoo.',
    stack: 'Odoo + Python ML',
    year: '2025',
  },
] as const;

export const projectFilters = [
  { id: 'all', label: 'Tous' },
  { id: 'odoo', label: 'Odoo ERP' },
  { id: 'web', label: 'Web' },
  { id: 'ia', label: 'IA / IoT' },
] as const;

/* ── À propos ── */
export const values = [
  {
    icon: 'target',
    title: 'Notre mission',
    text: 'Rendre la digitalisation accessible aux PME et startups d’Afrique, avec les mêmes outils que les grandes entreprises.',
  },
  {
    icon: 'eye',
    title: 'Notre vision',
    text: 'Être le partenaire digital de référence pour les entreprises africaines, au service de tout le continent.',
  },
  {
    icon: 'bolt',
    title: 'Nos valeurs',
    text: 'Excellence technique, transparence dans la relation client, et engagement humain de bout en bout. On livre, on forme, on reste.',
  },
] as const;


/* ── Contact / FAQ ── */
export const faq = [
  {
    q: 'Combien coûte une implémentation Odoo ?',
    a: 'Cela dépend du périmètre : nombre de modules, migration de données, formation. Nous établissons un devis sur mesure après un premier échange, toujours gratuit.',
  },
  {
    q: 'Vous intervenez à distance ou en présentiel ?',
    a: 'Les deux. La majorité de nos projets se font à distance (appel vidéo, accès serveur distant). Selon votre localisation en Afrique, nous pouvons aussi intervenir en présentiel selon le projet.',
  },
  {
    q: 'Quelles sont vos conditions de paiement ?',
    a: '50% à la signature du devis, 50% à la livraison finale. Nous acceptons les virements bancaires, Wave, Orange Money et autres moyens courants en Afrique.',
  },
  {
    q: 'Combien de temps dure une implémentation Odoo ?',
    a: 'Le package Starter est livré en 1 à 2 semaines. Le Business en 3 à 5 semaines. Les projets Enterprise dépendent de la complexité : nous établissons un planning détaillé à la signature.',
  },
  {
    q: 'Quelle est la différence entre Odoo Community et Enterprise ?',
    a: 'Odoo Community est 100% gratuit et open source. Enterprise ajoute des modules avancés (comptabilité, signature électronique...) avec un abonnement annuel. Pour la majorité des PME, Community est suffisant. On vous conseille lors du premier échange.',
  },
] as const;

export const contactChannels = [
  { icon: 'mail', label: 'Email', value: 'contact@devoriatech.com', href: 'mailto:contact@devoriatech.com' },
  { icon: 'brand-linkedin', label: 'LinkedIn', value: 'maxwilfred-gak', href: 'https://linkedin.com/in/maxwilfred-gak' },
  { icon: 'map-pin', label: 'Localisation', value: 'Afrique · à distance', href: '' },
  { icon: 'clock', label: 'Disponibilité', value: 'Lun–Sam · 9h–19h (GMT+1)', href: '' },
] as const;
