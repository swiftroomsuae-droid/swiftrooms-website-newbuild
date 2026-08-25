import { SITE_URL } from "@/lib/site";
import { stegaClean } from "next-sanity";

export type Faq = { q: string; a: string };

/**
 * FAQPage JSON-LD for a page's visible FAQ accordion, or null when there are
 * no FAQs (so callers can skip the <script> entirely).
 *
 * Pass exactly the list handed to <FAQAccordion> — Google requires the marked
 * up Q&As to match the on-page content, so the two must be built from the same
 * array. Text is stega-stripped because Sanity-sourced prose carries invisible
 * click-to-edit metadata in Draft Mode, which must not leak into JSON-LD.
 */
export function faqPageSchema(faqs: Faq[] | undefined) {
  if (!faqs?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: stegaClean(f.q),
      acceptedAnswer: { "@type": "Answer", text: stegaClean(f.a) },
    })),
  };
}

// Full LocalBusiness entity — kept to Home and Contact only (per SEO audit,
// repeating it on every page was flagged as schema bloat / duplicate-entity risk).
export const buildLocalBusinessSchema = (contact: { phoneRaw: string; email: string }) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "Swiftrooms",
  description:
    "Premium aluminium windows, doors, curtain wall and glazing systems for UAE residential and commercial projects. Authorised Cortizo, Vetromax, Vetro and Gulf Extrusions partners.",
  url: SITE_URL,
  telephone: contact.phoneRaw,
  email: contact.email,
  logo: `${SITE_URL}/brand/logo-color.png`,
  image: `${SITE_URL}/brand/hero-villa-dubai.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jebel Ali Industrial Area 1",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 24.9942,
    longitude: 55.0614,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:30",
      closes: "17:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "10:00",
      closes: "14:00",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: contact.phoneRaw,
    contactType: "sales",
    areaServed: "AE",
    availableLanguage: ["English", "Arabic"],
  },
  priceRange: "AED 800 – AED 5,000+ per sqm",
  areaServed: [
    { "@type": "City", name: "Dubai" },
    { "@type": "City", name: "Abu Dhabi" },
    { "@type": "City", name: "Sharjah" },
    { "@type": "City", name: "Ras Al Khaimah" },
    { "@type": "AdministrativeArea", name: "United Arab Emirates" },
  ],
  sameAs: [],
});
