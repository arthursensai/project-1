import { copy } from "@/data/copy";
import { isPreview } from "@/lib/utils";
import { Wordmark } from "./Wordmark";

const linkClass =
  "inline-flex min-h-11 items-center px-2 text-sm hover:underline hover:underline-offset-4";

export function Footer() {
  return (
    <footer>
      <div className="wrap flex flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <Wordmark className="text-4xl" />
          {isPreview && <p className="mt-3 max-w-sm text-sm text-ink-muted">{copy.footer.note}</p>}
        </div>
        <nav aria-label={copy.a11y.footerNav} className="-mx-2 flex flex-wrap md:mx-0 md:gap-4">
          {copy.nav.map((item) => (
            <a key={item.href} href={item.href} className={linkClass}>
              {item.label}
            </a>
          ))}
          <a href="#top" className={linkClass}>
            {copy.footer.backToTop}
          </a>
        </nav>
      </div>
    </footer>
  );
}
