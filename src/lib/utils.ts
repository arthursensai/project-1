import type { Field } from "@/data/business";

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Renvoie la valeur uniquement si elle est confirmée. */
export function verified<T>(field: Field<T>): T | null {
  return field.status === "verified" && field.value !== null ? field.value : null;
}

/** Préview actif sauf si NEXT_PUBLIC_PREVIEW_MODE vaut explicitement "false". */
export const isPreview = process.env.NEXT_PUBLIC_PREVIEW_MODE !== "false";

function digitsOnly(phone: string): string {
  return phone.replace(/\D/g, "");
}

export function whatsappHref(number: string): string | null {
  const digits = digitsOnly(number);
  return digits.length >= 8 ? `https://wa.me/${digits}` : null;
}

export function telHref(number: string): string | null {
  const cleaned = number.replace(/[^\d+]/g, "");
  return cleaned.length >= 8 ? `tel:${cleaned}` : null;
}

export function isHttpsUrl(value: string): boolean {
  try {
    return new URL(value).protocol === "https:";
  } catch {
    return false;
  }
}
