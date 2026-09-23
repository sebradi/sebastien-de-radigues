import type { Metadata, Viewport } from "next";
import { Fraunces, Space_Grotesk } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SITE_NAME } from "@/lib/site";
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
  title: {
    default: `${SITE_NAME}, Chief of Staff externe`,
    template: `%s, ${SITE_NAME}`,
  },
  description:
    "Chief of Staff externe basé en Wallonie. J'aide les startups et PME qui ont grandi plus vite que leur organisation à structurer leur marketing et leurs opérations.",
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
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
