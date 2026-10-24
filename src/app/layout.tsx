import type { Metadata, Viewport } from "next";
import { copy } from "@/data/copy";
import { isPreview } from "@/lib/utils";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

const title = isPreview ? copy.meta.previewTitle : copy.meta.title;
const description = isPreview ? copy.meta.previewDescription : copy.meta.description;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl), alternates: { canonical: "/" } } : {}),
  title,
  description,
  // En mode aperçu, le concept n'est jamais indexé comme site officiel.
  robots: isPreview ? { index: false, follow: false } : undefined,
  openGraph: {
    title,
    description,
    locale: copy.locale,
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f1ebdf",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={copy.lang}>
      <body>{children}</body>
    </html>
  );
}
