# DevoriaTech — Site vitrine

Site vitrine de **DevoriaTech**, solutions digitales pour les entrepreneurs
d'Afrique (ERP Odoo, sites web, applications mobiles, automatisation IA).

Reconstruit avec un design haut de gamme (direction _dark premium_ + bascule
clair/sombre) inspiré des meilleurs sites tech (Stripe, Linear, Vercel).

---

## Stack

| Outil | Rôle |
| --- | --- |
| [Astro 5](https://astro.build) | Framework, sortie **statique** |
| [Tailwind CSS v4](https://tailwindcss.com) | Design system via `@theme` (CSS-first) |
| [Motion](https://motion.dev) | Animations sur l'unique îlot React (spotlight desktop) |
| React 19 | Uniquement pour l'îlot `SpotlightCard` (hydraté sur desktop) |
| TypeScript | Typage des données et composants |
| `@astrojs/sitemap` | Génération du `sitemap-index.xml` |
| `sharp` | Optimisation d'images + génération de l'image OG |

**Philosophie performance** : tout est en CSS + petits scripts _vanilla_. Le
seul îlot React (Motion) — la carte à spotlight — n'est hydraté que sur les
appareils avec survol (`client:media="(hover: hover) and (pointer: fine)"`),
donc **le mobile 3G ne télécharge jamais React ni Motion**.

---

## Commandes

```bash
npm install        # installer les dépendances
npm run dev        # serveur de développement (http://localhost:4321)
npm run build      # build de production → dist/
npm run preview    # prévisualiser le build de production localement
```

> Génération de l'image de partage (Open Graph), si besoin de la régénérer :
> `node scripts/gen-og.mjs` → `public/og.png`

---

## Configuration (variables d'environnement)

Copiez `.env.example` en `.env` et renseignez :

```bash
# Numéro WhatsApp au format international, sans + ni espaces
PUBLIC_WHATSAPP_NUMBER=212612345678

# ID Formspree (partie après /f/ dans l'URL du formulaire)
PUBLIC_FORMSPREE_ID=xxxxxxx
```

- Sans `PUBLIC_WHATSAPP_NUMBER`, les boutons WhatsApp pointent vers un lien
  générique (un rappel discret s'affiche sur la page contact).
- Sans `PUBLIC_FORMSPREE_ID`, le formulaire de contact ouvre proprement le
  logiciel mail du visiteur (repli `mailto:`) au lieu d'un envoi direct.

---

## Structure du projet

```
devoriatech/
├── public/                 # actifs statiques servis tels quels
│   ├── favicon.svg         # monogramme "D" de la marque
│   ├── og.png              # image de partage 1200×630
│   └── robots.txt
├── scripts/
│   └── gen-og.mjs          # génère public/og.png via sharp
├── src/
│   ├── data/
│   │   └── site.ts         # SOURCE UNIQUE du contenu (services, prix, FAQ…)
│   ├── lib/
│   │   └── env.ts          # helpers WhatsApp / Formspree
│   ├── styles/
│   │   └── global.css      # design system Tailwind v4 (@theme, thèmes)
│   ├── layouts/
│   │   └── BaseLayout.astro # <head>, SEO/OG, thème anti-FOUC, reveal
│   ├── components/
│   │   ├── Nav.astro        # nav glassmorphism + menu mobile + toggle thème
│   │   ├── Footer.astro
│   │   ├── Hero.astro       # hero animé (mesh gradient, grille, terminal)
│   │   ├── Section.astro    # wrapper section (eyebrow/titre/sous-titre)
│   │   ├── ServiceBento.astro # grille bento asymétrique (spotlight)
│   │   ├── Terminal.astro   # fenêtre terminal stylisée (CSS)
│   │   ├── Marquee.astro    # défilement infini (CSS)
│   │   ├── StatBar.astro    # bande de stats
│   │   ├── Counter.astro    # compteur animé au scroll (vanilla)
│   │   ├── Faq.astro        # accordéon (hauteur fluide)
│   │   ├── CtaSection.astro # bande d'appel à l'action partagée
│   │   ├── PageHero.astro   # hero des sous-pages
│   │   ├── Logo.astro / Icon.astro
│   │   └── react/
│   │       └── SpotlightCard.tsx # îlot Motion (desktop hover only)
│   └── pages/
│       ├── index.astro      # accueil
│       ├── services.astro
│       ├── solutions.astro
│       ├── realisations.astro
│       ├── a-propos.astro
│       ├── contact.astro
│       └── 404.astro
├── legacy/                  # ancien site HTML/CSS/JS (référence, conservé)
├── astro.config.mjs
├── tailwind via @tailwindcss/vite
└── tsconfig.json
```

---

## Design system

Tout le système (couleurs, rayons, ombres multi-couches, typos) vit dans
`src/styles/global.css` via `@theme` de Tailwind v4 — **aucune valeur magique**
dans les composants, uniquement des tokens (`var(--color-accent)`, etc.).

- **Direction** : dark premium (`#0A0A0B`) + accent menthe `#3FE68C` ; le thème
  clair reprend le blanc cassé `#FAFAF9` avec l'accent navy `#185FA5`.
- **Typos** : `Space Grotesk` (titres) + `Inter` (corps), auto-hébergées en
  woff2 via `@fontsource-variable`, `font-display: swap`.
- **Bascule de thème** : bouton dans la nav, persistée en `localStorage`,
  appliquée avant le premier paint (aucun flash).

---

## Performance & accessibilité

- Animations uniquement sur `transform` / `opacity` (60 fps), `prefers-reduced-motion` respecté.
- Images en AVIF/WebP via le pipeline Astro/sharp, dimensions réservées (CLS ≈ 0).
- Mobile-first (375 px d'abord), zones tactiles ≥ 44 px, menu mobile accessible
  (fermeture au tap extérieur et à Échap).
- Scores Lighthouse mobile (build de production) : **Performance 99–100,
  Accessibilité 96–100, Best Practices 100, SEO 100** — LCP ≈ 1,5 s, CLS 0.

---

## Déploiement

Sortie 100 % statique dans `dist/` — déployable sur n'importe quel hébergeur
statique (Netlify, Vercel, Cloudflare Pages, GitHub Pages, o2switch…).

1. `npm run build`
2. Publier le dossier `dist/`.
3. Pensez à définir les variables d'environnement `PUBLIC_*` sur l'hébergeur.

> Mettez à jour `site` dans `astro.config.mjs` avec le domaine final pour des
> URLs canoniques et un sitemap corrects.
