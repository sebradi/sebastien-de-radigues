import type { Metadata, Viewport } from "next";
import { Fraunces, Space_Grotesk } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { LINKEDIN_URL, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: LINKEDIN_URL }],
  openGraph: { siteName: SITE_NAME, type: "website", locale: "fr_BE" },
  twitter: { card: "summary_large_image" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  jobTitle: "Chief of Staff externe",
  url: SITE_URL,
  sameAs: [LINKEDIN_URL],
  address: {
    "@type": "PostalAddress",
    addressRegion: "Wallonie",
    addressCountry: "BE",
  },
  knowsAbout: [
    "Structuration opérationnelle",
    "Marketing",
    "Operations",
    "Chief of Staff",
  ],
};

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: "#F8F8F5",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body className="bg-paper font-sans text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
