// Shared "Shop By Brand" link list — single source of truth for both the
// header mega-menu (Navbar.tsx) and the footer's brand column, so the two
// never drift out of sync with the actual /brands/[slug] pages.
export type BrandNavLink = { label: string; href: string };

export const BRAND_NAV_LINKS: BrandNavLink[] = [
  { label: "Vitrocsa", href: "/brands/vitrocsa-sliding-doors" },
  { label: "Schüco", href: "/brands/schuco-aluminium-windows" },
  { label: "Reynaers", href: "/brands/reynaers-aluminium-systems" },
  { label: "Cortizo", href: "/brands/cortizo-aluminium-systems" },
  { label: "Vetro", href: "/brands/vetro-slim-aluminium-windows" },
  { label: "Vetromax", href: "/brands/vetromax-frameless-glazing" },
  { label: "Gulf Extrusions", href: "/brands/gulf-extrusions-aluminium-systems" },
  { label: "Deceuninck", href: "/brands/deceuninck-upvc-windows-doors" },
  { label: "UltraFrame", href: "/brands/ultraframe-roof-systems" },
];
