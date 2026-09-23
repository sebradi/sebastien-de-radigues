import type { Metadata } from "next";
import { SITE_NAME } from "./site";

// L'objet openGraph d'une page remplace celui du layout : on le recompose ici.
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      type: "website",
      locale: "fr_BE",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
