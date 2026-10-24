import { business } from "@/data/business";
import { copy } from "@/data/copy";
import { verified } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  const services = verified(business.services);

  return (
    <section
      id="prestations"
      aria-labelledby="prestations-titre"
      className="border-t border-ink/30"
    >
      <div className="mx-auto grid max-w-[78rem] gap-8 px-5 py-14 md:grid-cols-12 md:gap-8 md:px-8 md:py-20">
        <SectionHeading
          id="prestations-titre"
          eyebrow={copy.services.eyebrow}
          title={copy.services.title}
        />

        <div className="md:col-span-8">
          {services && services.length > 0 ? (
            <ul className="divide-y divide-ink/25 border-y border-ink/25">
              {services.map((service) => (
                <li key={service.name} className="grid gap-1 py-5 sm:grid-cols-[1fr_auto] sm:gap-6">
                  <div>
                    <h3 className="font-display text-xl">{service.name}</h3>
                    {service.description && (
                      <p className="mt-1 max-w-prose text-muted">{service.description}</p>
                    )}
                  </div>
                  {(service.price || service.duration) && (
                    <dl className="text-sm sm:text-right">
                      {service.price && (
                        <div>
                          <dt className="sr-only">{copy.services.priceLabel}</dt>
                          <dd className="font-medium">{service.price}</dd>
                        </div>
                      )}
                      {service.duration && (
                        <div>
                          <dt className="sr-only">{copy.services.durationLabel}</dt>
                          <dd className="text-muted">{service.duration}</dd>
                        </div>
                      )}
                    </dl>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <div className="placeholder-frame p-6 md:p-8">
              <p className="font-display text-2xl">{copy.services.emptyTitle}</p>
              <p className="mt-3 max-w-prose text-muted">{copy.services.empty}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
