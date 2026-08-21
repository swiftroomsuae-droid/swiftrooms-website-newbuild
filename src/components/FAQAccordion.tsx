"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { QuoteButton } from "@/components/forms/CTAButtons";

// Shared FAQ accordion — used by catalogue category pages, product detail
// pages, and brand pages, all of which source the same { q, a } shape.
// `level` defaults to 6 (catalogue/product pages tag this heading H6); brand
// pages vary per source doc, so it's passed explicitly there.
// `heading` defaults to the existing catalogue/product copy — the New Pages
// doc gives brand pages (and aluminium-glass-doors) literal replacement text
// ("Frequently Asked Questions"), passed explicitly there.
export default function FAQAccordion({
  faqs,
  level = 6,
  heading = "Frequently asked questions.",
}: {
  faqs: { q: string; a: string }[];
  level?: 2 | 3 | 4 | 5 | 6;
  heading?: string;
}) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  if (!faqs || faqs.length === 0) return null;
  const Heading = `h${level}` as "h2" | "h3" | "h4" | "h5" | "h6";

  return (
    <section className="py-12 md:py-20 border-t border-gray-100">
      <div className="max-w-screen-xl mx-auto px-5 md:px-8 lg:px-10">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-label text-[#007969] mb-3">Common Questions</p>
            <Heading className="text-title text-[#1c1c1e] mb-10">
              {heading}
            </Heading>
          </div>
        </ScrollReveal>
        <div className="max-w-3xl space-y-0">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="border-b border-gray-100">
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-5 text-left group"
                >
                  <span className="text-[#1c1c1e] text-sm md:text-base font-medium leading-snug group-hover:text-[#007969] transition-colors">
                    {faq.q}
                  </span>
                  <motion.svg
                    animate={{ rotate: openIdx === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-4 h-4 flex-shrink-0 mt-1 text-[#007969]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {openIdx === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#6b7280] text-sm leading-relaxed pb-5">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={0.2}>
          <div className="mt-8 max-w-3xl">
            <p className="text-[#6b7280] text-sm">
              Have a question not listed here?{" "}
              <QuoteButton className="text-[#007969] hover:underline">
                Contact our technical team →
              </QuoteButton>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
