// Content for the bespoke /brands/vetromax page. Unlike the brands in
// brandContent.ts (one flat run of ContentBlocks), Vetromax is laid out as a
// range page: system cards, a comparison table and brochure downloads.
//
// `href` on a system is left unset until its own detail page exists — the
// page then renders that system's card and comparison column without a link
// rather than pointing at a 404.

export type VetromaxSystem = {
  slug: string;
  name: string;
  code?: string;
  category: string;
  summary: string;
  image: string;
  imageAlt: string;
  specs: { label: string; value: string }[];
  compare: Record<CompareKey, string>;
  href?: string;
};

export type CompareKey =
  | "systemType"
  | "application"
  | "profile"
  | "maxSize"
  | "glazing"
  | "operation"
  | "thermalBreak"
  | "keyUseCase";

export const COMPARE_ROWS: { key: CompareKey; label: string }[] = [
  { key: "systemType", label: "System type" },
  { key: "application", label: "Application" },
  { key: "profile", label: "Profile" },
  { key: "maxSize", label: "Maximum size" },
  { key: "glazing", label: "Glazing" },
  { key: "operation", label: "Operation" },
  { key: "thermalBreak", label: "Thermal break" },
  { key: "keyUseCase", label: "Key use case" },
];

export const VETROMAX = {
  name: "Vetromax",
  metaTitle: "Vetromax Minimalist Aluminium Systems",
  metaDescription:
    "Vetromax minimalist aluminium systems supplied and installed in the UAE by Swiftrooms — Vetro Façade curtain wall, Casement, Slide, Pivot and Guillotine.",
  hero: {
    tagline: "Minimalist Aluminium Systems",
    description:
      "Vetromax builds minimalist aluminium systems for contemporary architecture — curtain wall, casement windows and doors, sliding and vertical sliding walls, and oversized pivot entrances. The common thread across the range is that structural depth is carried behind the sightline rather than across it, so the visible frame stays narrow while the glass gets larger.",
    image: "/brand/vetromax/home.webp",
    imageAlt: "Contemporary villa facade with minimal-framed aluminium glazing across two storeys",
  },
  strengths: [
    {
      title: "One platform, five system types",
      body: "Facade, casement, sliding, pivot and vertical sliding all come from the same manufacturer, so sightlines and finishes can be held consistent across an entire building rather than negotiated between suppliers.",
    },
    {
      title: "Tested to European and American standards",
      body: "Vetro Façade is tested to ASTM and AAMA alongside the CWCT sequence; the window and door systems carry EN classifications for air, water and wind. The published figures are set out in full on each system page.",
    },
    {
      title: "Specified for Gulf conditions",
      body: "Swiftrooms specifies and installs these systems in the UAE, checking thermal break, gasket and wind-load data against the actual site rather than passing on the catalogue figures.",
    },
  ],
  applications: [
    {
      title: "Villas",
      body: "Full-height sliding walls, pivot entrances and hidden-sash windows on a single sightline.",
    },
    {
      title: "Towers and mixed-use",
      body: "Vetro Façade curtain wall across primary elevations, with integrated opening vents and doors.",
    },
    {
      title: "Hospitality and retail",
      body: "Vertical sliding serveries, frameless corners and oversized entrance doors.",
    },
  ],
  downloads: [
    { label: "Vetro Façade brochure", href: "https://vetromax.com/downloads/brochure/VetroFacade_Brochure.pdf" },
    { label: "Vetro Casement brochure", href: "https://vetromax.com/downloads/brochure/VetroCasement%20Brochure.pdf" },
    { label: "Vetro Slide brochure", href: "https://vetromax.com/downloads/brochure/VetroSlide_Brochure.pdf" },
    { label: "Vetro Pivot brochure", href: "https://vetromax.com/downloads/brochure/VetroPivot_Brochure.pdf" },
  ],
};

