/* =========================================================================
   DevoriaTech — Catalogue complet des services (approche 360°)
   15 domaines organisés en 5 familles couvrant tout le cycle de vie du
   numérique, de la stratégie (SI) au cœur physique (industrie, infra).
   ========================================================================= */

export type CatalogService = {
  title: string;
  tagline?: string;
  description: string;
  sub?: { label: string; text: string }[];
  delivers: string;
};

export type ServiceFamily = {
  id: string;
  icon: string;
  name: string;
  tagline: string;
  blurb: string;
  tags: string[];
  services: CatalogService[];
};

export const serviceFamilies: ServiceFamily[] = [
  {
    id: 'systemes-information',
    icon: 'database',
    name: 'Systèmes d’information',
    tagline: 'Le cerveau de votre entreprise',
    blurb:
      'CRM, MES et ERP pour piloter toute votre activité depuis une base de données unique.',
    tags: ['CRM', 'MES', 'ERP'],
    services: [
      {
        title: 'CRM — Gestion de la relation client',
        description:
          'Centralisez tout ce qui touche à vos clients : prospects, contacts, historique des appels, devis et réclamations. Améliorez votre relation client et fidélisez en ayant une vision unique de chaque interlocuteur.',
        delivers:
          'Une plateforme connectée (Salesforce, HubSpot ou solution sur mesure) avec des tableaux de bord pour vos commerciaux.',
      },
      {
        title: 'MES — Pilotage de la production',
        description:
          'Surveillez et pilotez votre production en temps réel depuis l’atelier. Réduisez les arrêts machine, traquez les défauts qualité et optimisez vos rendements.',
        delivers: 'Des écrans de supervision avec remontée des données machines.',
      },
      {
        title: 'ERP — Gestion globale',
        description:
          'Intégrez toutes vos fonctions (compta, RH, achats, stocks, production) dans une seule base de données. Évitez les doubles saisies et obtenez une vision financière et logistique en temps réel.',
        delivers: 'Un système central (SAP, Odoo) avec des modules paramétrés sur mesure.',
      },
    ],
  },
  {
    id: 'developpement-interfaces',
    icon: 'browser',
    name: 'Développement & interfaces',
    tagline: 'La vitrine et les interfaces',
    blurb:
      'Sites web, applications mobiles, web et bureautiques pour vos clients et vos équipes.',
    tags: ['Site web', 'Mobile', 'Web app', 'Bureautique'],
    services: [
      {
        title: 'Site web',
        description:
          'Créez votre présence en ligne avec un site vitrine, e-commerce ou portail d’information. Soyez trouvable sur Google et rassurez vos clients.',
        delivers:
          'Un site responsive (adapté mobile), référencé SEO, avec un back-office pour mettre à jour vos contenus.',
      },
      {
        title: 'Application mobile',
        description:
          'Développez une application native Android/iOS pour offrir une expérience fluide à vos clients ou équipes terrain. Profitez des capteurs du téléphone (GPS, caméra, notifications push).',
        delivers:
          'Une application publiée sur Google Play / Apple Store avec un tableau d’administration.',
      },
      {
        title: 'Application web',
        description:
          'Accédez à votre outil depuis n’importe quel navigateur, sans téléchargement. Fonctionne sur tous les systèmes d’exploitation et se met à jour automatiquement.',
        delivers: 'Une interface sécurisée (HTTPS) avec des fonctionnalités métiers complexes.',
      },
      {
        title: 'Applications bureautiques',
        tagline: 'La puissance du poste de travail',
        description:
          'Installez des logiciels directement sur les PC (Windows, macOS) pour des besoins spécifiques : facturation lourde, import/export de gros fichiers, interface avec des périphériques locaux. Profitez de toute la puissance de votre machine sans dépendre d’Internet.',
        delivers:
          'Un exécutable (.exe ou .dmg) avec système de mise à jour automatique et base de données locale.',
      },
    ],
  },
  {
    id: 'intelligence-objets',
    icon: 'brain',
    name: 'Intelligence & objets connectés',
    tagline: 'Analyser vos données, connecter le monde réel',
    blurb: 'IA, IoT/IIoT et smart agriculture pour analyser, prédire et connecter le monde réel.',
    tags: ['IA', 'IoT', 'IIoT', 'Agri'],
    services: [
      {
        title: 'Intelligence Artificielle',
        tagline: 'L’intelligence au service de vos données',
        description:
          'Intégrez des modèles de Machine Learning / Deep Learning pour analyser vos données (images, textes, chiffres). Automatisez des tâches cognitives comme la reconnaissance de défauts, les chatbots intelligents ou la prévision des pannes.',
        delivers:
          'Une API exposant le modèle IA, ou une application intégrée affichant les prédictions en temps réel.',
      },
      {
        title: 'IoT & IIoT',
        tagline: 'La connexion du monde réel',
        description:
          'Connectez vos objets et vos machines pour collecter et exploiter leurs données en continu.',
        sub: [
          {
            label: 'IoT (Internet des Objets)',
            text: 'Connectez des objets du quotidien : capteurs météo, balises GPS, objets connectés santé.',
          },
          {
            label: 'IIoT (Internet des Objets Industriel)',
            text: 'Connectez vos machines industrielles pour surveiller vibrations, température, consommation électrique.',
          },
        ],
        delivers:
          'Une architecture complète : capteurs + passerelle + plateforme cloud + tableau de bord pour visualiser vos données en temps réel.',
      },
      {
        title: 'Smart Agriculture',
        tagline: 'L’agriculture connectée',
        description:
          'Appliquez les technologies (IoT, IA, drones) à l’agriculture : pilotage des irrigations, épandage intelligent, surveillance des cultures par images satellites/drones. Optimisez l’usage de l’eau, des engrais et des pesticides tout en augmentant les rendements.',
        delivers:
          'Un système complet : stations météo connectées, sondes d’humidité, plateforme de recommandation et tableaux de bord accessibles sur smartphone.',
      },
    ],
  },
  {
    id: 'automatisation-transformation',
    icon: 'refresh',
    name: 'Automatisation & transformation',
    tagline: 'Repenser vos méthodes de travail',
    blurb:
      'Digitalisation des process et automatisation (RPA) pour gagner en agilité et en traçabilité.',
    tags: ['Digitalisation', 'RPA'],
    services: [
      {
        title: 'Digitalisation des process',
        tagline: 'La transformation numérique de votre organisation',
        description:
          'Auditez et repensez l’ensemble de vos processus métiers pour les passer au numérique. Identifiez les goulots d’étranglement, simplifiez les flux de travail, dématérialisez les documents et automatisez les circuits de validation. La digitalisation ne se limite pas à un outil : c’est une refonte complète de vos méthodes de travail pour gagner en agilité, en efficacité et en traçabilité.',
        delivers:
          'Un diagnostic complet de vos processus, un plan de transformation sur mesure, des solutions logicielles adaptées (GED, workflow, signature électronique) et un accompagnement au changement pour vos équipes.',
      },
      {
        title: 'Automatisation des processus (RPA)',
        tagline: 'Le pilotage des tâches bureautiques',
        description:
          'Déployez des robots logiciels qui imitent les clics et saisies d’un humain sur un ordinateur. Supprimez les tâches répétitives et chronophages : recopier des données d’Excel vers un ERP, envoyer des mails automatiques, générer des rapports.',
        delivers:
          'Des bots paramétrés (UiPath, Power Automate) qui s’exécutent la nuit ou en arrière-plan, avec des logs pour vérifier leur bon déroulement.',
      },
    ],
  },
  {
    id: 'industrie-infrastructure',
    icon: 'building-factory',
    name: 'Industrie & infrastructure',
    tagline: 'Faire tourner les machines et les réseaux',
    blurb:
      'Automatisation industrielle, applications d’atelier et déploiement de l’infrastructure IT.',
    tags: ['Indus', 'Ateliers', 'Infra'],
    services: [
      {
        title: 'Automatisation industrielle',
        tagline: 'Le pilotage automatique des machines',
        description:
          'Programmez des automates (PLC) et des robots pour exécuter des cycles de production autonomes (emballage, soudure, convoyage). Augmentez cadence, précision et sécurité tout en réduisant la fatigue des opérateurs.',
        delivers:
          'Des automates configurés (Siemens, Schneider), des armoires électriques câblées, des variateurs de vitesse et des écrans IHM pour le réglage.',
      },
      {
        title: 'Applications industrielles',
        tagline: 'Le pilotage des ateliers',
        description:
          'Déployez des applications sur des postes en usine ou des automates pour contrôler des machines, lire des capteurs ou gérer des stocks de matière première. Remplacez les feuilles de papier par des écrans tactiles robustes.',
        delivers:
          'Un logiciel installé sur PC industriel ou terminaux mobiles durcis, avec interface homme-machine (IHM).',
      },
      {
        title: 'Déploiement de l’infrastructure informatique',
        tagline: 'Le socle physique & réseau',
        description:
          'Nous concevons, installons et sécurisons le socle matériel et réseau sur lequel tournent vos applications.',
        sub: [
          {
            label: 'Dimensionnement',
            text: 'Calculez la puissance nécessaire (serveurs, stockage, débit réseau) selon vos utilisateurs et applications.',
          },
          {
            label: 'Installation',
            text: 'Acheminez, montez en baie, câblez et alimentez vos équipements (serveurs, switchs, pare-feux, onduleurs) dans une salle sécurisée et climatisée.',
          },
          {
            label: 'Configuration',
            text: 'Paramétrez les adresses IP, les VLAN, les règles de sécurité (firewall), les annuaires (Active Directory), les sauvegardes et la supervision.',
          },
        ],
        delivers:
          'Une salle informatique opérationnelle et sécurisée, avec un plan de reprise d’activité (PRA) et une documentation technique complète (schémas réseaux, procédures).',
      },
    ],
  },
];

