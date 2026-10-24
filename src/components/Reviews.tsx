import { ExternalLink } from "lucide-react";
import { copy } from "@/data/copy";
import { reviewsUrl } from "@/lib/links";
import { SectionHeading } from "./SectionHeading";

/** Masquée tant que le lien d'avis officiel n'est pas confirmé. Aucun avis n'est reproduit. */
export function Reviews() {
  const url = reviewsUrl();
  if (!url) return null;

  return (
    <section id="avis" aria-labelledby="avis-titre" className="border-t border-ink/30">
      <div className="mx-auto grid max-w-[78rem] gap-8 px-5 py-14 md:grid-cols-12 md:px-8 md:py-20">
        <SectionHeading id="avis-titre" eyebrow={copy.reviews.eyebrow} title={copy.reviews.title} />
        <div className="md:col-span-8">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center gap-2 border border-ink px-6 font-medium hover:bg-ink hover:text-paper"
          >
            {copy.reviews.link}
            <ExternalLink aria-hidden="true" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
