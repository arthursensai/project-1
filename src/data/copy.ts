/** Tout le texte visible du site. Langue principale provisoire : français. */

export const copy = {
  lang: "fr",
  locale: "fr_MA",

  meta: {
    // Titre et description honnêtes : le site est un concept indépendant tant que le mode aperçu est actif.
    previewTitle: "coup'ART — concept de site (non officiel)",
    previewDescription:
      "Concept de design indépendant pour coup'ART, salon de coiffure à Aïn Chkef, Fès. Non commandé et non approuvé par le salon.",
    title: "coup'ART — Salon de coiffure à Aïn Chkef, Fès",
    description:
      "coup'ART, salon de coiffure à Aïn Chkef, Fès : prestations, horaires et accès.",
    ogAlt: "coup'ART — concept de site non officiel",
  },

  preview: {
    label: "Concept indépendant — non officiel",
  },

  a11y: {
    skipLink: "Aller au contenu",
    home: "coup'ART — haut de page",
    primaryNav: "Navigation principale",
    footerNav: "Navigation du pied de page",
    heroPlaceholder: "Emplacement réservé à une photographie du salon",
  },

  nav: [
    { label: "Prestations", href: "#prestations" },
    { label: "Galerie", href: "#galerie" },
    { label: "Accès", href: "#contact" },
  ],

  header: {
    contactCta: "Contact",
  },

  hero: {
    kicker: "Salon de coiffure · Aïn Chkef, Fès",
    headline: "Coiffure à Aïn Chkef, Fès.",
    lead: "Prestations, horaires et accès réunis sur une page simple, pensée d’abord pour le mobile.",
    primaryCta: "Contacter le salon",
    secondaryCta: "Quartier et accès",
    placeholderLabel: "Photo du salon à venir",
  },

  services: {
    eyebrow: "01 — Prestations",
    title: "Prestations et tarifs",
    emptyTitle: "La carte des prestations arrivera ici.",
    empty:
      "Prestations, tarifs et durées seront publiés après confirmation par le salon.",
    priceLabel: "Tarif",
    durationLabel: "Durée",
  },

  gallery: {
    eyebrow: "02 — Galerie",
    title: "Le travail du salon",
    empty:
      "Les photographies du salon prendront place ici, avec l’accord de leurs auteurs et des clients concernés.",
    placeholderLabel: "Emplacement photo",
    showMore: "Voir les autres photos",
  },

  reviews: {
    eyebrow: "Avis",
    title: "Ce que disent les clients",
    link: "Lire les avis sur Google",
  },

  location: {
    eyebrow: "03 — Accès",
    title: "Adresse et contact",
    pending: "À confirmer",
    neighbourhoodNote: "Quartier indiqué pour ce concept, à confirmer par le salon.",
    labels: {
      address: "Adresse",
      hours: "Horaires",
      phone: "Téléphone",
      whatsapp: "WhatsApp",
    },
    whatsappCta: "Écrire sur WhatsApp",
    callCta: "Appeler",
    directionsCta: "Itinéraire",
  },

  contactBar: {
    call: "Appeler",
    whatsapp: "WhatsApp",
    directions: "Itinéraire",
  },

  footer: {
    note: "Concept de design indépendant, non commandé ni approuvé par le salon.",
    backToTop: "Retour en haut",
  },

  notFound: {
    title: "Page introuvable",
    text: "Cette page n’existe pas.",
    back: "Retour à l’accueil",
  },
} as const;
