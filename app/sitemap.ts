import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// À mettre à jour quand le contenu d'une page change.
const LAST_MODIFIED = new Date("2026-09-23");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: LAST_MODIFIED, priority: 1 },
    { url: `${SITE_URL}/methode`, lastModified: LAST_MODIFIED, priority: 0.8 },
    {
      url: `${SITE_URL}/confidentialite`,
      lastModified: new Date("2026-09-24"),
      priority: 0.2,
    },
  ];
}
