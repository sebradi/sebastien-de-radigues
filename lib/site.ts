// TODO: confirmer la vraie URL LinkedIn.
export const LINKEDIN_URL = "https://www.linkedin.com/in/sebastienderadigues";

export const SITE_NAME = "Sébastien de Radiguès";

// Sur Vercel, VERCEL_PROJECT_PRODUCTION_URL pointe vers le domaine de
// production (l'URL vercel.app, puis sebastienderadigues.be une fois connecté).
export const SITE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://sebastienderadigues.be";
