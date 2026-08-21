import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, studioUrl } from "../env";

// Read-only client for fetching PUBLISHED content. No token is required for a
// public dataset; if SANITY_API_READ_TOKEN is set (server-only) it is used for
// draft/preview reads. useCdn=true serves cached, fast public content.
//
// `stega.studioUrl` tells Visual Editing where to point click-to-edit overlays.
// Stega encoding itself stays OFF here (it is only turned on by `sanityFetch`
// when Draft Mode is active), so normal published pages, metadata and JSON-LD
// remain byte-for-byte clean.
//
// `@sanity/client` throws synchronously if `projectId` is empty, which would
// crash this module the instant anything imports it (layout.tsx, and every
// page through it) — before the `try/catch` fallbacks in `src/lib/*.ts` ever
// get a chance to run. Substituting a placeholder keeps construction from
// throwing; a missing/invalid projectId then simply fails at fetch time,
// which those callers already catch and fall back to `data.ts` for.
export const client = createClient({
  projectId: projectId || "placeholder",
  dataset,
  apiVersion,
  useCdn: true,
  token: process.env.SANITY_API_READ_TOKEN,
  perspective: "published",
  stega: {
    studioUrl,
  },
});
