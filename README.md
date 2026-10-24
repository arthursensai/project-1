# coup'ART — aperçu de design (non officiel)

Concept de site vitrine d'une page pour le barbershop coup'ART (Hay Riad Ezzaitoune, Aïn Chkef, Fès).
**Ce projet n'a pas été commandé par le salon et n'est pas son site officiel.**
Aucune coordonnée, aucun tarif, aucun horaire, aucun avis n'a été inventé : tout est à confirmer
(voir `CONTENT-CHECKLIST.md`).

Stack : Next.js (App Router), React, TypeScript, Tailwind CSS v4, Lucide React. Aucun backend, aucune base de données.

## Direction artistique (proposition de concept)
Typographie et papier chaud : un wordmark éditorial (« coup » en italique, apostrophe colorée, « ART » en capitales grasses),
une arche traversée d'un trait de coupe comme ancrage visuel, des filets fins, et un rythme de sections qui varie
(liste, bande secondaire, bande d'accent) au lieu de cartes répétées.

**La palette et la typographie sont un style de concept proposé, pas l'identité du salon.** Aucune couleur, police ou logo officiel
n'est connu ; ils restent à remplacer si le propriétaire fournit ou approuve une identité. Le wordmark n'est pas le logo du salon.

## Prérequis
Node.js 20.9 ou plus récent, npm.

## Installation et lancement
```bash
npm install
npm run dev        # http://localhost:3000
```

## Vérifications et build de production
```bash
npm run typecheck
npm run lint
npm run build
npm run start      # sert le build de production
npm run check      # enchaîne typecheck + lint + build
```

## Personnaliser le contenu
- **Données du salon** : `src/data/business.ts`. Chaque champ a un `status` (`"verified"` / `"unverified"`).
  Le site n'utilise une valeur que si elle est `"verified"`. Renseigner `value` puis passer `status` à `"verified"` :
  - `phone`, `whatsapp` : boutons Appeler / WhatsApp (les actions « Contact » du header et du hero les utilisent automatiquement) ;
  - `mapsUrl` : bouton « Itinéraire » ;
  - `reviewsUrl` : affiche la section Avis (lien seulement) ;
  - `openingHours`, `streetAddress` : section Accès ;
  - `services` : liste dans Prestations ;
  - `streetAddress` + `phone` confirmés : données structurées `HairSalon` émises automatiquement.
- **Textes visibles** : `src/data/copy.ts` (français). Pour une autre langue, dupliquer ce fichier et
  adapter `layout.tsx` ; rien n'est ajouté automatiquement.
- **Couleurs et typographie** (proposées pour le concept) : bloc `@theme` dans `src/app/globals.css`, organisé en rôles
  sémantiques (`canvas`, `surface`, `ink`, `ink-muted`, `rule`, `action`, `action-strong`, `action-ink`).
  Les composants n'utilisent que ces rôles : changer la palette se fait à un seul endroit.
  Les polices sont des piles système (aucune requête externe). Pour des polices de marque, utiliser `next/font/local`.

## Remplacer le logo et les photos
- **Logo** : déposer le fichier dans `public/logo/` et remplacer le contenu de `src/components/Wordmark.tsx`
  par un `<Image>`. Ajouter un favicon (`src/app/icon.png` ou `public/favicon.ico`) issu du logo réel.
- **Photo principale (hero)** : déposer l'image dans `public/images/`, puis renseigner `business.heroImage`
  (`status: "verified"`, `src`, `alt`, `width`, `height`, `caption` facultative). Elle remplit la même arche, sans autre modification.
- **Galerie** : déposer les images autorisées dans `public/images/`, puis dans `business.gallery` :
  ```ts
  gallery: { status: "verified", value: [
    { src: "/images/salon-01.jpg", alt: "Description réelle de la photo", width: 1600, height: 1200 },
  ]}
  ```
  La galerie passe des emplacements vides aux vraies images sans autre modification : mise en page éditoriale, ratios d'origine
  (pas de décalage de mise en page), quatre photos visibles d'emblée, les suivantes repliées et chargées à la demande.
  Une `caption` n'est à renseigner que si l'information est connue.

## Barre de contact mobile
Une barre compacte (Appeler / WhatsApp, Itinéraire) apparaît en bas de l'écran sur mobile **uniquement si** un numéro WhatsApp ou
téléphone est confirmé. Elle respecte les zones sûres (`safe-area-inset-bottom`) et réserve sa propre hauteur pour ne pas masquer le pied de page.
Tant que rien n'est confirmé, elle n'est pas rendue.

## Mode aperçu
`NEXT_PUBLIC_PREVIEW_MODE` (voir `.env.example`) est actif par défaut : petit bandeau
« Concept indépendant — non officiel », note en pied de page, titre et description « concept (non officiel) »
et `noindex, nofollow`. Même contrôle pour l'image Open Graph. Aucun favicon n'est fourni : il serait tiré d'un logo inventé.
Mettre `false` uniquement après accord écrit du salon.

## Déploiement sur Vercel
1. Pousser le projet sur un dépôt Git (ou utiliser la CLI `vercel`).
2. Importer le dépôt dans Vercel : Next.js est détecté automatiquement.
3. Variables d'environnement : `NEXT_PUBLIC_PREVIEW_MODE` (et `NEXT_PUBLIC_SITE_URL` si le domaine réel est connu).
4. Ne pas associer de domaine ni publier sous une identité officielle sans accord du salon.

## À vérifier avant production
Voir `CONTENT-CHECKLIST.md`.
