// Per-product supplementary content for product detail pages, sourced from
// "Swiftrooms - Content - Existing Pages.docx". Keyed by `${categorySlug}/${productSlug}`
// so one product's copy never leaks onto another via the shared page template.
//
// Slot names describe WHERE the section renders relative to the product
// page's existing (unchanged) sections:
//   afterIntro     — after the product introduction ("Why specify ...?"), before Technical Specifications
//   afterSpecs     — after the Technical Specifications table, before Key Features
//   afterFeatures  — after Key Features, before Gallery
//   afterDownloads — after Downloads, before "Other <Category>" (related products)
//   beforeCta      — "Why Swiftrooms" close, right before the final CTA section
import type { ContentBlock } from "@/lib/catalogueContent";

export type ProductContent = {
  afterIntro?: ContentBlock[];
  afterSpecs?: ContentBlock[];
  afterFeatures?: ContentBlock[];
  afterDownloads?: ContentBlock[];
  beforeCta?: ContentBlock[];
  faqs?: { q: string; a: string }[];
};

export const PRODUCT_CONTENT: Record<string, ProductContent> = {
  "aluminium-windows/aluminium-sliding-windows": {
    afterIntro: [
      {
        eyebrow: "GULF EXTRUSIONS SYSTEM",
        heading: "What Buying an Authorised Aluminium Sliding Window System Actually Gets You",
        level: 2,
        paragraphs: [
          "Being an authorised Gulf Extrusions partner means the profile, hardware, and finish used on a project match the manufacturer's published spec exactly, rather than a similar-looking substitute.",
          "It also means warranty claims go through a recognised chain rather than depending entirely on the installer's own goodwill after the job is finished.",
        ],
        bullets: [
          "Authorised supply keeps the installed product matching the published spec sheet",
          "Warranty coverage is backed by the manufacturer, not just the installer",
          "Worth confirming authorised status directly rather than assuming from a logo",
        ],
      },
    ],
    afterSpecs: [
      {
        eyebrow: "SASH SIZING",
        heading: "What the 1,500mm Width Limit Actually Means",
        level: 2,
        paragraphs: [
          "A maximum sash width isn't an arbitrary number, it's the point past which a single sliding panel becomes too heavy for the roller carriage to move smoothly over years of daily use.",
          "Staying within the rated 1,500mm sash width and 2,400mm frame height keeps the rollers operating well inside their working tolerance, rather than right at the edge of it.",
        ],
        bullets: [
          "Rated limits protect roller lifespan, not just glass strength",
          "Oversized sashes accelerate wear on the roller carriage and track",
          "Larger openings are usually split into more panels rather than one oversized sash",
        ],
      },
      {
        eyebrow: "ROLLER & TRACK DURABILITY",
        heading: "Aluminium Sliding Windows – The Secret to Smooth, Silent Glide Action",
        level: 3,
        paragraphs: [
          "Long-term sliding performance depends entirely on the mechanical quality of bottom roller carriages and track rails.",
          "Heavy-duty tandem stainless steel rollers ride along raised, precision-milled tracks, holding structural alignment even under heavy double-glazed loads. Selecting corrosion-resistant stainless components prevents roller flat-spots and track grinding caused by trapped desert sand.",
        ],
        bullets: [
          "Stainless steel tandem rollers support individual panel weights up to 150kg",
          "Raised stainless tracks prevent sand grit from jamming the roller gear",
          "Precision ball bearings ensure whisper-quiet, single-finger gliding movement",
        ],
      },
      {
        eyebrow: "AIR PERMEABILITY EXPLAINED",
        heading: "What Class 2 Actually Means for Your Home",
        level: 3,
        paragraphs: [
          "Air permeability class is a measured rating of how much air leaks through the closed window under test pressure, Class 2 sits at a solid mid-performance level suited to most residential openings, though it's worth knowing it's not the top tier available.",
          "For rooms where draught control matters more, it's worth asking what a Class 3 or 4 rated system would cost by comparison.",
        ],
        bullets: [
          "Higher class numbers mean less air leakage under the same test pressure",
          "Class 2 is a common residential standard, not the maximum available",
          "Draught-sensitive rooms may justify the cost step up to a higher class",
        ],
      },
      {
        eyebrow: "WATER TIGHTNESS RATING",
        heading: "Reading the Class 3A Rating Correctly",
        level: 3,
        paragraphs: [
          "Water tightness class measures how much wind-driven rain pressure the closed window can withstand before water penetrates the seal.",
          "A Class 3A rating is a respectable mid-to-upper residential standard, generally sufficient for most UAE elevations, though exposed coastal or high-rise openings facing prevailing wind may warrant checking whether a higher-rated variant is available for that specific project.",
        ],
        bullets: [
          "Class 3A covers most standard residential wind and rain exposure",
          "Coastal or high-elevation openings may need a higher water tightness rating",
          "Rating applies to the closed and locked position, not while operable",
        ],
      },
      {
        eyebrow: "TRACK CONFIGURATION",
        heading: "2-Track or 3-Track – Which Should You Choose?",
        level: 4,
        paragraphs: [
          "The track count decides how much of the opening can actually be glass versus how much stays covered by a parked sash. A 2-track system gives you one fixed pane and one operable sash, while a 3-track layout allows a wider opening ratio, useful where cross-ventilation matters more than a single unbroken view.",
          "Aluminium sliding windows in this configuration are usually chosen specifically because the track count can be matched to the room, not fixed by the system itself.",
        ],
        bullets: [
          "2-track suits openings where half the width needs to stay fixed",
          "3-track increases the operable percentage of the total opening",
          "Track choice affects both ventilation and how much glass stays visible when closed",
        ],
      },
    ],
    afterFeatures: [
      {
        eyebrow: "NIGHT VENTILATION LATCH",
        heading: "A Small Feature With a Real Security Purpose",
        level: 4,
        paragraphs: [
          "A night ventilation latch lets the sash sit open just a few centimetres and lock in that position, enough airflow for a warm night without leaving the opening wide enough for someone to reach through.",
          "It's a detail that's easy to overlook on a spec sheet but genuinely changes how the window gets used day to day.",
        ],
        bullets: [
          "Locks the sash in a partially open position, not fully secured or fully open",
          "Allows overnight ventilation without the security gap of a fully open sash",
          "Particularly useful on ground-floor or easily accessed upper-floor openings",
        ],
      },
      {
        eyebrow: "INTEGRATED FLY SCREENS",
        heading: "Why a Built-In Screen Channel Beats a Bolt-On One",
        level: 4,
        paragraphs: [
          "A screen channel designed into the frame during manufacture sits flush against the sightline, rather than sitting proud of the frame the way an aftermarket screen usually does.",
          "It also means the screen can be removed cleanly for glass cleaning without disturbing the frame seal, which matters more in a climate where dust builds up on both sides of the glass.",
        ],
        bullets: [
          "Flush-fitted channels avoid the bolted-on look of retrofitted screens",
          "Removable design allows full glass access for cleaning",
          "Screen mesh should be checked separately for UV degradation over time",
        ],
      },
      {
        eyebrow: "POWDER COAT FINISHES",
        heading: "More Than a Colour Choice",
        level: 4,
        paragraphs: [
          "Powder coating isn't just decorative, a properly cured Qualicoat-standard coat resists UV fading and chalking far better than a basic sprayed finish, which matters on a system installed permanently in direct Gulf sun.",
          "Dual-colour options, where the exterior and interior frame faces differ, are also worth considering on projects where the internal colour scheme doesn't match the external elevation design.",
        ],
        bullets: [
          "Qualicoat-standard coatings resist UV fading better than basic finishes",
          "Dual-colour options separate interior and exterior frame colour choices",
          "Coating quality affects long-term appearance more than the initial colour itself",
        ],
      },
      {
        eyebrow: "SECURITY CONSIDERATIONS",
        heading: "What to Check Beyond the Lock Itself",
        level: 5,
        paragraphs: [
          "The visible handle lock is only part of the security picture, the track design also matters, since a poorly engineered sliding system can sometimes be lifted off its track from outside if the anti-lift detailing isn't right.",
          "Confirming anti-lift features built into the frame is worth doing at spec stage, particularly for ground-floor openings.",
        ],
        bullets: [
          "Anti-lift track detailing prevents the sash being lifted out from outside",
          "Handle locks should be checked alongside track security, not instead of it",
          "Ground-floor and easily accessed openings warrant the closest security review",
        ],
      },
    ],
    afterDownloads: [
      {
        eyebrow: "SPACE EFFICIENCY",
        heading: "Why Sliding Windows Suit Apartments and Tight Layouts",
        level: 5,
        paragraphs: [
          "A sliding sash moves horizontally within its own frame, which means it never swings into a room or over a balcony edge, the reason this system shows up so often on apartment towers and villa upper floors where clearance is tight.",
          "No swing arc also means furniture, curtains, and balcony railings can sit closer to the opening without interference.",
        ],
        bullets: [
          "Zero swing clearance needed compared to outward or inward-opening casements",
          "Well suited to balconies, walkways, and narrow side elevations",
          "Furniture and fittings can be positioned closer to the frame",
        ],
      },
      {
        eyebrow: "HIGH-RISE AND BALCONY USE",
        heading: "Why This System Is Common on Apartment Towers",
        level: 5,
        paragraphs: [
          "Balcony and terrace openings on mid- and high-rise buildings are a natural fit for sliding systems, since there's no swing arc to clash with railings, outdoor furniture, or the space itself.",
          "It's one of the most frequent applications for aluminium sliding windows across Dubai apartment developments, where balcony depth is often limited.",
        ],
        bullets: [
          "No swing arc means no clash with balcony railings or furniture",
          "Common specification choice across mid- and high-rise residential developments",
          "Suits limited-depth balconies where a casement swing wouldn't fit comfortably",
        ],
      },
      {
        eyebrow: "MAINTENANCE ROUTINE",
        heading: "What Keeping This System Running Actually Involves",
        level: 5,
        paragraphs: [
          "Aluminium sliding windows need very little upkeep compared to timber, but \"very little\" isn't \"none\", track channels collect dust and fine sand that, left alone, eventually affects how smoothly the sash glides.",
          "A quick vacuum of the bottom track every few months and an annual check of the roller wheels keeps the system running the way it did on day one.",
        ],
        bullets: [
          "Bottom track debris is the most common cause of stiff sliding action",
          "Roller wheels benefit from a light annual inspection and lubrication",
          "Frame cleaning with mild soapy water preserves the powder coat finish",
        ],
      },
      {
        eyebrow: "SLIDING VS CASEMENT",
        heading: "When This System Makes More Sense Than a Hinged Window",
        level: 5,
        paragraphs: [
          "Casement windows generally open wider and can achieve better air permeability ratings, but they need swing clearance a sliding system doesn't.",
          "Choosing between the two usually comes down to the room: balconies, walkways, and space-constrained elevations tend to favour sliding, while rooms with open exterior clearance often get better ventilation performance from casement.",
        ],
        bullets: [
          "Casement typically achieves higher air permeability and ventilation performance",
          "Sliding avoids the swing clearance casement requires on both sides",
          "The right choice depends on the specific opening, not a fixed preference",
        ],
      },
      {
        eyebrow: "PROJECT PLANNING NOTES",
        heading: "What to Confirm Before Ordering",
        level: 6,
        paragraphs: [
          "Opening size, sash configuration, and track count all need confirming against the actual structural opening before fabrication starts, a system ordered against approximate measurements often needs costly rework on site.",
          "A proper survey against the finished opening, not the architectural drawing, is the step that prevents most fit issues later.",
        ],
        bullets: [
          "Fabrication should follow site-measured dimensions, not drawing-stage estimates",
          "Confirm track configuration and sash split before the order is placed",
          "A pre-fabrication site survey is the step that prevents most fit issues",
        ],
      },
    ],
    beforeCta: [
      {
        eyebrow: "WHY SWIFTROOMS",
        heading: "Authorised Sliding Systems Specified for Gulf Conditions",
        level: 6,
        paragraphs: [
          "We supply and install aluminium sliding windows built to handle intense UAE heat and sand exposure.",
          "As an authorised Gulf Extrusions partner, we deliver genuine profile stock with anti-lift security, integrated fly screen channels, and Qualicoat finishes, all backed by official factory warranties.",
        ],
        bullets: [
          "Authorised partner for genuine Gulf Extrusions and Cortizo profile systems",
          "Custom 2-track and 3-track configurations with Class 3A water tightness",
          "Built-in anti-lift track protection and integrated flush fly screens",
          "Free site surveys and exact laser aperture measurements within 24 hours",
          "Full manufacturer-backed warranties across profiles, hardware, and finishes",
        ],
      },
    ],
    faqs: [
      {
        q: "What's the maximum panel size for aluminium sliding windows?",
        a: "Aluminium sliding windows built on a Gulf Extrusions system are rated to a maximum sash width of 1,500mm and frame height of 2,400mm. That limit isn't arbitrary, beyond it, a single panel becomes too heavy for the roller carriage to move smoothly over years of daily use, which is why wider openings are usually split into more panels rather than built as one oversized sash.",
      },
      {
        q: "Are aluminium sliding windows secure enough for ground-floor openings?",
        a: "Yes, provided the track design includes anti-lift detailing, not just a handle lock. On a poorly engineered system, a sliding sash can sometimes be lifted off its track from outside, so it's worth confirming anti-lift track protection is built into the frame at spec stage, particularly for ground-floor or easily accessed upper-floor openings.",
      },
      {
        q: "Why are aluminium sliding windows so common on apartment towers and balconies?",
        a: "Because a sliding sash moves horizontally within its own frame rather than swinging outward, it needs zero swing clearance, which suits balconies, walkways and narrow side elevations where a casement's arc simply wouldn't fit. It also means furniture, railings and curtains can sit closer to the opening without interference.",
      },
      {
        q: "Can aluminium sliding windows include a screen for insects without looking bolted-on?",
        a: "Yes, a screen channel built into the frame during manufacture sits flush against the sightline rather than sitting proud of it the way an aftermarket screen does. It's also removable for glass cleaning without disturbing the frame seal, which matters more in a climate where dust builds up on both sides of the glass.",
      },
      {
        q: "What's the difference between a 2-track and 3-track aluminium sliding window?",
        a: "A 2-track system gives one fixed pane and one operable sash, while a 3-track layout increases the operable percentage of the opening, useful where cross-ventilation matters more than an unbroken view. The right track count depends on the room rather than being fixed by the system itself.",
      },
      {
        q: "How much maintenance do aluminium sliding windows actually need in the UAE?",
        a: "Very little compared with timber, but not none. Bottom track channels collect dust and fine sand that, left alone, eventually stiffens how the sash glides, so a quick vacuum of the track every few months and an annual roller check keeps the system running the way it did on day one. Frame cleaning with mild soapy water also preserves the powder coat finish.",
      },
      {
        q: "Should I choose aluminium sliding windows or casement windows for a specific room?",
        a: "It depends on the opening more than personal preference. Casement windows generally achieve better air permeability and open wider, but need swing clearance on both sides. Aluminium sliding windows avoid that clearance requirement entirely, which is why they tend to win out on balconies, walkways and space-constrained elevations, while rooms with open exterior clearance often do better with casement ventilation.",
      },
    ],
  },
};
