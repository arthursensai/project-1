import { copy } from "@/data/copy";
import { isPreview } from "@/lib/utils";
import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="border-t border-ink/30">
      <div className="mx-auto flex max-w-[78rem] flex-col gap-6 px-5 py-10 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <Wordmark className="text-2xl" />
          {isPreview && <p className="mt-2 max-w-sm text-sm text-muted">{copy.footer.note}</p>}
        </div>
        <nav aria-label={copy.a11y.footerNav} className="-mx-2 flex flex-wrap md:mx-0 md:gap-4">
          {copy.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center px-2 text-sm hover:underline hover:underline-offset-4"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#top"
            className="inline-flex min-h-11 items-center px-2 text-sm hover:underline hover:underline-offset-4"
          >
            {copy.footer.backToTop}
          </a>
        </nav>
      </div>
    </footer>
  );
}
