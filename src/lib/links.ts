import { business } from "@/data/business";
import { isHttpsUrl, telHref, verified, whatsappHref } from "@/lib/utils";

export type Action = { href: string; external: boolean };

/** Action de contact : WhatsApp confirmé > téléphone confirmé > section Contact de la page. */
export function contactAction(): Action {
  const wa = verified(business.whatsapp);
  const waLink = wa ? whatsappHref(wa) : null;
  if (waLink) return { href: waLink, external: true };

  const phone = verified(business.phone);
  const tel = phone ? telHref(phone) : null;
  if (tel) return { href: tel, external: false };

  return { href: "#contact", external: false };
}

/** Itinéraire : uniquement une fiche Maps confirmée, sinon section Contact. */
export function directionsAction(): Action {
  const maps = verified(business.mapsUrl);
  if (maps && isHttpsUrl(maps)) return { href: maps, external: true };
  return { href: "#contact", external: false };
}

export function reviewsUrl(): string | null {
  const url = verified(business.reviewsUrl);
  return url && isHttpsUrl(url) ? url : null;
}
