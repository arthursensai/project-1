import Image from "next/image";
import { business } from "@/data/business";
import { copy } from "@/data/copy";
import { verified } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

/** Emplacements visibles tant qu'aucune photo authentique et autorisée n'est fournie. */
const slots = [
  "col-span-6 aspect-[4/3] md:col-span-5 md:aspect-[4/5]",
  "col-span-3 aspect-[3/4] md:col-span-4 md:aspect-square",
  "col-span-3 aspect-[3/4] md:col-span-3 md:aspect-[3/4]",
];

export function Gallery() {
  const images = verified(business.gallery);

  return (
    <section id="galerie" aria-labelledby="galerie-titre" className="border-t border-ink/30">
      <div className="mx-auto max-w-[78rem] px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-8 md:grid-cols-12 md:gap-8">
          <SectionHeading
            id="galerie-titre"
            eyebrow={copy.gallery.eyebrow}
            title={copy.gallery.title}
          />
          {!images?.length && (
            <p className="max-w-prose text-muted md:col-span-6 md:col-start-6 md:self-end">
              {copy.gallery.empty}
            </p>
          )}
        </div>

        {images && images.length > 0 ? (
          <ul className="mt-10 columns-2 gap-3 md:columns-3">
            {images.map((image, index) => (
              <li key={image.src} className="mb-3 break-inside-avoid">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(min-width: 1248px) 400px, (min-width: 768px) 33vw, 50vw"
                  loading={index < 2 ? "eager" : "lazy"}
                  className="h-auto w-full"
                />
              </li>
            ))}
          </ul>
        ) : (
          <ul className="mt-10 grid grid-cols-6 items-end gap-3 md:grid-cols-12">
            {slots.map((layout) => (
              <li
                key={layout}
                className={`placeholder-frame flex items-end p-3 ${layout}`}
              >
                <span className="text-[0.7rem] uppercase tracking-[0.12em] text-muted">
                  {copy.gallery.placeholderLabel}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
