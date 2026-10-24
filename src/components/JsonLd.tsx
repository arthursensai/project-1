import { business } from "@/data/business";
import { verified } from "@/lib/utils";

/**
 * Données structurées LocalBusiness : émises uniquement si adresse ET téléphone sont confirmés.
 * Tant que ce n'est pas le cas, le composant ne rend rien (aucune donnée fabriquée).
 */
export function JsonLd() {
  const address = verified(business.streetAddress);
  const phone = verified(business.phone);
  if (!address || !phone) return null;

  const hours = verified(business.openingHours);
  const data = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: business.name,
    telephone: phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: address,
      addressLocality: business.city,
      addressCountry: business.country,
    },
    ...(hours ? { openingHours: hours.map((h) => `${h.days} ${h.hours}`) } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
