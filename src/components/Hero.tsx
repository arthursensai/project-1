import Image from "next/image";
import { business } from "@/data/business";
import { copy } from "@/data/copy";
import { contactAction, directionsAction } from "@/lib/links";
import { verified } from "@/lib/utils";
import { ActionLink } from "./ActionLink";
import { Wordmark } from "./Wordmark";

/**
 * Ancrage visuel : une forme en arche (clin d'œil à l'architecture locale, sans la copier)
 * traversée d'un trait de coupe. Sans photo : aplat de couleur d'action, clairement un emplacement.
 * Avec `business.heroImage` vérifié : la photo remplit la même forme, sans refonte.
 */
function HeroVisual() {
  const photo = verified(business.heroImage);

  return (
    <figure className="mx-auto w-full max-w-sm md:mx-0 md:max-w-none">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[999px] bg-action">
        {photo ? (
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            priority
            sizes="(min-width: 1248px) 480px, (min-width: 768px) 38vw, 24rem"
            className="object-cover"
          />
        ) : (
          <div role="img" aria-label={copy.a11y.heroPlaceholder} className="absolute inset-0">
            {/* Arche intérieure en filet */}
            <div className="absolute inset-3 rounded-t-[999px] border border-action-ink/45" />
            {/* Trait de coupe diagonal */}
            <div className="absolute -left-[15%] top-[62%] h-2 w-[130%] -rotate-[22deg] bg-canvas" />
            <p className="absolute bottom-5 left-5 right-5 text-xs font-medium uppercase tracking-[0.16em] text-action-ink">
              {copy.hero.placeholderLabel}
            </p>
          </div>
        )}
      </div>
      {photo?.caption && (
        <figcaption className="mt-2 text-xs text-ink-muted">{photo.caption}</figcaption>
      )}
    </figure>
  );
}

export function Hero() {
  return (
    <section id="top" className="wrap pb-16 pt-10 md:pb-24 md:pt-16">
      <div className="grid gap-12 md:grid-cols-12 md:items-center md:gap-10">
        <div className="md:col-span-7">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-ink-muted text-balance">
            {copy.hero.kicker}
          </p>

          {/* Composition typographique décorative : le titre sémantique est le h1. */}
          <p
            aria-hidden="true"
            className="mt-6 text-[clamp(3rem,15vw,6.5rem)] leading-[0.9] md:text-[clamp(4rem,9.5vw,9rem)]"
          >
            <Wordmark />
          </p>

          <h1 className="mt-8 font-display text-[clamp(1.75rem,5.5vw,3rem)] leading-[1.1] text-balance">
            {copy.hero.headline}
          </h1>
          <p className="mt-4 max-w-[32rem] text-base leading-relaxed text-ink-muted md:text-lg">
            {copy.hero.lead}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ActionLink
              action={contactAction()}
              className="inline-flex min-h-12 items-center justify-center bg-action px-6 font-medium text-action-ink hover:bg-action-strong"
            >
              {copy.hero.primaryCta}
            </ActionLink>
            <ActionLink
              action={directionsAction()}
              className="inline-flex min-h-12 items-center justify-center border border-ink px-6 font-medium hover:bg-ink hover:text-canvas"
            >
              {copy.hero.secondaryCta}
            </ActionLink>
          </div>
        </div>

        <div className="md:col-span-5">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
