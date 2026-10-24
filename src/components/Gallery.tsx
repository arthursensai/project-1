import Image from "next/image";
import { business, type GalleryImage } from "@/data/business";
import { copy } from "@/data/copy";
import { verified } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

/** Nombre de photos visibles d'emblée ; les suivantes sont repliées pour alléger le mobile. */
const VISIBLE = 4;

/** Rythme éditorial répété : mobile (6 colonnes) puis desktop (12 colonnes). */
const rhythm = [
  "col-span-6 md:col-span-7",
  "col-span-3 md:col-span-5 md:mt-14",
  "col-span-3 md:col-span-4",
  "col-span-6 md:col-span-4 md:mt-8",
  "col-span-6 md:col-span-4",
];

function Photo({ image, index }: { image: GalleryImage; index: number }) {
  return (
    <li className={`${rhythm[index % rhythm.length]} self-start`}>
      <figure>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(min-width: 1248px) 540px, (min-width: 768px) 55vw, 100vw"
          loading={index < 2 ? "eager" : "lazy"}
          className="h-auto w-full"
        />
        {image.caption && (
          <figcaption className="mt-2 text-xs text-ink-muted">{image.caption}</figcaption>
        )}
      </figure>
    </li>
  );
}

/** Composition tant qu'aucune photo authentique n'est fournie : formes tonales, clairement des emplacements. */
function Placeholders() {
  const label = copy.gallery.placeholderLabel;
  const tag = "text-[0.7rem] font-medium uppercase tracking-[0.16em] text-ink-muted";
  return (
    <ul className="grid grid-cols-6 items-end gap-3 md:grid-cols-12 md:gap-5">
      <li className="slot col-span-6 flex aspect-[4/3] items-end p-4 md:col-span-5 md:aspect-[4/5]">
        <span className={tag}>{label} 1</span>
      </li>
      <li className="col-span-3 flex aspect-[3/4] items-end rounded-t-[999px] bg-action p-4 md:col-span-3 md:col-start-7">
        <span className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-action-ink">
          {label} 2
        </span>
      </li>
      <li className="slot col-span-3 flex aspect-[3/4] items-end p-4 md:col-span-3 md:col-start-10">
        <span className={tag}>{label} 3</span>
      </li>
    </ul>
  );
}

export function Gallery() {
  const images = verified(business.gallery);
  const hasImages = !!images && images.length > 0;
  const shown = hasImages ? images.slice(0, VISIBLE) : [];
  const rest = hasImages ? images.slice(VISIBLE) : [];

  return (
    <section id="galerie" aria-labelledby="galerie-titre" className="border-t border-rule bg-surface">
      <div className="wrap py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-12 md:items-end md:gap-10">
          <SectionHeading
            id="galerie-titre"
            eyebrow={copy.gallery.eyebrow}
            title={copy.gallery.title}
            className="md:col-span-6"
          />
          {!hasImages && (
            <p className="max-w-md text-ink-muted md:col-span-5 md:col-start-8">
              {copy.gallery.empty}
            </p>
          )}
        </div>

        <div className="mt-10 md:mt-14">
          {hasImages ? (
            <>
              <ul className="grid grid-cols-6 gap-3 md:grid-cols-12 md:gap-5">
                {shown.map((image, i) => (
                  <Photo key={image.src} image={image} index={i} />
                ))}
              </ul>
              {rest.length > 0 && (
                <details className="mt-6">
                  <summary className="inline-flex min-h-12 cursor-pointer items-center border border-ink px-6 font-medium hover:bg-ink hover:text-canvas">
                    {copy.gallery.showMore} ({rest.length})
                  </summary>
                  <ul className="mt-6 grid grid-cols-6 gap-3 md:grid-cols-12 md:gap-5">
                    {rest.map((image, i) => (
                      <Photo key={image.src} image={image} index={i + VISIBLE} />
                    ))}
                  </ul>
                </details>
              )}
            </>
          ) : (
            <Placeholders />
          )}
        </div>
      </div>
    </section>
  );
}
