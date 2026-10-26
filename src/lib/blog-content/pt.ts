// Tiny Portable Text builders for blog posts authored in code (data.ts).
// The output matches what Sanity's editor produces, so these posts render
// through the same PortableTextBody component as Sanity-sourced posts.
//
// Inline markup in text: **bold** and [label](href).

let n = 0;
const key = () => `k${(n++).toString(36)}`;

type Span = { _type: "span"; _key: string; text: string; marks: string[] };
type MarkDef = { _type: "link"; _key: string; href: string };

function parseInline(text: string) {
  const children: Span[] = [];
  const markDefs: MarkDef[] = [];
  const re = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g;
  let last = 0;
  for (let m; (m = re.exec(text)); ) {
    if (m.index > last) children.push({ _type: "span", _key: key(), text: text.slice(last, m.index), marks: [] });
    if (m[1] !== undefined) {
      // Bold may itself wrap a link: **[label](href)**
      const link = m[1].match(/^\[(.+?)\]\((.+?)\)$/);
      if (link) {
        const def: MarkDef = { _type: "link", _key: key(), href: link[2] };
        markDefs.push(def);
        children.push({ _type: "span", _key: key(), text: link[1], marks: ["strong", def._key] });
      } else {
        children.push({ _type: "span", _key: key(), text: m[1], marks: ["strong"] });
      }
    } else {
      const def: MarkDef = { _type: "link", _key: key(), href: m[3] };
      markDefs.push(def);
      children.push({ _type: "span", _key: key(), text: m[2], marks: [def._key] });
    }
    last = re.lastIndex;
  }
  if (last < text.length) children.push({ _type: "span", _key: key(), text: text.slice(last), marks: [] });
  return { children, markDefs };
}

const block = (style: string, text: string, list?: "bullet" | "number") => ({
  _type: "block",
  _key: key(),
  style,
  ...(list ? { listItem: list, level: 1 } : {}),
  ...parseInline(text),
});

export const h2 = (text: string) => block("h2", text);
export const h3 = (text: string) => block("h3", text);
export const p = (text: string) => block("normal", text);
export const bullets = (...items: string[]) => items.map((t) => block("normal", t, "bullet"));
export const numbered = (...items: string[]) => items.map((t) => block("normal", t, "number"));

/** Image served from /public (no Sanity asset). Optional href makes it a link. */
export const img = (src: string, alt: string, width: number, height: number, href?: string) => ({
  _type: "image",
  _key: key(),
  src,
  alt,
  width,
  height,
  ...(href ? { href } : {}),
});
