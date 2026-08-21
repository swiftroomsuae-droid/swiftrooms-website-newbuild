import { SITE_URL } from "@/lib/site";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCategory, getCategories, getCategorySlugs } from "@/lib/catalogue";
import { getArticles } from "@/lib/blog";
import { CATALOGUE_CONTENT } from "@/lib/catalogueContent";
import { faqPageSchema } from "@/lib/schema";
import CategoryClient from "./CategoryClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getCategorySlugs();
  return slugs.map((slug) => ({ slug }));
}

// Visible on-page H1 / intro-paragraph overrides — distinct from the meta
// title/description maps below, which only affect <head> tags.
const categoryH1Overrides: Record<string, string> = {
  "curtain-wall": "Curtain Wall Systems",
  "garden-rooms": "Garden Rooms Dubai",
  "aluminium-doors": "Aluminium Doors Dubai",
  "aluminium-windows": "Aluminium Windows Dubai",
  "aluminium-bi-folding-doors": "Aluminium Bi-Fold Doors",
  "upvc": "UPVC Doors & Windows in Dubai",
};

const categoryDescriptionOverrides: Record<string, string> = {
  "aluminium-windows":
    "Our aluminium window collection covers every architectural requirement—from aluminium sliding windows and slim-sash casements to large-format tilt-and-turn windows, all precision-engineered for Gulf climates.",
  "aluminium-sliding-doors":
    "Our lift-and-slide door collection redefines the boundary between inside and out with slim sliding doors and premium aluminium sliding glass doors. From the Cor Vision 4600 to the flagship 4700, every system is engineered for the most demanding UAE villa specifications.",
  "upvc":
    "Our uPVC windows and uPVC doors in Dubai deliver outstanding thermal and acoustic performance with minimal maintenance requirements, making them ideal for residential applications across the UAE.",
};

const categoryMetaTitles: Record<string, string> = {
  "aluminium-sliding-doors": "Aluminium Sliding Door Suppliers",
  "aluminium-bi-folding-doors": "Aluminium Bi Fold Doors Dubai",
  "aluminium-windows": "Aluminium Windows Dubai & Abu Dhabi",
  "aluminium-doors": "Aluminium Doors Dubai | Aluminium Doors UAE",
  "upvc": "uPVC Windows Dubai | uPVC Doors Dubai",
  "curtain-wall": "Aluminium Curtain Wall | Curtain Wall Systems",
  "garden-rooms": "Garden Rooms Dubai | Glass Conservatory Dubai",
  "insect-screens": "Retractable Insect Screens UAE — Fly Screen Systems",
  "skylights": "Skylights & Rooflights UAE — Fixed & Motorised Opening Systems",
  "aluminium-glass-doors": "Aluminium Glass Doors Dubai, UAE",
};

const categoryKeywords: Record<string, string[]> = {
  "curtain-wall": [
    "aluminum curtain wall",
    "curtain wall systems",
    "aluminium facade systems",
    "curtain wall dubai",
    "curtain wall facade system",
    "aluminum frame curtain wall",
    "aluminum glass curtain wall",
    "aluminium curtain wall glazing",
  ],
  "garden-rooms": [
    "glass room dubai",
    "conservatory dubai",
    "garden rooms dubai",
    "aluminium garden rooms",
    "aluminium glass room",
    "modern glass garden rooms",
  ],
  "aluminium-doors": ["aluminium doors dubai", "aluminium doors uae"],
  "aluminium-windows": [
    "aluminium windows dubai",
    "aluminium windows abu dhabi",
    "aluminium windows uae",
    "aluminium windows sharjah",
    "cortizo windows",
  ],
  "aluminium-bi-folding-doors": ["aluminium folding doors", "aluminium bi fold doors"],
  "aluminium-sliding-doors": [
    "slim sliding doors",
    "floor to ceiling sliding doors",
    "minimal sliding doors",
    "ultra slim sliding doors",
    "cortizo sliding doors",
    "large sliding glass doors",
    "aluminium sliding door suppliers",
    "sliding doors uae",
    "aluminum sliding glass doors",
    "panoramic sliding doors",
  ],
  "upvc": [
    "upvc windows dubai",
    "upvc windows uae",
    "upvc doors dubai",
    "upvc doors and windows dubai",
    "upvc doors in dubai",
  ],
};

