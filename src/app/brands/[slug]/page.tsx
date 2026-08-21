import { SITE_URL } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { QuoteButton, ShowroomButton } from "@/components/forms/CTAButtons";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ContentBlocks from "@/components/blocks/ContentBlocks";
import FAQAccordion from "@/components/FAQAccordion";
import { BRAND_CONTENT } from "@/lib/brandContent";
import { faqPageSchema } from "@/lib/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(BRAND_CONTENT).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const brand = BRAND_CONTENT[slug];
  if (!brand) return {};
  return {
    title: brand.metaTitle,
    description: brand.metaDescription,
    alternates: { canonical: `${SITE_URL}/brands/${slug}` },
    openGraph: {
      type: "website",
      title: `${brand.metaTitle} | Swiftrooms`,
      description: brand.metaDescription,
      url: `${SITE_URL}/brands/${slug}`,
      images: [
        {
          url: `${SITE_URL}/brand/og-default.jpg`,
          width: 1200,
          height: 630,
          alt: `${brand.name} — Swiftrooms`,
        },
      ],
    },
  };
}

export default async function BrandPage({ params }: Props) {
  const { slug } = await params;
  const brand = BRAND_CONTENT[slug];
  if (!brand) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Shop By Brand", item: `${SITE_URL}/brands` },
      { "@type": "ListItem", position: 3, name: brand.name, item: `${SITE_URL}/brands/${slug}` },
    ],
  };

  // Mirrors the FAQAccordion below, which renders the same brand.faqs.
  const faqSchema = faqPageSchema(brand.faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-44 md:pb-20 lg:pt-52 lg:pb-28">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8 lg:px-10">
          <ScrollReveal>
            <nav className="flex items-center gap-2 text-[0.65rem] tracking-widest uppercase text-gray-400 mb-6 md:mb-8">
              <Link href="/brands" className="hover:text-[#007969] transition-colors">Shop By Brand</Link>
              <span>/</span>
              <span className="text-[#6b7280]">{brand.name}</span>
            </nav>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-label text-[#007969] mb-3 md:mb-4">Brand Partner</p>
            <h1 className="text-headline text-[#1c1c1e] mb-3 md:mb-4 max-w-3xl">{brand.hero.h1}</h1>
            <p className="text-base md:text-xl text-[#6b7280] italic mb-6 md:mb-8">{brand.hero.tagline}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-body-lg text-[#6b7280] max-w-2xl">{brand.hero.description}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <QuoteButton className="btn-brand">Get a Quote</QuoteButton>
              <ShowroomButton className="btn-outline">Book Showroom Visit</ShowroomButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-screen-xl mx-auto px-5 md:px-8 lg:px-10">
        <div className="divider-brand" />
      </div>

      <ContentBlocks blocks={brand.blocks} />

      {brand.worksWellWith && (
        <section className="py-12 md:py-20 border-t border-gray-100">
          <div className="max-w-screen-xl mx-auto px-5 md:px-8 lg:px-10">
            <ScrollReveal>
              <p className="text-label text-[#007969] mb-3">Complete the System</p>
              {(() => {
                const Heading = brand.worksWellWith.level
                  ? (`h${brand.worksWellWith.level}` as "h2" | "h3" | "h4" | "h5" | "h6")
                  : "p";
                return <Heading className="text-title text-[#1c1c1e] mb-8 md:mb-12 max-w-xl">Works well with</Heading>;
              })()}
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
              {brand.worksWellWith.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group block bg-white hover:bg-[#f0fdf4] transition-colors duration-300 p-5 md:p-6"
                >
                  <p className="text-sm md:text-base font-semibold text-[#1c1c1e] group-hover:text-[#007969] transition-colors mb-1">
                    {item.label}
                  </p>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.blurb}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQAccordion faqs={brand.faqs} level={brand.faqLevel} heading="Frequently Asked Questions" />

      <ContentBlocks blocks={[brand.whySwiftrooms]} />

      {/* Final CTA */}
      <section className="py-20 bg-[#030213] relative overflow-hidden">
        <ScrollReveal>
          <div className="relative z-10 max-w-screen-xl mx-auto px-5 md:px-8 text-center">
            {brand.cta.eyebrow && (
              <p className="text-label text-[#4dd9c0] mb-4">{brand.cta.eyebrow}</p>
            )}
            <p className="text-headline text-white mb-5 max-w-2xl mx-auto">{brand.cta.heading}</p>
            <div className="text-white/50 text-body-lg max-w-lg mx-auto mb-10 space-y-2">
              {brand.cta.body.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuoteButton className="btn-brand">Get a Quote</QuoteButton>
              <ShowroomButton className="btn-outline border-white/30 text-white hover:bg-white hover:text-[#007969]">
                Book Showroom Visit
              </ShowroomButton>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
