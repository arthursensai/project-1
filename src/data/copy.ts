/** Tout le texte visible du site. Langue principale provisoire : français. */

export const copy = {
  lang: "fr",
  locale: "fr_MA",

  meta: {
    title: "coup'ART — Barbier à Fès, Aïn Chkef",
    description:
      "Aperçu de design pour coup'ART, barbershop à Fès : prestations, horaires et accès sur une page pensée pour le mobile.",
    ogAlt: "coup'ART — aperçu de design",
  },

  preview: {
    label: "Aperçu de design — non officiel",
  },

  a11y: {
    skipLink: "Aller au contenu",
    primaryNav: "Navigation principale",
    footerNav: "Navigation du pied de page",
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
    headline: "Le barbier d’Aïn Chkef, à Fès.",
    lead: "Prestations, horaires et accès réunis sur une seule page, pensée d’abord pour le mobile.",
    primaryCta: "Contacter le salon",
    secondaryCta: "Quartier et accès",
    placeholderCaption: "Photographie principale du salon à fournir",
  },

  services: {
    eyebrow: "01 — Prestations",
    title: "Prestations et tarifs",
    emptyTitle: "Bientôt ici",
    empty:
      "La liste des prestations, les tarifs et les durées seront affichés dès qu’ils auront été confirmés par le salon. Rien n’est inventé dans cet aperçu.",
    priceLabel: "Tarif",
    durationLabel: "Durée",
  },

  gallery: {
    eyebrow: "02 — Galerie",
    title: "Le travail du salon",
    empty:
      "Cet espace accueillera les photographies du salon, publiées avec l’accord de leurs auteurs et des clients concernés.",
    placeholderLabel: "Emplacement photo",
  },

  reviews: {
    eyebrow: "Avis",
    title: "Ce que disent les clients",
    link: "Lire les avis sur Google",
  },

  location: {
    eyebrow: "03 — Accès",
    title: "Adresse et contact",
    pending: "À confirmer avec le salon",
    neighbourhoodNote: "Quartier indiqué pour ce concept — adresse précise non confirmée.",
    labels: {
      neighbourhood: "Quartier",
      address: "Adresse",
      hours: "Horaires",
      phone: "Téléphone",
      whatsapp: "WhatsApp",
    },
    whatsappCta: "Écrire sur WhatsApp",
    callCta: "Appeler",
    directionsCta: "Itinéraire",
  },

  footer: {
    note: "Aperçu de design indépendant, non commandé par le salon.",
    backToTop: "Retour en haut",
  },

  notFound: {
    title: "Page introuvable",
    text: "Cette page n’existe pas.",
    back: "Retour à l’accueil",
  },
} as const;
