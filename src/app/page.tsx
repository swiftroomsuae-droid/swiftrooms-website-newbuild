import { SITE_URL } from "@/lib/site";
import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { getHomeSettings } from "@/lib/homepage";
import { getCategories } from "@/lib/catalogue";
import { getPortfolioProjects } from "@/lib/portfolio";
import { getArticles } from "@/lib/blog";
import { getProcessSteps, getTestimonials } from "@/lib/about";

export const metadata: Metadata = {
  title: "Aluminium Doors and Windows Dubai | Swiftrooms",
  description:
    "Our range of Aluminium Doors and Windows Dubai have something for every style of property, from our distinctive European designs to high-quality local profiles.",
  keywords: ["aluminium doors and windows dubai"],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    title: "Aluminium Doors and Windows Dubai | Swiftrooms",
    description:
      "Our range of Aluminium Doors and Windows Dubai have something for every style of property, from our distinctive European designs to high-quality local profiles.",
    url: SITE_URL,
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

export default async function Home() {
  const [settings, productCategories, portfolioProjects, blogPosts, processSteps, testimonials] =
    await Promise.all([
      getHomeSettings(),
      getCategories(),
      getPortfolioProjects(),
      getArticles(),
      getProcessSteps(),
      getTestimonials(),
    ]);
  settings.hero.subheading =
    "Engineered to perform. Built to outlast. Premium aluminium doors and windows in Dubai and across the UAE, complemented by high-performance uPVC and glazing systems, installed by our certified specialists.";
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    review: testimonials.slice(0, 4).map((t) => ({
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: t.author },
      reviewBody: t.quote,
      name: `${t.product} — ${t.location}`,
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HomeClient
        settings={settings}
        productCategories={productCategories}
        portfolioProjects={portfolioProjects}
        blogPosts={blogPosts}
        processSteps={processSteps}
        testimonials={testimonials}
      />
    </>
  );
}
