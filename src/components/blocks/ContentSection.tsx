import ScrollReveal from "@/components/ui/ScrollReveal";

// Generic two-column content block — eyebrow label + heading + body
// paragraph(s) on the left, a short bullet list on the right. Used for the
// supplementary SEO/editorial sections inserted across catalogue and home
// pages (see "Content - Existing Pages" doc) without disturbing the
// hand-built sections already on each page. Heading level is explicit
// per-instance (`level`) because the source doc assigns a specific H2–H6
// depth to most sections — never assume H2. When the doc gives NO heading
// instruction for a section, omit `level` entirely: the heading then renders
// as a plain <p>, not an invented heading tag.
export default function ContentSection({
  eyebrow,
  heading,
  paragraphs,
  bullets,
  tone = "light",
  level,
}: {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  bullets: string[];
  tone?: "light" | "muted";
  level?: 2 | 3 | 4 | 5 | 6;
}) {
  const Heading = level ? (`h${level}` as "h2" | "h3" | "h4" | "h5" | "h6") : "p";
  return (
    <section className={`py-16 md:py-24 ${tone === "muted" ? "bg-[#f8f9fa]" : "bg-white"} border-t border-gray-100`}>
      <div className="max-w-screen-xl mx-auto px-5 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <ScrollReveal>
            <p className="text-label text-[#007969] mb-4">{eyebrow}</p>
            <Heading className="text-title text-[#1c1c1e] mb-6 max-w-xl">{heading}</Heading>
            <div className="space-y-4 text-[#6b7280] leading-relaxed">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="space-y-4">
              {bullets.map((b, i) => (
                <div key={i} className="flex items-start gap-4 bg-[#f8f9fa] p-5 rounded-xl">
                  <div className="w-7 h-7 rounded-full bg-[#007969] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[#1c1c1e] text-sm leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
