import { SITE_URL } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { QuoteButton, ShowroomButton } from "@/components/forms/CTAButtons";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { COMPARE_ROWS, VETROMAX, VETROMAX_SYSTEMS, type VetromaxSystem } from "@/lib/vetromaxContent";

// A static segment, so it takes precedence over /brands/[slug] for this URL.
const PAGE_URL = `${SITE_URL}/brands/vetromax`;

export const metadata: Metadata = {
  title: VETROMAX.metaTitle,
  description: VETROMAX.metaDescription,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    title: `${VETROMAX.metaTitle} | Swiftrooms`,
    description: VETROMAX.metaDescription,
    url: PAGE_URL,
    images: [
      {
        url: `${SITE_URL}${VETROMAX.hero.image}`,
        width: 1124,
        height: 774,
        alt: VETROMAX.hero.imageAlt,
      },
    ],
  },
};

// Links to the system's own page when it exists, otherwise to its card here.
const systemHref = (s: VetromaxSystem) => s.href ?? `#${s.slug}`;

function SystemCard({ system }: { system: VetromaxSystem }) {
  const body = (
    <>
      <div className="relative h-40 md:h-48 bg-[#f8f9fa] border-b border-gray-100 overflow-hidden">
        <Image
          src={system.image}
          alt={system.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain p-4 group-hover:scale-[1.03] transition-transform duration-500"
        />
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="font-heading font-bold text-xl text-[#1c1c1e] group-hover:text-[#007969] transition-colors">
            {system.name}
          </h3>
          {system.code && (
            <span className="text-[0.55rem] tracking-widest uppercase text-gray-400 border border-gray-200 px-2 py-1 flex-shrink-0">
              {system.code}
            </span>
          )}
        </div>
        <p className="text-[0.6rem] tracking-widest uppercase text-[#007969] mb-4">{system.category}</p>
        <p className="text-[#6b7280] text-sm leading-relaxed flex-1">{system.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {system.specs.map((spec) => (
            <li
              key={spec.label}
              className="text-[0.6rem] tracking-widest uppercase text-[#6b7280] border border-gray-200 px-2.5 py-1.5"
            >
              {spec.label}: {spec.value}
            </li>
          ))}
        </ul>
        {system.href && (
          <span className="text-[0.6rem] tracking-widest uppercase text-[#007969] mt-6">View System →</span>
        )}
      </div>
    </>
  );

  const className = "group flex h-full flex-col border border-gray-100 bg-white transition-all";
  return system.href ? (
    <Link
      id={system.slug}
      href={system.href}
      className={`${className} hover:border-[#007969]/40 active:scale-[0.99] scroll-mt-28`}
    >
      {body}
    </Link>
  ) : (
    <div id={system.slug} className={`${className} scroll-mt-28`}>
      {body}
    </div>
  );
}

function SystemName({ system, className, subClassName }: { system: VetromaxSystem; className: string; subClassName: string }) {
  return (
    <Link href={systemHref(system)} className={className}>
      <span className="block font-heading font-bold text-[#1c1c1e] group-hover:text-[#007969] transition-colors">
        {system.name}
      </span>
      <span className={`block text-xs text-gray-400 ${subClassName}`}>{system.category}</span>
    </Link>
  );
}

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <ScrollReveal>
      <p className="text-label text-[#007969] mb-3">{eyebrow}</p>
      <h2 className={`text-title text-[#1c1c1e] ${intro ? "mb-3" : "mb-8 md:mb-12"}`}>{title}</h2>
      {intro && <p className="text-[#6b7280] text-sm md:text-base max-w-2xl mb-8 md:mb-12">{intro}</p>}
    </ScrollReveal>
  );
}