const categoryMetaDescriptions: Record<string, string> = {
  "aluminium-sliding-doors":
    "Discover premium slim sliding doors by Swiftrooms, designed for style and durability. Contact our experts today for a free consultation",
  "aluminium-bi-folding-doors":
    "Aluminium Folding Doors are the epitome of modern design and functionality, providing a seamless connection between indoor and outdoor living spaces",
  "aluminium-windows":
    "Swiftrooms LLC, specializes in providing high-quality Aluminium Windows in Dubai, outdoor glass rooms, garden rooms, premium windows, and door systems",
  "aluminium-doors":
    "Our range of aluminium door in Dubai offers something for every style of property, from our distinctive European designs to high-quality local profiles",
  "upvc":
    "PVCu, uPVC Doors and Windows in Dubai offers a practical and energy-efficient solution for modern homes, combining durability with ease of use",
  "curtain-wall":
    "Aluminium Glass Curtain Wall by Swiftrooms offer superior aesthetics, durability, and thermal efficiency. Designed for both residential and commercial projects",
  "garden-rooms":
    "Create a modern outdoor retreat with a stylish Glass Room in Dubai. Call Swiftrooms on 04 347 4240 for professional service and quality results.",
  "aluminium-glass-doors":
    "Slim-frame aluminium glass doors by Swiftrooms built for UAE heat, sand & humidity. Hinged, pivot, sliding & bi-fold. Authorised Cortizo partner. Get a Free quote.",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategory(slug);
  if (!category) return {};
  const metaTitle = categoryMetaTitles[slug] ?? category.name;
  const metaDescription = categoryMetaDescriptions[slug] ?? category.description;
  const ogTitle = metaTitle.includes("| Swiftrooms") ? metaTitle : `${metaTitle} | Swiftrooms`;
  const keywords = categoryKeywords[slug];
  return {
    title: metaTitle,
    description: metaDescription,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: `${SITE_URL}/catalogue/${slug}` },
    openGraph: {
      type: "website",
      title: ogTitle,
      description: metaDescription,
      url: `${SITE_URL}/catalogue/${slug}`,
      images: [
        category.image
          ? { url: category.image, alt: category.name }
          : { url: `${SITE_URL}/brand/og-default.jpg`, width: 1200, height: 630, alt: category.name },
      ],
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const [category, allCategories, blogPosts] = await Promise.all([
    getCategory(slug),
    getCategories(),
    getArticles(),
  ]);
  if (!category) notFound();

  const base = SITE_URL;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: base },
      { "@type": "ListItem", position: 2, name: "Catalogue", item: `${base}/catalogue` },
      { "@type": "ListItem", position: 3, name: category.name, item: `${base}/catalogue/${slug}` },
    ],
  };
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: category.name,
    description: category.description,
    url: `${base}/catalogue/${slug}`,
    numberOfItems: category.products.length,
    itemListElement: category.products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: `${base}/catalogue/${slug}/${p.slug}`,
    })),
  };

  // Same concatenation CategoryClient renders (Sanity/data.ts FAQs, then the
  // editorial extraFaqs) so the markup matches the accordion question for question.
  const faqSchema = faqPageSchema([
    ...(category.faqs ?? []),
    ...(CATALOGUE_CONTENT[slug]?.extraFaqs ?? []),
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <CategoryClient
        category={category}
        allCategories={allCategories}
        blogPosts={blogPosts}
        h1Override={categoryH1Overrides[slug]}
        descriptionOverride={categoryDescriptionOverrides[slug]}
      />
    </>
  );
}
