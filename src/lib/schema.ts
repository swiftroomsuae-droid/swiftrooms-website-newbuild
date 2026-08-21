// Shared JSON-LD builders.
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
