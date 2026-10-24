import { copy } from "@/data/copy";
import { contactAction } from "@/lib/links";
import { isPreview } from "@/lib/utils";
import { ActionLink } from "./ActionLink";
import { Wordmark } from "./Wordmark";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-canvas">
      {isPreview && (
        <p className="bg-ink px-5 py-1.5 text-center text-xs tracking-[0.08em] text-canvas">
          {copy.preview.label}
        </p>
      )}
      <div className="wrap flex flex-wrap items-center justify-between gap-x-4">
        <a href="#top" className="flex min-h-11 items-center text-2xl" aria-label={copy.a11y.home}>
          <Wordmark />
        </a>

        <ActionLink
          action={contactAction()}
          className="order-2 inline-flex min-h-11 items-center bg-action px-5 text-sm font-medium text-action-ink hover:bg-action-strong md:order-3"
        >
          {copy.header.contactCta}
        </ActionLink>

        <nav
          aria-label={copy.a11y.primaryNav}
          className="order-3 -mx-2 flex w-full justify-between border-t border-rule md:order-2 md:mx-0 md:w-auto md:gap-8 md:border-0"
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
