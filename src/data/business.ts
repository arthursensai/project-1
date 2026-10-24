/**
 * Données du salon — source unique de vérité.
 *
 * Règle : une valeur n'est utilisée par le site que si son statut est "verified".
 * Tout ce qui est "unverified" reste affiché comme « à confirmer » et ne produit
 * ni lien, ni donnée structurée. Voir CONTENT-CHECKLIST.md.
 */

export type Verification = "verified" | "unverified";

export type Field<T> = {
  value: T | null;
  status: Verification;
  /** Ce qu'il faut obtenir ou confirmer auprès du salon. */
  note?: string;
};

export type Service = {
  name: string;
  description?: string;
  price?: string;
  duration?: string;
};

export type OpeningHours = { days: string; hours: string };

export type GalleryImage = {
  src: string; // chemin sous /public, ex. "/images/salon-01.jpg"
  alt: string; // description réelle de la photo
  width: number;
  height: number;
  caption?: string; // uniquement si l'information est connue
};

export type SocialLink = { label: string; href: string };

export type Business = {
  name: string;
  city: string;
  country: string;
  /** Quartier indiqué dans le cahier des charges du concept. Pas une adresse postale. */
  neighbourhood: Field<string>;
  streetAddress: Field<string>;
  phone: Field<string>; // format international, ex. "+212 6 00 00 00 00"
  whatsapp: Field<string>; // numéro professionnel confirmé
  openingHours: Field<OpeningHours[]>;
  services: Field<Service[]>;
  /** Photo principale du hero : image authentique, fournie et autorisée par le salon. */
  heroImage: Field<GalleryImage>;
  gallery: Field<GalleryImage[]>;
  mapsUrl: Field<string>; // lien vers la fiche Google Maps vérifiée
  reviewsUrl: Field<string>; // lien vers la fiche d'avis Google vérifiée
  social: Field<SocialLink[]>;
};

export const business: Business = {
  name: "coup'ART",
  city: "Fès",
  country: "MA",

  neighbourhood: {
    value: "Hay Riad Ezzaitoune, Aïn Chkef, Fès",
    status: "unverified",
    note: "Quartier indiqué dans le brief. Un annuaire tiers (dudu) liste « coup'ART » à Hay Riad Ezzaitoune, Aïn Chkef, Fès 30050 : concordant, mais source tierce, donc à confirmer par le propriétaire.",
  },
  streetAddress: {
    value: null,
    status: "unverified",
    note: "Adresse postale exacte (rue, numéro, repère).",
  },
  phone: {
    value: null,
    status: "unverified",
    note: "Numéro de téléphone du salon, confirmé par le propriétaire.",
  },
  whatsapp: {
    value: null,
    status: "unverified",
    note: "Numéro WhatsApp professionnel, confirmé par le propriétaire.",
  },
  openingHours: {
    value: null,
    status: "unverified",
    note: "Jours et horaires d'ouverture, y compris la pause et la fermeture hebdomadaire.",
  },
  services: {
    value: null,
    status: "unverified",
    note: "Liste des prestations, avec tarifs et durées si le salon souhaite les afficher.",
  },
  heroImage: {
    value: null,
    status: "unverified",
    note: "Photo principale (façade, intérieur ou réalisation) avec autorisation écrite.",
  },
  gallery: {
    value: null,
    status: "unverified",
    note: "Photographies du salon et des réalisations, avec autorisation écrite.",
  },
  mapsUrl: {
    value: null,
    status: "unverified",
    note: "Lien de la fiche Google Maps officielle du salon.",
  },
  reviewsUrl: {
    value: null,
    status: "unverified",
    note: "Lien de la fiche d'avis Google officielle du salon.",
  },
  social: {
    value: null,
    status: "unverified",
    note: "Comptes officiels (Instagram, Facebook…) si le salon en a.",
  },
};