export const VETROMAX_SYSTEMS: VetromaxSystem[] = [
  {
    slug: "vetro-facade",
    name: "Vetro Façade",
    code: "VF CW 35C",
    category: "Minimal Curtain Wall Systems",
    summary: "A 35 mm minimal curtain wall system for conventional, structural and hybrid facades.",
    image: "/brand/vetromax/vetro-facade.webp",
    imageAlt: "Vetro Façade curtain wall render showing the mullion and transom junction with glazing on both axes",
    specs: [
      { label: "Profile face width", value: "35 mm" },
      { label: "Construction", value: "Aluminium mullions and transoms" },
      { label: "Profile depth", value: "Varies by span and wind load" },
    ],
    compare: {
      systemType: "Curtain wall",
      application: "Facades and full elevations",
      profile: "35 mm face width",
      maxSize: "—",
      glazing: "—",
      operation: "Fixed, with integrated windows and doors",
      thermalBreak: "Yes",
      keyUseCase: "Continuous glazing across a whole elevation",
    },
  },
  {
    slug: "vetro-casement",
    name: "Vetro Casement",
    code: "HS 80P",
    category: "Windows & Doors Hidden Sash System",
    summary: "A hidden-sash aluminium window and door system with a 45 mm fixed frame and concealed hinges.",
    image: "/brand/vetromax/vetro-casement.webp",
    imageAlt: "Vetro Casement hinged door render viewed from outside, showing the concealed sash and flush outer face",
    specs: [
      { label: "Fixed aluminium frame", value: "45 mm" },
      { label: "Openable profile (incl. frame)", value: "60 mm" },
      { label: "Sash type", value: "Hidden / concealed" },
    ],
    compare: {
      systemType: "Casement windows and doors",
      application: "Windows and hinged doors",
      profile: "45 mm fixed / 60 mm openable",
      maxSize: "—",
      glazing: "—",
      operation: "Side-hung, bottom-hung, tilt-and-turn, hinged doors",
      thermalBreak: "Yes",
      keyUseCase: "Mixed fixed and opening lights on one sightline",
    },
  },
  {
    slug: "vetro-slide",
    name: "Vetro Slide",
    category: "Minimal Sliding Windows & Door Systems",
    summary: "A 22 mm minimal sliding system for large glazed openings, manual or motorised.",
    image: "/brand/vetromax/vetro-slide.webp",
    imageAlt: "Vetro Slide render in section, showing the sliding panels, concealed frame and floor track set into stone",
    specs: [
      { label: "Minimal profile", value: "22 mm" },
      { label: "Maximum glass width", value: "3,000 mm" },
      { label: "Maximum glass height", value: "6,000 mm" },
    ],
    compare: {
      systemType: "Sliding windows and doors",
      application: "Large glazed openings",
      profile: "22 mm",
      maxSize: "3,000 × 6,000 mm per panel",
      glazing: "—",
      operation: "Manual or motorised, up to 5 tracks",
      thermalBreak: "Yes",
      keyUseCase: "Wide rear elevations that open fully",
    },
  },
  {
    slug: "vetro-pivot",
    name: "Vetro Pivot",
    code: "VP 75",
    category: "Minimal Pivot Door System",
    summary: "A minimal pivot door carrying leaves to 2.5 m × 6 m on a floor pivot rated to 600 kg.",
    image: "/brand/vetromax/vetro-pivot.webp",
    imageAlt: "Vetro Pivot render in section, showing the door profile meeting a stone threshold over the slab",
    specs: [
      { label: "Floor pivot capacity", value: "Up to 600 kg" },
      { label: "Glass combinations", value: "Up to 52 mm" },
      { label: "Maximum leaf width", value: "2,500 mm" },
    ],
    compare: {
      systemType: "Pivot door",
      application: "Entrances and feature doors",
      profile: "—",
      maxSize: "2,500 × 6,000 mm per leaf",
      glazing: "Up to 52 mm",
      operation: "Inward, outward or double action",
      thermalBreak: "Yes",
      keyUseCase: "A single oversized entrance door",
    },
  },
  {
    slug: "vetro-guillotine",
    name: "Vetro Guillotine",
    category: "Minimal Vertical Sliding System",
    summary: "A 21 mm vertical sliding system that drops the glass away rather than sliding it sideways.",
    image: "/brand/vetromax/vetro-guillotine.webp",
    imageAlt: "Vetro Guillotine render showing three stacked vertical sliding panels within a single frame",
    specs: [
      { label: "Minimal profile", value: "21 mm" },
      { label: "Maximum glass width", value: "3,000 mm" },
      { label: "Maximum glass height", value: "6,000 mm" },
    ],
    compare: {
      systemType: "Vertical sliding",
      application: "Serveries, balconies, glazed bays",
      profile: "21 mm",
      maxSize: "3,000 × 6,000 mm per panel",
      glazing: "—",
      operation: "Vertical sliding",
      thermalBreak: "Yes",
      keyUseCase: "Clearing an opening with nowhere to slide sideways",
    },
  },
];
