import { copy } from "@/data/copy";
import { contactAction } from "@/lib/links";
import { isPreview } from "@/lib/utils";
import { ActionLink } from "./ActionLink";
import { Wordmark } from "./Wordmark";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/30 bg-paper">
      {isPreview && (
        <p className="bg-ink px-5 py-1 text-center text-[0.7rem] uppercase tracking-[0.14em] text-paper">
          {copy.preview.label}
        </p>
      )}
      <div className="mx-auto flex max-w-[78rem] flex-wrap items-center justify-between gap-x-4 px-5 md:px-8">
        <a href="#top" className="flex min-h-11 items-center text-2xl">
          <Wordmark />
        </a>

        <ActionLink
          action={contactAction()}
          className="order-2 inline-flex min-h-11 items-center bg-ink px-4 text-sm font-medium text-paper hover:bg-accent md:order-3"
        >
          {copy.header.contactCta}
        </ActionLink>

        <nav
          aria-label={copy.a11y.primaryNav}
          className="order-3 -mx-2 flex w-full justify-between border-t border-ink/15 md:order-2 md:mx-0 md:w-auto md:gap-6 md:border-0"
        >
          {copy.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center px-2 text-sm hover:underline hover:underline-offset-4"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
