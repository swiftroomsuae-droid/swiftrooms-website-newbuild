import { SITE_URL } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { BRAND_CONTENT } from "@/lib/brandContent";

export const metadata: Metadata = {
  title: "Shop By Brand",
  description:
    "Dedicated system pages for Swiftrooms' specialist manufacturer partners — Vitrocsa, Schüco, and Reynaers.",
  alternates: { canonical: `${SITE_URL}/brands` },
  openGraph: {
    type: "website",
    title: "Shop By Brand | Swiftrooms",
    description:
      "Dedicated system pages for Swiftrooms' specialist manufacturer partners — Vitrocsa, Schüco, and Reynaers.",
    url: `${SITE_URL}/brands`,
    images: [
      {
        url: `${SITE_URL}/brand/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: "Swiftrooms — Premium Glazing Systems, UAE",
      },
    ],
  },
};

export default function BrandsIndexPage() {
  const brands = Object.entries(BRAND_CONTENT);
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Shop By Brand", item: `${SITE_URL}/brands` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="pt-32 pb-20 md:pt-44 md:pb-28 lg:pt-52">
      <div className="max-w-screen-xl mx-auto px-5 md:px-8 lg:px-10">
        <ScrollReveal>
          <p className="text-label text-[#007969] mb-3 md:mb-4">Brand Partners</p>
          <h1 className="text-headline text-[#1c1c1e] mb-6 max-w-2xl">Shop By Brand</h1>
          <p className="text-body-lg text-[#6b7280] max-w-2xl mb-12 md:mb-16">
            Dedicated system pages for our specialist manufacturer partners, engineered in Europe, re-specified for
            Gulf conditions.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100">
          {brands.map(([slug, brand], i) => (
            <ScrollReveal key={slug} delay={i * 0.08}>
              <Link
                href={`/brands/${slug}`}
                className="group block bg-white p-6 md:p-8 h-full hover:bg-[#f0fdf4] transition-colors"
              >
                <p className="text-label text-[#007969] mb-3">Brand Partner</p>
                <p className="text-xl font-semibold text-[#1c1c1e] mb-2 group-hover:text-[#007969] transition-colors">
                  {brand.hero.h1}
                </p>
                <p className="text-[#6b7280] text-sm italic mb-4">{brand.hero.tagline}</p>
                <span className="text-[0.65rem] tracking-widest uppercase text-[#007969]">View system →</span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