export default function VetromaxPage() {
  const brandSchema = {
    "@context": "https://schema.org",
    "@type": "Brand",
    name: VETROMAX.name,
    description: VETROMAX.hero.description,
    url: PAGE_URL,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Brands", item: `${SITE_URL}/brands` },
      { "@type": "ListItem", position: 3, name: VETROMAX.name, item: PAGE_URL },
    ],
  };

  const systemsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Vetromax systems",
    numberOfItems: VETROMAX_SYSTEMS.length,
    itemListElement: VETROMAX_SYSTEMS.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      url: s.href ? `${SITE_URL}${s.href}` : `${PAGE_URL}#${s.slug}`,
    })),
  };

  return (
    <>
      {[brandSchema, breadcrumbSchema, systemsSchema].map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Hero */}
      <section className="pt-32 pb-10 md:pt-44 md:pb-16 lg:pt-52 lg:pb-20">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8 lg:px-10">
          <ScrollReveal>
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-[0.65rem] tracking-widest uppercase text-gray-400 mb-6 md:mb-8"
            >
              <Link href="/brands" className="hover:text-[#007969] transition-colors">Brands</Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#6b7280]">{VETROMAX.name}</span>
            </nav>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-10 lg:gap-16 items-end">
            <div className="min-w-0">
              <ScrollReveal delay={0.1}>
                <span className="text-label text-[#007969] mb-3 md:mb-4 block">Brand Partner</span>
                <h1 className="text-headline text-[#1c1c1e] mb-3 md:mb-4">{VETROMAX.name}</h1>
                <p className="text-base sm:text-xl text-[#6b7280] mb-6">{VETROMAX.hero.tagline}</p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-[#6b7280] text-base md:text-lg leading-relaxed max-w-2xl">
                  {VETROMAX.hero.description}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <a href="#systems" className="btn-brand justify-center">Explore Systems</a>
                  <QuoteButton className="btn-outline justify-center">Request a Quote</QuoteButton>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2}>
              <div className="relative aspect-[4/3] bg-[#f8f9fa] border border-gray-100 overflow-hidden">
                <Image
                  src={VETROMAX.hero.image}
                  alt={VETROMAX.hero.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* System quick links */}
      <nav aria-label="Vetromax systems" className="border-y border-gray-100 bg-white">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8 lg:px-10">
          <ul className="flex gap-2 overflow-x-auto scrollbar-hide py-4 md:flex-wrap md:overflow-x-visible">
            {VETROMAX_SYSTEMS.map((s) => (
              <li key={s.slug} className="flex-shrink-0">
                <Link
                  href={systemHref(s)}
                  className="block px-4 py-2.5 text-[0.7rem] tracking-widest uppercase border transition-all whitespace-nowrap border-gray-200 text-[#6b7280] hover:border-[#007969] hover:text-[#007969]"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* The range */}
      <section id="systems" className="py-12 md:py-20 scroll-mt-24">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8 lg:px-10">
          <SectionHeading eyebrow="The range" title="Five systems, one platform" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {VETROMAX_SYSTEMS.map((s, i) => (
              <ScrollReveal key={s.slug} delay={(i % 2) * 0.08} className="h-full">
                <SystemCard system={s} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Vetromax */}
      <section className="py-12 md:py-20 bg-[#f8f9fa] border-t border-gray-100">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8 lg:px-10">
          <SectionHeading eyebrow="Why Vetromax" title="What the range is good at" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {VETROMAX.strengths.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="border-t-2 border-[#007969] pt-5">
                  <h3 className="font-heading font-bold text-lg text-[#1c1c1e] mb-3">{item.title}</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-12 md:py-20 border-t border-gray-100">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8 lg:px-10">
          <SectionHeading eyebrow="Applications" title="Where these systems go" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {VETROMAX.applications.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08} className="h-full">
                <div className="border border-gray-100 bg-white p-6 h-full">
                  <h3 className="font-heading font-semibold text-[#1c1c1e] mb-2">{item.title}</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Compare */}
      <section className="py-12 md:py-20 border-t border-gray-100">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Compare"
            title="The range side by side"
            intro="Only fields Vetromax publishes are filled in. A dash means the figure is not stated for that system rather than that it does not apply."
          />

          {/* Desktop: table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">Vetromax system comparison</caption>
              <thead>
                <tr>
                  <th scope="col" className="text-[0.6rem] tracking-widest uppercase text-gray-400 font-normal py-4 pr-6 align-bottom">
                    <span className="sr-only">Attribute</span>
                  </th>
                  {VETROMAX_SYSTEMS.map((s) => (
                    <th key={s.slug} scope="col" className="py-4 px-4 align-bottom border-b-2 border-[#007969]">
                      <SystemName system={s} className="group" subClassName="font-normal mt-1" />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row) => (
                  <tr key={row.key} className="border-b border-gray-100">
                    <th
                      scope="row"
                      className="text-[0.6rem] tracking-widest uppercase text-gray-400 font-normal py-4 pr-6 align-top whitespace-nowrap"
                    >
                      {row.label}
                    </th>
                    {VETROMAX_SYSTEMS.map((s) => (
                      <td key={s.slug} className="py-4 px-4 text-sm text-[#3a3a3c] align-top">
                        {s.compare[row.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile / tablet: one card per system */}
          <div className="lg:hidden space-y-4">
            {VETROMAX_SYSTEMS.map((s) => (
              <ScrollReveal key={s.slug}>
                <div className="border border-gray-100 bg-white">
                  <SystemName system={s} className="block p-5 border-b border-gray-100 group" subClassName="mt-1" />
                  <dl className="p-5 space-y-3">
                    {COMPARE_ROWS.map((row) => (
                      <div key={row.key} className="grid grid-cols-[7rem_1fr] gap-3">
                        <dt className="text-[0.55rem] tracking-widest uppercase text-gray-400 pt-0.5">{row.label}</dt>
                        <dd className="text-sm text-[#3a3a3c]">{s.compare[row.key]}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-12 md:py-20 bg-[#f8f9fa] border-t border-gray-100">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Downloads"
            title="Technical downloads"
            intro="Manufacturer brochures, hosted by Vetromax. Links open the official PDF."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VETROMAX.downloads.map((d, i) => (
              <ScrollReveal key={d.href} delay={i * 0.06} className="h-full">
                <a
                  href={d.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col justify-between border border-gray-200 bg-white p-5 hover:border-[#007969] transition-colors"
                >
                  <span className="text-[#1c1c1e] font-medium text-sm group-hover:text-[#007969] transition-colors">
                    {d.label}
                  </span>
                  <span className="text-[0.6rem] tracking-widest uppercase text-gray-400 mt-6 group-hover:text-[#007969] transition-colors">
                    PDF · vetromax.com ↗
                  </span>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 border-t border-gray-100">
        <ScrollReveal>
          <div className="max-w-screen-xl mx-auto px-5 md:px-8 lg:px-10 text-center">
            <p className="text-label text-[#007969] mb-4">Specify with confidence</p>
            <h2 className="text-title text-[#1c1c1e] mb-6 max-w-xl mx-auto">Talk to us about Vetromax</h2>
            <p className="text-[#6b7280] max-w-md mx-auto mb-10">
              Tell us the opening and we will recommend the right system, the glazing specification and realistic
              lead times for the UAE.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuoteButton className="btn-brand">Request a Quote</QuoteButton>
              <ShowroomButton className="btn-outline">Visit Our Showroom</ShowroomButton>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
