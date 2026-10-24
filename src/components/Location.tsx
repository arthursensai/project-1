import { MapPin, MessageCircle, Phone } from "lucide-react";
import { business } from "@/data/business";
import { copy } from "@/data/copy";
import { isHttpsUrl, telHref, verified, whatsappHref } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

const actionClass =
  "inline-flex min-h-12 items-center justify-center gap-2 bg-canvas px-5 font-medium text-ink hover:bg-surface";

export function Location() {
  const l = copy.location;
  const neighbourhood = business.neighbourhood.value;
  const address = verified(business.streetAddress);
  const hours = verified(business.openingHours);
  const phone = verified(business.phone);
  const whatsapp = verified(business.whatsapp);
  const maps = verified(business.mapsUrl);

  const tel = phone ? telHref(phone) : null;
  const wa = whatsapp ? whatsappHref(whatsapp) : null;
  const mapsLink = maps && isHttpsUrl(maps) ? maps : null;

  const pending = <span className="italic">{l.pending}</span>;
  const row = "grid gap-1 py-4 sm:grid-cols-[8rem_1fr] sm:gap-6";
  const label = "text-xs font-medium uppercase tracking-[0.14em]";

  return (
    <section
      id="contact"
      aria-labelledby="contact-titre"
      className="on-action bg-action text-action-ink"
    >
      <div className="wrap grid gap-10 py-16 md:grid-cols-12 md:gap-10 md:py-24">
        <div className="md:col-span-5">
          <SectionHeading id="contact-titre" eyebrow={l.eyebrow} title={l.title} inverse />
          {neighbourhood && (
            <p className="mt-8 font-display text-2xl leading-snug text-balance">
              {neighbourhood}
              {business.neighbourhood.status === "unverified" && (
                <span className="mt-2 block font-sans text-sm">{l.neighbourhoodNote}</span>
              )}
            </p>
          )}
        </div>

        <div className="md:col-span-6 md:col-start-7 md:pt-8">
          <dl className="divide-y divide-action-ink/40 border-y border-action-ink/40">
            <div className={row}>
              <dt className={label}>{l.labels.address}</dt>
              <dd>{address ?? pending}</dd>
            </div>
            <div className={row}>
              <dt className={label}>{l.labels.hours}</dt>
              <dd>
                {hours && hours.length > 0 ? (
                  <ul>
                    {hours.map((r) => (
                      <li key={r.days} className="flex justify-between gap-4">
                        <span>{r.days}</span>
                        <span>{r.hours}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  pending
                )}
              </dd>
            </div>
            <div className={row}>
              <dt className={label}>{l.labels.phone}</dt>
              <dd>{phone ?? pending}</dd>
            </div>
            <div className={row}>
              <dt className={label}>{l.labels.whatsapp}</dt>
              <dd>{whatsapp ?? pending}</dd>
            </div>
          </dl>

          {(wa || tel || mapsLink) && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {wa && (
                <a href={wa} target="_blank" rel="noopener noreferrer" className={actionClass}>
                  <MessageCircle aria-hidden="true" size={18} />
                  {l.whatsappCta}
                </a>
              )}
              {tel && (
                <a href={tel} className={actionClass}>
                  <Phone aria-hidden="true" size={18} />
                  {l.callCta}
                </a>
              )}
              {mapsLink && (
                <a href={mapsLink} target="_blank" rel="noopener noreferrer" className={actionClass}>
                  <MapPin aria-hidden="true" size={18} />
                  {l.directionsCta}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
