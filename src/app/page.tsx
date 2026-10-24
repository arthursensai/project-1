import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Location } from "@/components/Location";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { copy } from "@/data/copy";

export default function Home() {
  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:bg-ink focus:px-4 focus:py-3 focus:text-paper"
      >
        {copy.a11y.skipLink}
      </a>
      <Header />
      <main id="contenu">
        <Hero />
        <Services />
        <Gallery />
        <Reviews />
        <Location />
      </main>
      <Footer />
      <JsonLd />
    </>
  );
}