/* Approche 360° — les 5 piliers résumés */
export const approche360 = [
  { icon: 'database', title: 'La stratégie', text: 'CRM, MES et ERP pour gérer et piloter toute l’entreprise.' },
  { icon: 'browser', title: 'Les interfaces', text: 'Web, mobile et bureautique pour interagir avec vos utilisateurs.' },
  { icon: 'brain', title: 'L’intelligence', text: 'IA et IoT pour analyser vos données et connecter le monde réel.' },
  { icon: 'refresh', title: 'La transformation', text: 'Digitalisation des process et automatisation pour repenser vos méthodes.' },
  { icon: 'building-factory', title: 'Le cœur physique', text: 'Automatisation industrielle et infrastructure pour faire tourner machines et réseaux.' },
] as const;

/* Ambitions stratégiques (page À propos) */
export const ambitions = [
  {
    icon: 'rocket',
    title: 'La plus grande structure de digitalisation d’Afrique',
    text: 'Bâtir une référence continentale de la transformation numérique, du commerce à l’industrie.',
  },
  {
    icon: 'cash',
    title: 'Financer les projets structurants',
    text: 'Apporter le plus de financement possible aux projets structurants dans les systèmes d’information.',
  },
  {
    icon: 'users',
    title: 'Améliorer les conditions de vie',
    text: 'Participer à l’amélioration des conditions de vie grâce au numérique, au service des populations.',
  },
  {
    icon: 'shield',
    title: 'Devenir un holding',
    text: 'Faire évoluer DevoriaTech vers un groupe structuré, pérenne et diversifié.',
  },
] as const;

/* Ce que nous faisons au-delà du développement (page À propos) */
export const pillars = [
  { icon: 'grid', title: 'Solutions digitales', text: 'Systèmes d’information, développement, IA, IoT, automatisation et infrastructure.' },
  { icon: 'bulb', title: 'Consulting & accompagnement', text: 'Conseil, cadrage et accompagnement au changement à chaque étape.' },
  { icon: 'school', title: 'Formation', text: 'Formations métier, professionnelles et certifiantes, avant et après déploiement.' },
  { icon: 'handshake', title: 'Réseautage', text: 'Mise en relation et construction d’un écosystème digital africain.' },
  { icon: 'target', title: 'Conception de projets', text: 'Identifier les problèmes du quotidien et concevoir la solution digitale adaptée.' },
] as const;
