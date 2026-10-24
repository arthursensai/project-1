import type { Metadata, Viewport } from "next";
import { copy } from "@/data/copy";
import { isPreview } from "@/lib/utils";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl), alternates: { canonical: "/" } } : {}),
  title: copy.meta.title,
  description: copy.meta.description,
  // En mode aperçu, on évite que le concept soit indexé comme site officiel.
  robots: isPreview ? { index: false, follow: false } : undefined,
  openGraph: {
    title: copy.meta.title,
    description: copy.meta.description,
    locale: copy.locale,
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#eeeae2",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={copy.lang}>
      <body>{children}</body>
    </html>
  );
}
