import { business } from "@/data/business";
import { copy } from "@/data/copy";
import { verified } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  const services = verified(business.services);

  return (
    <section id="prestations" aria-labelledby="prestations-titre" className="border-t border-rule">
      <div className="wrap grid gap-10 py-16 md:grid-cols-12 md:gap-10 md:py-20">
        <SectionHeading
          id="prestations-titre"
          eyebrow={copy.services.eyebrow}
          title={copy.services.title}
          className="md:col-span-5"
        />

        <div className="md:col-span-6 md:col-start-7 md:pt-8">
          {services && services.length > 0 ? (
            <ul className="border-t border-rule">
              {services.map((service) => (
                <li key={service.name} className="border-b border-rule py-5">
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-display text-xl md:text-2xl">{service.name}</h3>
                    {service.price && <span className="leader" aria-hidden="true" />}
                    {service.price && (
                      <p className="font-medium">
                        <span className="sr-only">{copy.services.priceLabel} : </span>
                        {service.price}
                      </p>
                    )}
                  </div>
                  {(service.description || service.duration) && (
                    <p className="mt-1 max-w-prose text-ink-muted">
                      {service.description}
                      {service.duration && (
                        <span className="block text-sm">
                          <span className="sr-only">{copy.services.durationLabel} : </span>
                          {service.duration}
                        </span>
                      )}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <div className="border-t border-rule pt-6">
              <p className="font-display text-2xl leading-snug text-balance md:text-3xl">
                {copy.services.emptyTitle}
              </p>
              <p className="mt-4 max-w-md text-ink-muted">{copy.services.empty}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
