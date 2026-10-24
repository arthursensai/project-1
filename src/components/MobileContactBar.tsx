import { MapPin, MessageCircle, Phone } from "lucide-react";
import { copy } from "@/data/copy";
import { contactAction, directionsAction } from "@/lib/links";
import { ActionLink } from "./ActionLink";

/**
 * Barre de contact compacte, mobile uniquement. Elle n'existe que si un numéro WhatsApp ou
 * téléphone est confirmé : tant que ce n'est pas le cas, rien n'est rendu (pas de bouton mort).
 * Le séparateur final réserve la place de la barre pour ne jamais masquer le pied de page.
 */
export function MobileContactBar() {
  const contact = contactAction();
  if (contact.href.startsWith("#")) return null;

  const isWhatsapp = contact.href.startsWith("https://wa.me/");
  const directions = directionsAction();
  const hasDirections = directions.href.startsWith("https://");

  return (
    <>
      <div aria-hidden="true" className="h-[calc(4rem+env(safe-area-inset-bottom))] md:hidden" />
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-rule bg-canvas pb-[env(safe-area-inset-bottom)] md:hidden">
        <div className="wrap flex gap-2 py-2">
          <ActionLink
            action={contact}
            className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 bg-action font-medium text-action-ink"
          >
            {isWhatsapp ? <MessageCircle aria-hidden="true" size={18} /> : <Phone aria-hidden="true" size={18} />}
            {isWhatsapp ? copy.contactBar.whatsapp : copy.contactBar.call}
          </ActionLink>
          {hasDirections && (
            <ActionLink
              action={directions}
              className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 border border-ink font-medium"
            >
              <MapPin aria-hidden="true" size={18} />
              {copy.contactBar.directions}
            </ActionLink>
          )}
        </div>
      </div>
    </>
  );
}
