# coup'ART — aperçu de design (non officiel)

Concept de site vitrine d'une page pour le barbershop coup'ART (Hay Riad Ezzaitoune, Aïn Chkef, Fès).
**Ce projet n'a pas été commandé par le salon et n'est pas son site officiel.**
Aucune coordonnée, aucun tarif, aucun horaire, aucun avis n'a été inventé : tout est à confirmer
(voir `CONTENT-CHECKLIST.md`).

Stack : Next.js (App Router), React, TypeScript, Tailwind CSS v4, Lucide React. Aucun backend, aucune base de données.

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
- **Couleurs et typographie** (temporaires) : bloc `@theme` dans `src/app/globals.css`.
  Les polices sont des piles système (aucun téléchargement). Pour des polices de marque, utiliser `next/font/local`.

## Remplacer le logo et les photos
- **Logo** : déposer le fichier dans `public/logo/` et remplacer le contenu de `src/components/Wordmark.tsx`
  par un `<Image>`. Ajouter un favicon (`src/app/icon.png` ou `public/favicon.ico`) issu du logo réel.
- **Photos** : déposer les images autorisées dans `public/images/`, puis dans `business.gallery` :
  ```ts
  gallery: { status: "verified", value: [
    { src: "/images/salon-01.jpg", alt: "Description réelle de la photo", width: 1600, height: 1200 },
  ]}
  ```
  La galerie passe des emplacements vides aux vraies images sans autre modification.
  La photo principale du hero est un emplacement marqué : remplacer le bloc `figure` de `Hero.tsx`.

## Mode aperçu
`NEXT_PUBLIC_PREVIEW_MODE` (voir `.env.example`) est actif par défaut : petit bandeau
« Aperçu de design — non officiel », note en pied de page et `noindex, nofollow`.
Mettre `false` uniquement après accord écrit du salon.

## Déploiement sur Vercel
1. Pousser le projet sur un dépôt Git (ou utiliser la CLI `vercel`).
2. Importer le dépôt dans Vercel : Next.js est détecté automatiquement.
3. Variables d'environnement : `NEXT_PUBLIC_PREVIEW_MODE` (et `NEXT_PUBLIC_SITE_URL` si le domaine réel est connu).
4. Ne pas associer de domaine ni publier sous une identité officielle sans accord du salon.

## À vérifier avant production
Voir `CONTENT-CHECKLIST.md`.
