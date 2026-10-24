import { copy } from "@/data/copy";
import { contactAction, directionsAction } from "@/lib/links";
import { ActionLink } from "./ActionLink";
import { Wordmark } from "./Wordmark";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-[78rem] px-5 pb-16 pt-8 md:px-8 md:pb-24 md:pt-14">
      {/* Composition typographique : décorative, le titre sémantique est le h1 ci-dessous. */}
      <p
        aria-hidden="true"
        className="text-[clamp(3.25rem,17vw,12rem)] leading-[0.85] md:text-[clamp(6rem,15vw,14rem)]"
      >
        <Wordmark />
      </p>

      <div className="mt-10 grid gap-10 md:mt-16 md:grid-cols-12 md:items-end md:gap-8">
        <div className="md:col-span-7">
          <h1 className="font-display text-[clamp(1.875rem,6vw,3.5rem)] leading-[1.08] text-balance">
            {copy.hero.headline}
          </h1>
          <p className="mt-5 max-w-[34rem] text-base leading-relaxed text-muted md:text-lg">
            {copy.hero.lead}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ActionLink
              action={contactAction()}
              className="inline-flex min-h-12 items-center justify-center bg-ink px-6 font-medium text-paper hover:bg-accent"
            >
              {copy.hero.primaryCta}
            </ActionLink>
            <ActionLink
              action={directionsAction()}
              className="inline-flex min-h-12 items-center justify-center border border-ink px-6 font-medium hover:bg-ink hover:text-paper"
            >
              {copy.hero.secondaryCta}
            </ActionLink>
          </div>
        </div>

        <figure className="md:col-span-5">
          <div
            role="img"
            aria-label={copy.hero.placeholderCaption}
            className="placeholder-frame aspect-[4/3] w-full md:aspect-[4/5]"
          />
          <figcaption className="mt-2 text-xs uppercase tracking-[0.12em] text-muted">
            {copy.hero.placeholderCaption}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
