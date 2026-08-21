import ContentSection from "@/components/blocks/ContentSection";
import type { ContentBlock } from "@/lib/catalogueContent";

// Renders a list of supplementary SEO/editorial ContentSection blocks — shared
// between catalogue category pages and product detail pages so both read
// from the same ContentBlock shape (see catalogueContent.ts / productContent.ts).
export default function ContentBlocks({ blocks }: { blocks?: ContentBlock[] }) {
  if (!blocks || blocks.length === 0) return null;
  return (
    <>
      {blocks.map((b, i) => (
        <ContentSection
          key={b.heading}
          eyebrow={b.eyebrow}
          heading={b.heading}
          paragraphs={b.paragraphs}
          bullets={b.bullets}
          level={b.level}
          tone={i % 2 === 0 ? "light" : "muted"}
        />
      ))}
    </>
  );
}
