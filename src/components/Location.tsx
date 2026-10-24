import { MapPin, MessageCircle, Phone } from "lucide-react";
import { business } from "@/data/business";
import { copy } from "@/data/copy";
import { isHttpsUrl, telHref, verified, whatsappHref } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

const actionClass =
  "inline-flex min-h-12 items-center justify-center gap-2 border border-ink px-5 font-medium hover:bg-ink hover:text-paper";

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

  const pending = <span className="text-muted">{l.pending}</span>;

  return (
    <section id="contact" aria-labelledby="contact-titre" className="border-t border-ink/30">
      <div className="mx-auto grid max-w-[78rem] gap-8 px-5 py-14 md:grid-cols-12 md:gap-8 md:px-8 md:py-20">
        <SectionHeading id="contact-titre" eyebrow={l.eyebrow} title={l.title} />

        <div className="md:col-span-8">
          <dl className="divide-y divide-ink/25 border-y border-ink/25">
            <div className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
              <dt className="text-xs uppercase tracking-[0.12em] text-muted">
                {l.labels.neighbourhood}
              </dt>
              <dd>
                {neighbourhood}
                {business.neighbourhood.status === "unverified" && (
                  <span className="mt-1 block text-sm text-muted">{l.neighbourhoodNote}</span>
                )}
              </dd>
            </div>
            <div className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
              <dt className="text-xs uppercase tracking-[0.12em] text-muted">{l.labels.address}</dt>
              <dd>{address ?? pending}</dd>
            </div>
            <div className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
              <dt className="text-xs uppercase tracking-[0.12em] text-muted">{l.labels.hours}</dt>
              <dd>
                {hours && hours.length > 0 ? (
                  <ul>
                    {hours.map((row) => (
                      <li key={row.days} className="flex justify-between gap-4">
                        <span>{row.days}</span>
                        <span>{row.hours}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  pending
                )}
              </dd>
            </div>
            <div className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
              <dt className="text-xs uppercase tracking-[0.12em] text-muted">{l.labels.phone}</dt>
              <dd>{phone ?? pending}</dd>
            </div>
            <div className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
              <dt className="text-xs uppercase tracking-[0.12em] text-muted">
                {l.labels.whatsapp}
              </dt>
              <dd>{whatsapp ?? pending}</dd>
            </div>
          </dl>

          {(wa || tel || mapsLink) && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
