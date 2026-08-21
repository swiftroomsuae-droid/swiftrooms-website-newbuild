// Content for standalone brand partner pages (/brands/[slug]), sourced from
// "Swiftrooms - Content - New Pages.docx". These are new pages with no
// product-comparison table, so unlike catalogue category pages they render
// as one flat sequence of ContentBlocks rather than being split into
// afterHero/afterComparison/afterWorksWellWith slots.
import type { ContentBlock } from "@/lib/catalogueContent";

export type BrandWorksWellWithItem = { label: string; blurb: string; href: string };

export type BrandContent = {
  name: string;
  metaTitle: string;
  metaDescription: string;
  hero: { h1: string; tagline: string; description: string };
  blocks: ContentBlock[];
  // Omit when the source doc has no "Works well with" section for this brand.
  worksWellWith?: { level?: 2 | 3 | 4 | 5 | 6; items: BrandWorksWellWithItem[] };
  // Heading level for "Frequently asked questions." — varies per source doc page.
  faqLevel: 2 | 3 | 4 | 5 | 6;
  faqs: { q: string; a: string }[];
  whySwiftrooms: ContentBlock;
  // `eyebrow` is only set when the doc gives a bespoke headline (Vitrocsa) —
  // it holds the standard "Free quote & site visit..." line that would
  // otherwise BE the heading (as it is for Schüco/Reynaers). `body` is an
  // array since Vitrocsa's doc gives two separate closing sentences.
  cta: { eyebrow?: string; heading: string; body: string[] };
};

export const BRAND_CONTENT: Record<string, BrandContent> = {
  "vitrocsa-sliding-doors": {
    name: "Vitrocsa Sliding Doors",
    metaTitle: "Vitrocsa Sliding Doors in Dubai",
    metaDescription:
      "Frameless Vitrocsa sliding doors by Swiftrooms for Dubai villas & penthouses, concealed tracks, uninterrupted glass corners. Get a free quote and free site visit today.",
    hero: {
      h1: "Vitrocsa Sliding Doors",
      tagline: "Where the frame disappears.",
      description:
        "Vitrocsa systems conceal every track, roller, and structural component into the floor, ceiling, and wall, leaving glass meeting glass at the corner, engineered for Dubai's most ambitious architecture.",
    },
    blocks: [
      {
        eyebrow: "FRAMELESS GLAZING ENGINEERED FOR UNINTERRUPTED VIEWS",
        heading: "Why Choose Vitrocsa Sliding Doors for Luxury UAE Projects?",
        level: 2,
        paragraphs: [
          "Vitrocsa isn't a sliding door with a slim frame, it's a system built around removing the frame from the conversation entirely. Panels run on tracks concealed into the floor, ceiling, and wall, so what's left is glass meeting glass at the corner, not glass meeting aluminium.",
          "Swiftrooms LLC has been the UAE partner bringing this level of precision glazing into Dubai villas, penthouses, and commercial builds for 13 years.",
        ],
        bullets: [],
      },
      {
        eyebrow: "FRAME PHILOSOPHY",
        heading: "What Actually Makes Vitrocsa Different From a Standard Slim Slider",
        level: 2,
        paragraphs: [
          "Most \"minimal\" sliding systems reduce the visible frame; Vitrocsa removes it from view almost entirely. The mullions, tracks, and rollers that carry the glass sit recessed into the floor slab and head detail rather than sitting proud of it, so from inside the room there's very little metal to register at all.",
          "That's a different manufacturing and installation discipline than a standard slim slider, the structural opening has to be built around the system from day one, not adapted to it afterward.",
        ],
        bullets: [
          "Concealed tracks sit within the floor and ceiling build-up, not on top of it",
          "Requires structural coordination at design stage, not a retrofit-friendly system",
          "The frameless effect is a construction detail, not a cosmetic finish",
        ],
      },
      {
        eyebrow: "CONFIGURATION OPTIONS",
        heading: "Five Ways to Open a Wall",
        level: 3,
        paragraphs: [
          "Vitrocsa isn't a single product, it's a family of configurations built around the same concealed-frame principle. Pocket systems let full panels retract into a cavity inside an adjacent wall, disappearing completely rather than parking to one side.",
          "Corner configurations remove the vertical post at a building's corner altogether, so two glass walls meet at a true open corner with nothing holding them up but the glazing itself.",
        ],
        bullets: [
          "Pocket systems retract panels fully into a hidden wall cavity",
          "Corner glazing eliminates the vertical support post at the opening's corner",
          "Motorised large-scale panels handle weight that would be impractical to move by hand",
          "Detachable frameless windows can be lifted out entirely for a fully open façade",
        ],
      },
      {
        eyebrow: "STRUCTURAL ENGINEERING",
        heading: "How a Frameless Vitrocsa Sliding Door System Still Carries the Glass Load",
        level: 3,
        paragraphs: [
          "Removing the visible frame doesn't remove the engineering, it just moves it out of sight. Load-bearing tracks concealed in the floor carry panel weight that would normally run through a visible bottom rail, and custom roller mechanisms are sized specifically for the panel dimensions on each project rather than pulled from a generic catalogue.",
          "Drainage is concealed too, routed through the sill rather than sitting as a visible channel.",
        ],
        bullets: [
          "High load-bearing tracks are hidden within the floor build-up, not exposed",
          "Roller mechanisms are specified per project, not standardised across all panel sizes",
          "Concealed drainage keeps the sill line clean without compromising water management",
        ],
      },
      {
        eyebrow: "BUILT FOR THIS CLIMATE",
        heading: "Why a European System Still Needs Local Adaptation",
        level: 3,
        paragraphs: [
          "A glazing system engineered in Switzerland performs differently once it's sitting in 48°C Dubai heat with fine desert sand working its way into every seal.",
          "Vitrocsa's aluminium components and glass specifications are built for demanding conditions generally, but the actual installation, sealing tolerances, drainage detailing, alignment, is what determines whether that performance holds up here specifically. This is where Swift Rooms' local track record matters more than the imported spec sheet alone.",
        ],
        bullets: [
          "Precision sealing prevents sand ingress into a system with tighter tolerances than standard sliders",
          "Correct alignment at install is critical, frameless systems have less margin for error",
          "Local installation experience closes the gap between a European datasheet and Gulf conditions",
        ],
      },
      {
        eyebrow: "THERMAL AND ACOUSTIC PERFORMANCE",
        heading: "Minimal Doesn't Mean a Compromise on Comfort",
        level: 4,
        paragraphs: [
          "A near-invisible frame still has to do a frame's job, keeping heat out and noise down. High-performance glazing options within the Vitrocsa range manage solar gain even across large uninterrupted panels, and glass specification, not the aluminium, does most of the acoustic work on a system with this little visible metal.",
          "Getting the glass build-up right matters more here than on a conventional frame, since there's less structure to fall back on if the spec is wrong.",
        ],
        bullets: [
          "Solar-control glazing options help regulate interior temperature across large panels",
          "Acoustic performance depends heavily on glass specification given the minimal frame",
          "Airtight sealing at installation is what actually delivers the rated performance in practice",
        ],
      },
      {
        eyebrow: "INDOOR-OUTDOOR CONNECTION",
        heading: "What Changes When the Wall Actually Disappears",
        level: 4,
        paragraphs: [
          "A living room that opens fully onto a terrace behaves differently than one with a large but framed sliding door, there's no threshold moment, no visual break between inside and outside. On Dubai properties with pools, landscaped terraces, or shaded majlis areas, that's usually the entire point of specifying Vitrocsa over a standard system: the transition itself becomes part of the architecture rather than an afterthought.",
        ],
        bullets: [
          "Works best where the outdoor space is genuinely designed to be used, not just viewed",
          "Suits pool decks, terraces, and majlis areas more than purely decorative gardens",
          "The effect depends on floor level and finish matching across the threshold",
        ],
      },
      {
        eyebrow: "WHERE VITROCSA GETS SPECIFIED",
        heading: "Residential, Commercial, and Hospitality Applications",
        level: 4,
        paragraphs: [
          "Vitrocsa sliding doors show up most often on waterfront villas and penthouses where an uninterrupted view is the actual selling point of the property, but the same system runs on corporate offices wanting a frameless boardroom wall and boutique hotels using it to blur the line between a lobby and an outdoor courtyard.",
          "The application changes; the underlying engineering doesn't.",
        ],
        bullets: [
          "Residential: waterfront villas, penthouses, and family homes prioritising view over ornament",
          "Commercial: executive offices and showrooms where the glazing itself is part of the brand statement",
          "Hospitality: boutique hotels and event spaces opening onto courtyards or terraces",
        ],
      },
      {
        eyebrow: "WHY INSTALLATION QUALITY MATTERS MORE HERE",
        heading: "Millimetres Matter on a System with No Frame to Hide Behind",
        level: 4,
        paragraphs: [
          "A conventional sliding door has some tolerance built into a visible frame that can absorb small misalignments without anyone noticing. A frameless system doesn't have that buffer, a roller mechanism set even a couple of millimetres out of true shows up immediately in how the panel glides, and a poorly sealed concealed track shows up later as a leak nobody can easily trace.",
          "That's the real argument for Vitrocsa sliding doors being installed by a team that's done it before, not just supplied the product.",
        ],
        bullets: [
          "Roller and track alignment tolerances are tighter than on standard slider systems",
          "Concealed drainage and sealing errors are harder to diagnose after the fact",
          "Precision manufacturing is only half the result, installation is the other half",
        ],
      },
    ],
    faqLevel: 5,
    faqs: [
      {
        q: "What makes Vitrocsa different from a standard slim sliding door?",
        a: "Vitrocsa conceals its tracks and structural components into the floor, ceiling, and wall rather than housing them in a visible frame, which is a different construction approach than simply narrowing a conventional profile. The result reads as glass meeting glass, particularly at open corners, rather than glass held inside a slim metal border.",
      },
      {
        q: "Do Vitrocsa systems actually hold up in Dubai's climate?",
        a: "Yes, provided the installation is done to the tolerance the system needs. High-performance glazing and precision hardware handle the heat and structural load; correct sealing and drainage detailing at install are what stop fine desert sand and driving heat from finding their way through the tighter, less forgiving tolerances of a frameless system.",
      },
      {
        q: "Can Vitrocsa support genuinely large glass panels?",
        a: "Yes, load-bearing tracks concealed in the floor and roller mechanisms sized to the specific project are built to carry substantial panel weight, and motorised options are available once a panel gets too heavy to move comfortably by hand.",
      },
      {
        q: "Are the frames completely invisible?",
        a: "Close to it. Structural components sit recessed into the floor, ceiling, and wall build-up rather than eliminated altogether, so what remains visible from inside a room is minimal rather than literally nothing, the engineering is still there, just out of sight.",
      },
      {
        q: "Is this system suitable for commercial or hospitality projects, or only high-end villas?",
        a: "Both. The same concealed-frame engineering runs across waterfront villas, corporate offices, retail showrooms, and boutique hotels, the application changes by sector, but the underlying system doesn't need to be reinvented for each one.",
      },
      {
        q: "What should you expect from a supplier on a Vitrocsa project?",
        a: "A system this precise needs more than just delivery, look for a supplier involved from the structural planning stage, coordinating directly with your contractor during the build, and installing to the tighter tolerances a concealed-frame system requires. After-sales support matters too, since gaskets and rollers on any glazing system need occasional attention over time.",
      },
    ],
    whySwiftrooms: {
      eyebrow: "WHY SWIFTROOMS",
      heading: "13 Years Installing Precision Glazing in UAE Conditions",
      level: 5,
      paragraphs: [
        "We're not a generalist glazing contractor who occasionally takes on a Vitrocsa project, this is a system that punishes imprecise installation, and getting it right consistently is what our name in the Dubai market is actually built on.",
        "From concept discussions through to structural coordination and final installation, the same technical team stays on the project the whole way through.",
      ],
      bullets: [
        "13 years installing precision glazing systems across UAE residential and commercial projects",
        "Direct technical coordination with architects, consultants, and contractors during the build",
        "Personalised consultation from initial concept through to final sign-off",
        "Dedicated after-sales support for long-term system performance",
      ],
    },
    cta: {
      eyebrow: "Free quote & site visit within 24 hours",
      heading: "Bring Vitrocsa to Your Next Project",
      body: [
        "Ultra-slim, frameless glazing engineered for Dubai's most ambitious architecture, installed by a team that's done it before.",
        "No obligation. Professional survey. Written specification.",
      ],
    },
  },
  "schuco-aluminium-windows": {
    name: "Schüco Aluminium Windows",
    metaTitle: "Schüco Aluminium Windows",
    metaDescription:
      "German-engineered Schüco aluminium windows by Swiftrooms, re-specified for Dubai heat with thermal breaks. Get a free quote today.",
    hero: {
      h1: "Schüco Aluminium Windows",
      tagline: "Engineered for extremes",
      description:
        "Schüco systems are extruded to German certification tolerances and re-specified against Gulf summer data, thermal breaks, seals, and hardware built to hold their performance well past the point where standard profiles start to fail.",
    },
    blocks: [
      {
        eyebrow: "ENGINEERED IN GERMANY. BUILT FOR GULF HEAT.",
        heading: "Why Schüco Aluminium Windows Perform Better in Dubai's Climate?",
        level: 2,
        paragraphs: [
          "Schüco aluminium windows bring German engineering tolerances to a climate they weren't originally designed around, which is exactly why the thermal break and hardware specification matter more here than on a cooler-climate installation.",
          "For UAE villas and towers where a window has to survive 48°C summers without the seals or sightlines degrading within a couple of years, that engineering margin is the whole point of specifying the system by name.",
        ],
        bullets: [],
      },
      {
        eyebrow: "PROFILE ENGINEERING",
        heading: "Precision German Engineering, Adapted for the Gulf",
        level: 2,
        paragraphs: [
          "Most window brands sold in the UAE were developed for a European market first and adapted for local conditions second. Schüco takes a similar route to Cortizo in that respect, extruded to tight European tolerances, but the profile depth and thermal break width on the ranges we install here are selected specifically against Gulf summer data rather than a European average.",
          "That distinction shows up less on a spec sheet and more after three or four summers, when a shallower, cheaper profile has already started to flex slightly under sustained heat while a properly specified frame hasn't moved.",
        ],
        bullets: [
          "European extrusion tolerances held across every production run",
          "Thermal break width matched to sustained 45–50°C exterior conditions",
          "Factory certification carried through to the UAE installation",
          "Genuine profile stock, not a re-badged equivalent",
        ],
      },
      {
        eyebrow: "THERMAL PERFORMANCE",
        heading: "What Actually Shows Up on the AC Bill",
        level: 3,
        paragraphs: [
          "A window's U-value is only half the story until it's read alongside frame depth and glazing pairing. Schüco aluminium windows built on a thermally broken profile separate the interior and exterior aluminium faces with a polyamide insulating strip, which is what stops the frame itself from becoming a heat conductor straight into the room behind it.",
          "Paired with a Low-E coated double glazed unit, that combination is usually the single biggest factor in how much a room's cooling load drops after a window replacement, more so than most homeowners initially expect from a frame swap alone.",
        ],
        bullets: [
          "Thermally broken profile as standard, not an optional upgrade",
          "Low-E and solar control coatings tuned to elevation orientation",
          "Double glazing standard, triple glazing available for high-noise or west-facing plots",
          "U-value figures supplied against the matching glazing spec, not the frame alone",
        ],
      },
      {
        eyebrow: "SYSTEM RANGE",
        heading: "Choosing the Right Schüco Aluminium Window Style",
        level: 3,
        paragraphs: [
          "Schüco aluminium windows are available across casement, tilt-turn and sliding formats, and the right choice tends to come down to the wall it's going into rather than personal preference. Casements give the tightest seal and the best air permeability rating; tilt-turn adds an inward-swinging cleaning position most owners only appreciate once they've lived with it for a year; sliding formats suit balconies, kitchens over counters and anywhere a swing radius simply won't fit.",
          "Apartment towers across Dubai and Abu Dhabi lean toward sliding formats for exactly this reason, while villas typically mix all three depending on the room and its exposure.",
        ],
        bullets: [
          "Casement: strongest air-tightness, widest ventilation opening",
          "Tilt-turn: dual function, easier maintenance access from inside",
          "Sliding: zero swing clearance, suited to tight balconies and walkways",
          "Fixed lights combined with any format for larger, uninterrupted openings",
        ],
      },
      {
        eyebrow: "SECURITY STANDARDS",
        heading: "Locking Configurations Worth Specifying",
        level: 3,
        paragraphs: [
          "The glass and frame get most of the attention in a spec conversation, but the locking hardware is usually what actually decides whether a break-in attempt gets anywhere. Multi-point espagnolette locking distributes pressure across several points along the sash rather than relying on a single catch at the handle, which matters most on ground-floor and easily accessed openings.",
          "Laminated glazing adds a further layer without the bulk of toughened glass, and it's increasingly requested on street-level installations across newer residential compounds in Dubai.",
        ],
        bullets: [
          "Multi-point espagnolette locking across casement and tilt-turn ranges",
          "Laminated glazing available for ground-floor and accessible openings",
          "Restrictor stays for a controlled, partial-open ventilation position",
          "Key-locking handles compatible across the full profile range",
        ],
      },
      {
        eyebrow: "ACOUSTIC PERFORMANCE",
        heading: "What Actually Cuts the Noise, Frame or Glass",
        level: 4,
        paragraphs: [
          "Sealing quality and glazing spec do most of the work on noise reduction, a well-sealed frame with the wrong glass still lets sound through, and premium glass in a poorly sealed frame performs no better.",
          "Schüco's multi-point locking compresses the sash evenly against the seal when closed, which matters as much for acoustic performance as it does for security, and it's why the two specs tend to move together rather than being priced separately.",
        ],
        bullets: [
          "Seal compression on closing affects noise transmission as much as the glass itself",
          "Acoustic-rated glazing is worth specifying on villas near main roads or under flight paths",
          "Multi-point locking systems support both security and acoustic sealing simultaneously",
        ],
      },
      {
        eyebrow: "FINISHES",
        heading: "Colour That Holds Up in Direct Sun",
        level: 4,
        paragraphs: [
          "RAL powder coating covers most colour requests on a project, but the quality of the coating behind the colour is what determines whether a frame still looks new after five UAE summers or starts chalking after two. Anodised finishes hold up marginally better under constant direct sun and tend to suit a more minimal, industrial look than a painted frame.",
          "Anthracite grey and matte black have overtaken white as the most requested finish on villa projects across Dubai and Abu Dhabi over the last couple of years, generally specified alongside slimmer sightline profiles.",
        ],
        bullets: [
          "Qualicoat-standard RAL colour matching against existing doors and cladding",
          "Anodised finishes for superior long-term UV resistance",
          "Anthracite and matte black now the most requested tones",
          "Dual-tone options pairing a darker exterior with a lighter interior frame",
        ],
      },
      {
        eyebrow: "REGIONAL APPLICATIONS",
        heading: "Where Schüco Aluminium Windows Gets Applied",
        level: 4,
        paragraphs: [
          "Residential and commercial briefs pull the same underlying profile in different directions. On villas, the priority usually sits with sightline and finish, matching windows to an existing door and curtain wall palette across the elevation. On commercial fit-outs, cycle rating and compliance move to the front of the conversation instead, hardware that survives daily opening cycles without loosening, plus fire-rated glazing configurations where local code calls for it.",
          "Larger commercial projects across the UAE increasingly specify a single profile family across an entire building, often pairing window systems with a matching curtain wall on the primary elevations, to keep sightlines consistent floor to floor.",
        ],
        bullets: [
          "Villa elevations: statement sightlines matched to existing joinery",
          "Apartment towers: slim profiles suited to smaller floor plates",
          "Retail and hospitality: higher cycle-rated hardware for daily footfall",
          "Mixed-use developments: matched window and curtain wall profile families",
        ],
      },
      {
        eyebrow: "UPKEEP",
        heading: "Maintenance in Dust and Coastal Air",
        level: 4,
        paragraphs: [
          "Even a well-specified system needs some seasonal attention in this environment. Dust settles into track channels faster here than in most markets these profiles were originally engineered for, and coastal properties see hardware wear noticeably quicker than inland sites because of the added salt content in the air.",
          "A short routine two or three times a year, checking seals before peak summer heat and lubricating hinges and tracks, keeps most issues from turning into a service call.",
        ],
        bullets: [
          "Track and hinge cleaning every few months in dust-heavy areas",
          "Seal inspection ahead of summer, when gaskets are under the most stress",
          "Hardware lubrication twice yearly on sliding and hinged formats",
          "Coastal installations benefit from more frequent gasket checks",
        ],
      },
    ],
    worksWellWith: {
      items: [
        {
          label: "Aluminium Doors",
          blurb: "Matched profile families for a consistent elevation.",
          href: "/catalogue/aluminium-doors",
        },
        {
          label: "Skylights & Rooflights",
          blurb: "Daylight drawn straight into the room below",
          href: "/catalogue/skylights",
        },
        {
          label: "Insect Screens",
          blurb: "Integrated channels that sit flush with the frame.",
          href: "/catalogue/insect-screens",
        },
      ],
    },
    faqLevel: 5,
    faqs: [
      {
        q: "Are Schüco aluminium windows suitable for coastal UAE properties?",
        a: "Yes, with the right specification. Coastal sites see faster hardware wear and gasket degradation from salt content in the air, so we typically recommend higher corrosion-resistant fittings and a slightly tighter maintenance schedule than an equivalent inland installation would need.",
      },
      {
        q: "How do Schüco aluminium windows compare with Cortizo on thermal performance?",
        a: "Both brands offer thermally broken profiles built to European certification standards, and the practical difference at UAE ambient temperatures comes down to the specific profile depth and glazing pairing chosen for the project rather than the badge on the frame. We spec each against the actual elevation exposure rather than assuming one brand universally outperforms the other.",
      },
      {
        q: "What opening types are available in the Schüco aluminium windows range?",
        a: "Casement, tilt-turn and sliding formats are all available, and most villa projects end up mixing formats room by room, casement where ventilation matters most, sliding on balconies and tight floor plans, tilt-turn where a dual cleaning-and-ventilation function is useful.",
      },
      {
        q: "Do Schüco aluminium windows need a different spec for commercial buildings?",
        a: "Commercial installations typically call for higher cycle-rated hardware given daily footfall, plus fire-rated glazing configurations where the building code requires them. Residential specification tends to prioritise sightline and finish instead, so the two briefs diverge even on the same underlying profile family.",
      },
    ],
    whySwiftrooms: {
      eyebrow: "WHY SWIFTROOMS",
      heading: "A Local Team Working From Genuine Profile Stock",
      level: 5,
      paragraphs: [
        "We've fitted windows across enough Dubai villas, Abu Dhabi developments and Sharjah renovations to know which specs actually hold up after a few summers and which ones only look good on a datasheet.",
        "As an authorised partner working with genuine Schüco, Cortizo, Vetro and Gulf Extrusions stock, we're not quoting off a grey-market equivalent, and every warranty we issue carries real factory backing behind it.",
      ],
      bullets: [
        "Authorised access to genuine Schüco aluminium windows profile stock",
        "In-house technical support for architects and consultants",
        "Free site survey and written specification within 24 hours",
        "Track record across villas, towers and commercial fit-outs UAE-wide",
      ],
    },
    cta: {
      heading: "Free Quote & Site Visit Within 24 Hours",
      body: ["No obligation. Professional survey. Written specification."],
    },
  },
  "reynaers-aluminium-systems": {
    name: "Reynaers Aluminium Systems",
    metaTitle: "Reynaers Aluminium Systems Dubai & UAE",
    metaDescription:
      "Reynaers aluminium systems for UAE villas and towers, windows, doors, sliding walls and curtain wall. Get a free quote and free site visit today.",
    hero: {
      h1: "Reynaers Aluminium Systems",
      tagline: "Belgian engineering, named by system.",
      description:
        "Reynaers spans windows, doors, sliding walls and curtain wall on one Belgian platform, MasterLine 8, CS 77, CP 155, CW 50, each engineered to its own insulation and security rating.",
    },
    blocks: [
      {
        eyebrow: "BELGIAN ENGINEERING. RECHECKED FOR THIS CLIMATE.",
        heading: "Why Reynaers Aluminium Systems Perform in Dubai's Extreme Heat?",
        level: 2,
        paragraphs: [
          "Reynaers builds to some of the tightest tolerances in Europe, but a profile designed and tested for a Belgian winter doesn't automatically know what to do with a Dubai summer. The thermal break, the gasket compound, even the powder coat, all of it gets re-checked against Gulf conditions before we'll put it on a job here.",
          "That's really the difference between a UAE villa or tower. A frame that's only ever been proven against European data might look right on day one, but it's the recalibration for 48°C heat, year after year, that decides whether it still seals and holds its shape a decade in.",
        ],
        bullets: [],
      },
      {
        eyebrow: "SYSTEM RANGE",
        heading: "Not One Product — A Range Built for Different Rooms",
        level: 2,
        paragraphs: [
          "Reynaers doesn't make one window and call it done. The range runs from CS 68 through CS 77 up to the higher-insulation CS 86-HI, each a step up in how well it keeps heat, noise and draughts out, alongside the MasterLine 8 platform for larger openings and heavier glass that still keeps a slim, modern frame line.",
          "Picking between them isn't really about budget first, it's about what the room needs. A shaded bedroom window doesn't need the same spec as a west-facing living room wall taking direct afternoon sun, and putting the top-tier system everywhere just adds cost without adding comfort.",
        ],
        bullets: [
          "CS 68 and CS 77 suit the majority of standard home and apartment windows",
          "CS 86-HI is the step up for sun-facing rooms or where quiet matters most",
          "MasterLine 8 handles bigger openings and heavier glass without a bulky frame",
          "Every tier is independently tested, not a marketing label on the same profile",
        ],
      },
      {
        eyebrow: "WHAT THE NUMBERS MEAN",
        heading: "Reading a Thermal Rating Without the Jargon",
        level: 3,
        paragraphs: [
          "\"Excellent insulation\" doesn't mean much without a number behind it, so here's what the number actually says. The MasterLine 8 platform, built around a 40mm thermal break (a strip inside the frame that stops heat conducting straight through the metal), achieves a Uf value of around 1.9 W/m²K, in plain terms, that's a well-insulated frame that shouldn't feel warm to the touch even in direct sun.",
          "Step up to CS 86-HI and that figure drops further, into territory that starts to matter for anyone chasing a genuinely low cooling bill, not just a slightly better one. These numbers are tested in Europe first, which is exactly why we recheck them against local glazing and orientation before quoting a figure a client, whether that's a developer or a family renovating a villa, can actually rely on.",
        ],
        bullets: [
          "MasterLine 8: strong thermal performance, frame stays cool even in direct sun",
          "CS 86-HI: the option worth asking about if your priority is lower AC running costs",
          "The final in-room performance depends on the glass paired with the frame, not the frame alone",
          "We check the published figures against your actual site before quoting a number",
        ],
      },
      {
        eyebrow: "WIDE OPENINGS",
        heading: "Reynaers Aluminium Systems: CP 130 & CP 155 Sliding Door Solutions",
        level: 3,
        paragraphs: [
          "For a wide glass wall onto a garden or pool deck rather than a standard window, Reynaers moves into its CP range. CP 130 suits a flush, step-free threshold, with a corner option that drops the usual structural post so the view stays unbroken.",
          "CP 155 goes further: a lift-slide door that raises the panel off its seal before moving, rated for glass up to roughly 400kg, the weight a large, well-insulated garden door reaches in practice. Years on, it should still glide with one hand.",
        ],
        bullets: [
          "CP 130: flush threshold, optional open corner",
          "CP 155: lift-slide, panels up to ~400kg",
          "Lift action means less seal wear over time",
          "Both pair with CS 77 and MasterLine 8 windows",
        ],
      },
      {
        eyebrow: "FOR TALLER BUILDINGS",
        heading: "CW 50 to CW 86 Across a Whole Facade",
        level: 3,
        paragraphs: [
          "On towers and larger developments, the same engineering scales up into curtain wall, the continuous glass grid you see running down the face of a building. CW 50 covers standard commercial and mixed-use facades, while CW 86 is built for elevations under more structural or thermal load, bigger spans, higher wind exposure, buildings where the glass itself needs to work harder.",
          "Using windows, doors and curtain walls from the same manufacturer isn't just a procurement convenience, it keeps the frame depth and finish consistent where a building's lower windows meet the glazed tower above, a detail that's genuinely visible from street level on mixed-use developments across Dubai.",
        ],
        bullets: [
          "CW 50 for standard commercial and mixed-use facades",
          "CW 86 for larger spans and higher-exposure elevations",
          "Matched frame depth against Reynaers windows and doors on the same building",
          "Keeps podium and tower elevations looking like one building, not two",
        ],
      },
      {
        eyebrow: "SECURITY",
        heading: "What \"RC2\" Actually Means for Peace of Mind",
        level: 4,
        paragraphs: [
          "Every core Reynaers aluminium systems window range carries a minimum RC2 burglar-resistance rating as standard, an independent test rating meaning the frame, glass and lock have been tried and tested together as a break-in-resistant unit, not just individually rated on paper. CS 77 goes further, with RC3 and even bullet-resistant options available, more relevant to specific commercial or ground-floor briefs than a typical family home.",
          "The rating only holds if the glass and hardware actually installed match what was tested. A frame rated RC2 fitted with ordinary glass isn't really RC2 anymore, so it's worth asking your supplier to confirm the full configuration in writing, whether you're a homeowner securing a ground-floor opening or a developer signing off a building-wide spec.",
        ],
        bullets: [
          "RC2 as standard across MasterLine 8, SL 38, CS 68 and CS 77",
          "RC3 and bullet-resistant options available on CS 77 where needed",
          "The rating covers frame, glass and lock together, not any single part",
          "Ask for written confirmation the installed glass matches the tested rating",
        ],
      },
      {
        eyebrow: "LOOK AND FINISH",
        heading: "Colour That Still Looks New in a Decade",
        level: 4,
        paragraphs: [
          "Colour choice runs through the same RAL and anodised options common across premium European brands, but the coating quality is what decides whether a frame still looks sharp after ten Gulf summers or starts to chalk and fade within two. Anodised finishes tend to hold up marginally better under constant sun, though most people choose based on the look they want rather than longevity alone, both hold up well when specified properly.",
          "Dual-tone frames, a different colour inside to outside, are increasingly popular on villa projects where the interior palette doesn't match the building's exterior material scheme.",
        ],
        bullets: [
          "Full RAL colour range through Qualicoat-standard powder coating",
          "Anodised finishes for slightly stronger long-term colour retention",
          "Dual-tone options for a different interior and exterior colour",
          "Finish chosen per elevation, since a shaded wall and a sun-facing one age differently",
        ],
      },
      {
        eyebrow: "BUILT FOR EUROPE, RECHECKED FOR HERE",
        heading: "Why We Don't Just Pass On the Catalogue Numbers",
        level: 4,
        paragraphs: [
          "Reynaers tests its published performance data primarily against European conditions, which is standard across almost every premium manufacturer, not a shortcoming unique to this brand. The gap that actually matters is between that catalogue figure and what happens once a frame sits through a full Dubai or Abu Dhabi summer, when a dark-coloured frame in direct sun runs well past the temperatures the original testing accounted for.",
          "We recheck thermal performance, gasket material and wind load data against the actual site before finalising any quote, rather than handing over the European number as-is. That extra step is really the difference between a generic reseller and a team that's actually specifying for this climate.",
        ],
        bullets: [
          "European thermal and wind figures cross-checked against UAE site conditions",
          "Gasket material reviewed for sustained heat and low humidity, not just European swings",
          "Wind load recalculated for coastal or high-rise sites where it matters",
          "This check is included as standard, not billed as an extra",
        ],
      },
    ],
    worksWellWith: {
      items: [
        {
          label: "Aluminium Doors",
          blurb: "Matched profile families for a consistent elevation.",
          href: "/catalogue/aluminium-doors",
        },
        {
          label: "Curtain Wall Systems",
          blurb: "Continuous glazing on primary building faces.",
          href: "/catalogue/curtain-wall",
        },
        {
          label: "Skylights & Rooflights",
          blurb: "Daylight drawn straight into the room below.",
          href: "/catalogue/skylights",
        },
      ],
    },
    faqLevel: 4,
    faqs: [
      {
        q: "What's the difference between CS 77 and MasterLine 8?",
        a: "CS 77 is the more established window range, tested across a wide set of European standards and available up to RC3 with bullet-resistant options. MasterLine 8 is built for larger openings and heavier glass while keeping a slim frame line, so the choice usually comes down to the size of the opening and the glass weight rather than one simply being better than the other.",
      },
      {
        q: "Can I get matching windows and sliding doors from Reynaers aluminium systems?",
        a: "Yes, that's one of the real advantages of the platform. CP 130 and CP 155 sliding and lift-slide doors are engineered to connect directly with CS 77 and MasterLine 8 windows, so the frame depth and look stay consistent where a window wall meets a sliding door on the same elevation.",
      },
      {
        q: "Is CP 155 strong enough for a really large garden sliding door?",
        a: "Yes. The CP 155 lift-slide mechanism is rated for glazed panels up to roughly 400kg, which covers most large residential garden openings, including heavier acoustic or triple-glazed builds where the panel weight adds up quickly.",
      },
      {
        q: "Do Reynaers systems need adjusting for UAE heat, or is the European spec good enough?",
        a: "The published European figures are a starting point, not a finished UAE spec. We recheck thermal performance, gasket material and wind load against the actual site and orientation before finalising a quote, since a system tested mainly for European conditions doesn't automatically account for sustained 48°C exterior heat.",
      },
    ],
    whySwiftrooms: {
      eyebrow: "WHY SWIFTROOMS",
      heading: "A Local Team Fluent in the Full Range",
      level: 5,
      paragraphs: [
        "We don't quote \"Reynaers\" as one generic line item, we work in the actual systems, matched to what a specific room, elevation or building actually needs.",
        "As an authorised partner working from genuine profile stock, every installation carries factory-backed certification rather than a general warranty added on afterward.",
      ],
      bullets: [
        "Authorised access to the full Reynaers aluminium systems range, window through curtain wall",
        "Site-specific technical review against UAE heat, wind and coastal exposure",
        "Free site survey and written specification within 24 hours",
        "Track record across villas, towers and commercial fit-outs UAE-wide",
      ],
    },
    cta: {
      heading: "Free Quote & Site Visit Within 24 Hours",
      body: ["No obligation. Professional survey. Written specification."],
    },
  },
  "cortizo-aluminium-systems": {
    name: "Cortizo Systems",
    metaTitle: "Cortizo Aluminium Doors & Windows in Dubai",
    metaDescription:
      "Cortizo aluminium doors and windows by Swiftrooms for Dubai villas & penthouses, slim profiles, bi-fold doors and modern glazing systems. Get a free quote.",
    hero: { h1: "Cortizo Systems", tagline: "Spanish engineering, proven in heat.", description:
        "Cortizo covers windows, doors, sliding walls and curtain wall on one Spanish platform, Cor Vision, Cor 70, TP52, Alu-Steel, each built for a different opening and a different job." },
    blocks: [
      {
        eyebrow: "SPANISH ENGINEERING. TESTED WHERE IT MATTERS MOST.",
        heading: "Why Cortizo Aluminium Systems Perform in Dubai's Extreme Heat?",
        level: 2,
        paragraphs: [
          "Cortizo is manufactured in Galicia, in northern Spain, but the profiles that matter most to a Gulf project aren't the ones built for a mild Atlantic coast, they're the ones from Cortizo's own southern Spain and North Africa lines, climates already closer to what a Dubai facade actually sees. Even so, nothing gets specified here on catalogue faith alone.",
          "The thermal break, the gasket rubber, the powder coat batch, all of it gets checked against actual Gulf exposure before it goes on a job. A frame that performs well in Seville doesn't automatically perform the same way after five summers on a west-facing tower in Business Bay, and that gap is exactly what a proper technical review is meant to catch.",
        ],
        bullets: [],
      },
      {
        eyebrow: "SYSTEM RANGE",
        heading: "One Platform, Built for Different Openings",
        level: 2,
        paragraphs: [
          "Cortizo doesn't try to sell a single frame for every opening in a building. The window range runs from Cor 70 Hidden Sash through the Industrial profile and the Aluminium Casement line, up to Alu-Steel Classic & Modern for anyone after the narrow, heritage steel look without the maintenance steel actually needs. Sliding walls sit on the Cor Vision platform, and taller buildings move onto the TP52 curtain wall.",
          "The right system isn't really about which one looks best in a brochure, it's about what the opening is doing. A north-facing bedroom window and a full-height sliding wall onto a pool deck are not the same engineering problem, and pricing both the same way usually means one of them is wrong.",
        ],
        bullets: [
          "Cor 70 Hidden Sash and Casement suit most standard apartment and villa windows",
          "Cor 70 Industrial gives a slim, steel-look frame for a more architectural elevation",
          "Alu-Steel Classic & Modern replicates true steel sightlines in maintenance-free aluminium",
          "Cor Vision and TP52 scale up for larger openings and full building facades",
        ],
      },
      {
        eyebrow: "WHAT THE NUMBERS MEAN",
        heading: "Reading a Thermal Rating Without the Jargon",
        level: 3,
        paragraphs: [
          "A \"thermally broken\" frame just means there's a strip of insulating material inside the profile, separating the outer face from the inner one so heat can't conduct straight through the aluminium. On Cortizo's window ranges that break typically delivers a Uf value in the region of 1.6 to 2.2 W/m²K depending on the specific system and glazing pocket, in plain terms, a frame that shouldn't feel warm to the touch even after hours of direct sun.",
          "The Cor 70 range and Alu-Steel line both use a widened thermal chamber to hold that figure down, but the number on a spec sheet is only useful once it's been checked against the glass actually going in the opening and the direction that opening faces.",
        ],
        bullets: [
          "Cor 70: wide thermal chamber keeps the frame face notably cooler than the exterior air",
          "Alu-Steel: matches the sightline of real steel while holding a proper insulation value",
          "The final performance in the room depends on the glass paired with the frame",
          "Published figures are re-checked against your actual orientation before we quote",
        ],
      },
      {
        eyebrow: "WIDE OPENINGS",
        heading: "Cortizo Cor Vision: Lift & Slide Door Solutions",
        level: 3,
        paragraphs: [
          "For a full glass wall rather than a standard window, Cortizo's answer is the Cor Vision range. Cor Vision 4600 Lift & Slide is the standard configuration for garden and terrace openings, a slim-sightline panel that lifts fractionally off its seal before sliding, so there's no dragging on the gasket and no stiffness creeping in after a few years of daily use.",
          "Cor Vision 4700 Lift & Slide steps up for larger, heavier panels, and Cor Vision Plus is built where the priority is the narrowest possible sightline and the largest single pane of glass an opening can take.",
        ],
        bullets: [
          "Cor Vision 4600: the standard lift-slide for most garden and terrace doors",
          "Cor Vision 4700: heavier-duty option for larger panels and taller openings",
          "Cor Vision Plus: minimal sightline for the largest single glass panels",
          "Lift action on all three means far less seal wear than a standard slider",
        ],
      },
      {
        eyebrow: "FOR TALLER BUILDINGS",
        heading: "TP52 Across a Whole Facade",
        level: 3,
        paragraphs: [
          "On towers and larger mixed-use developments, the same engineering scales into TP52 curtain wall, the continuous glazed grid running down a building's face. TP52 covers standard stick and unitised facade work, and TP52 Equity is the variant built where a project needs a flush, structurally glazed finish with the mullions barely visible from street level.",
          "Running windows, doors and curtain wall from one manufacturer isn't just easier to procure, it keeps frame depth and finish consistent at the exact point where a building's podium windows meet the glazed tower above.",
        ],
        bullets: [
          "TP52 for standard commercial and mixed-use curtain wall facades",
          "TP52 Equity for a flush, structurally glazed finish with minimal visible mullion",
          "Matched frame depth against Cor Vision and Cor 70 on the same building",
          "Keeps podium and tower elevations reading as one consistent facade",
        ],
      },
      {
        eyebrow: "SECURITY",
        heading: "What a Tested Locking Cycle Actually Means",
        level: 4,
        paragraphs: [
          "Every Cortizo window and door range is built around a multi-point locking cycle engineered into the profile itself, not bolted on as an afterthought, so the frame, glass pocket and hardware are designed to work as one resisting unit rather than three separately rated parts. The front entrance door range and Cor 70 Door both offer higher security hardware options where a ground-floor opening or a commercial entrance calls for it.",
          "As with any rated system, the certification only holds if the glass and hardware actually installed on site match what was specified.",
        ],
        bullets: [
          "Multi-point locking engineered into the frame across the core window and door ranges",
          "Higher-security hardware available on Cor 70 Door and the front entrance range",
          "Rating only holds when installed glass and hardware match the tested configuration",
          "Ask for written confirmation of the full specified configuration",
        ],
      },
      {
        eyebrow: "LOOK AND FINISH",
        heading: "Colour and Sightline That Hold Up in the Sun",
        level: 4,
        paragraphs: [
          "Cortizo's finish options run through the standard RAL palette and anodised options seen across most premium European brands, but the coating quality is what decides whether a frame still looks sharp after a decade of Gulf sun or starts to chalk within two or three summers. Anodised finishes generally hold their colour marginally better under constant UV, though the choice usually comes down to the look a project wants rather than longevity alone.",
          "The Alu-Steel range in particular is chosen for its sightline as much as its colour, a genuinely narrow steel-style profile that reads as heritage industrial without the rust, warping or upkeep real steel windows bring in a coastal, high-humidity climate.",
        ],
        bullets: [
          "Full RAL colour range through Qualicoat-standard powder coating",
          "Anodised finishes for slightly stronger long-term colour retention",
          "Alu-Steel profile gives a true narrow steel sightline without steel's maintenance",
          "Finish specified per elevation, since shaded and sun-facing walls age differently",
        ],
      },
      {
        eyebrow: "BUILT FOR SPAIN, RECHECKED FOR UAE",
        heading: "Why We Don't Just Pass On the Catalogue Numbers",
        level: 4,
        paragraphs: [
          "Cortizo tests much of its range against southern European and North African conditions, which puts it closer to Gulf heat than most northern European manufacturers to begin with, but \"closer\" still isn't the same as tested here. A dark-coloured frame on a west-facing tower in direct Dubai sun runs past the surface temperatures most catalogue data accounts for, even Cortizo's warmer-climate figures.",
          "We recheck thermal performance, gasket compound and wind load data against the actual site before any quote goes out, rather than handing over the Spanish number as-is.",
        ],
        bullets: [
          "Southern European and North African thermal data cross-checked against UAE site conditions",
          "Gasket compound reviewed for sustained heat and low humidity, not seasonal swings",
          "Wind load recalculated for coastal or high-rise sites where exposure is higher",
          "This check is included as standard, not billed as an extra",
        ],
      },
    ],
    worksWellWith: {
      items: [
        { label: "Aluminium Doors", blurb: "Matched profile families for a consistent elevation.", href: "/catalogue/aluminium-doors" },
        { label: "Curtain Wall Systems", blurb: "Continuous glazing on primary building faces.", href: "/catalogue/curtain-wall" },
        { label: "Garden Rooms & Skylights", blurb: "Extending living space with daylight brought straight in.", href: "/catalogue/garden-rooms" },
      ],
    },
    faqLevel: 4,
    faqs: [
        {
          q: "What's the difference between Cor Vision 4600 and Cor Vision 4700?",
          a: "Cor Vision 4600 is the standard lift-slide configuration and covers most residential garden and terrace doors. Cor Vision 4700 is built for larger or heavier panels, so the choice generally comes down to the size of the opening and the glass weight involved rather than one being a straightforward upgrade of the other.",
        },
        {
          q: "Can I get matching windows and sliding doors from Cortizo?",
          a: "Yes. Cor Vision sliding and lift-slide doors are designed to sit alongside the Cor 70 window range, so frame depth and finish stay consistent where a window wall meets a sliding door on the same elevation.",
        },
        {
          q: "Is the Alu-Steel range actually as narrow as real steel windows?",
          a: "Very close. The Alu-Steel Classic & Modern profile is built specifically to replicate a true steel sightline, which is why it's often chosen for heritage-style or industrial-look projects, without the rust and upkeep steel brings in a coastal climate.",
        },
        {
          q: "Do Cortizo systems need adjusting for UAE heat, or is the Spanish spec good enough?",
          a: "Cortizo's warmer-climate data is a stronger starting point than most northern European brands, but it's still a starting point, not a finished UAE spec. We recheck thermal performance, gasket material and wind load against the actual site and orientation before finalising a quote.",
        },
    ],
    whySwiftrooms: {
      eyebrow: "WHY SWIFTROOMS",
      heading: "A Local Team Fluent in the Full Range",
      level: 5,
      paragraphs: [
        "We don't quote \"Cortizo\" as one generic line item, we work in the actual systems, matched to what a specific room, elevation or building actually needs.",
        "As an authorised partner working from genuine profile stock, every installation carries factory-backed certification rather than a general warranty added on afterward.",
      ],
      bullets: [
        "Authorised access to the full Cortizo range, window through curtain wall",
        "Site-specific technical review against UAE heat, wind and coastal exposure",
        "Free site survey and written specification within 24 hours",
        "Track record across villas, towers and commercial fit-outs UAE-wide",
      ],
    },
    cta: {
      heading: "Free Quote & Site Visit Within 24 Hours",
      body: ["No obligation. Professional survey. Written specification."],
    },
  },
  "vetro-slim-aluminium-windows": {
    name: "Vetro",
    metaTitle: "Vetro Slim Aluminium Windows in Dubai",
    metaDescription:
      "15mm Vetro slim aluminium windows by Swiftrooms for Dubai villas & apartments, minimal sightlines, maximum light. Get a free quote and site visit today.",
    hero: { h1: "Vetro", tagline: "Minimal sightlines. Maximum light.", description:
        "Vetro is Vetromax Group’s ultra-slim casement and window range, engineered around a 15mm sightline to bring more glass and natural light to contemporary UAE homes." },
    blocks: [
      {
        eyebrow: "WHY THE SIGHTLINE MATTERS MORE THAN THE SPEC SHEET",
        heading: "Why Vetro Performs Differently on a Dubai Elevation",
        level: 2,
        paragraphs: [
          "Most aluminium window brands compete on thermal figures first and frame width second. Vetro flips that order. The whole system is built around a 15mm visible sightline, the narrowest strip of aluminium you'll see anywhere on a residential opening, so what a client actually notices isn't a number on a data sheet, it's how little frame stands between them and the view.",
          "That doesn't mean performance is an afterthought. A frame this slim has to work harder to hold its shape and seal properly under a Gulf sun, so every batch is checked against sustained heat and dust exposure before it goes anywhere near a villa or apartment facade, not just tested once in a Vetromax lab and assumed to hold.",
        ],
        bullets: [],
      },
      {
        eyebrow: "SYSTEM RANGE",
        heading: "One Idea, Applied Across Every Opening Type",
        level: 2,
        paragraphs: [
          "Vetro isn't a single product wearing different names, it's the same slim-frame engineering applied to whichever opening a room actually needs. A fixed picture window and an operable casement don't behave the same way structurally, so each configuration is engineered for its own opening rather than adapted from one base profile.",
        ],
        bullets: [
          "Casement Windows for the standard operable window, side or top-hung, with the frame nearly disappearing at full close",
          "Tilt & Turn for openings that need both a secure night-vent tilt position and a full clean-access swing",
          "Fixed Lights for uninterrupted glass where ventilation isn't needed, often paired either side of an operable unit",
          "Slim Frame Systems tie all three together so a mixed elevation reads as one continuous sightline, not three different products",
        ],
      },
      {
        eyebrow: "WHAT \"15MM\" ACTUALLY MEANS",
        heading: "Reading a Sightline Number Without the Jargon",
        level: 3,
        paragraphs: [
          "A window's sightline is simply how much aluminium frame is visible once the unit is installed and closed, the strip your eye actually registers around and between panes of glass. Most standard residential aluminium windows in this market run a visible sightline somewhere between 40mm and 60mm. Vetro's casement system holds that down to around 15mm on the interlock, close to a third of what's typical.",
          "The practical effect shows up most on a multi-pane elevation, a row of windows across a living room wall, where a wider frame stacks up fast and starts reading as a grid of metal rather than a wall of glass. Narrow it down and the same wall reads as continuous glazing with barely a break in the view.",
        ],
        bullets: [
          "15mm interlock sightline on the core casement range, notably narrower than standard residential systems",
          "The benefit compounds on multi-pane walls, where frame width would otherwise stack across the elevation",
          "A slimmer frame still needs a proper thermal break, it isn't a trade-off Vetro accepts",
          "Glass choice and orientation still decide final in-room comfort, same as any window system",
        ],
      },
      {
        eyebrow: "TILT & TURN",
        heading: "One Handle, Two Very Different Functions",
        level: 3,
        paragraphs: [
          "Tilt & Turn is worth calling out on its own because it solves two separate problems most single-function windows can't. Turned one way, the sash tilts inward from the top for secure, controlled ventilation, safe to leave open overnight without it being an easy entry point.",
          "Turned the other way, the same sash swings fully open on its side hinge for cleaning both faces of the glass from inside the room. On upper floors and towers, where getting outside to clean a window isn't realistic, that second function alone tends to be the deciding factor over a standard casement.",
        ],
        bullets: [
          "Tilt position gives secure, restricted ventilation without a fully open sash",
          "Turn position swings the sash open fully for interior-side cleaning of both glass faces",
          "One handle, one lock cycle, no separate hardware to specify or maintain",
          "Particularly relevant above ground floor, where full external access isn't practical",
        ],
      },
      {
        eyebrow: "FIXED LIGHTS AND SLIM FRAME SYSTEMS",
        heading: "Where the Frame Should Simply Disappear",
        level: 3,
        paragraphs: [
          "Not every opening needs to operate. A fixed light, a pane of glass set permanently into the frame with no moving parts, is often the right call anywhere ventilation is already handled elsewhere on the elevation, a stairwell, a high-level feature window, or a picture window flanking a Tilt & Turn unit.",
          "Because a fixed light has no hardware or hinge to accommodate, it can run an even narrower sightline than an operable window, and that's where Vetro's Slim Frame System comes in, tying fixed and operable units together into one uninterrupted run rather than a mismatched mix of frame widths across the same wall.",
        ],
        bullets: [
          "Fixed Lights run the narrowest sightline in the range, with no hinge or hardware to build around",
          "Commonly paired either side of an operable Casement or Tilt & Turn unit",
          "Slim Frame Systems align fixed and operable sightlines so a mixed elevation looks continuous",
          "Ideal for stairwells, double-height glazing and feature walls where the frame should stay invisible",
        ],
      },
      {
        eyebrow: "SECURITY",
        heading: "Slim Doesn't Mean Weaker",
        level: 4,
        paragraphs: [
          "A narrower frame naturally raises the question of whether it compromises strength or security, and it's a fair one to ask. Vetro's profile geometry is engineered specifically to hold its structural rigidity at 15mm, reinforced internally rather than relying on visible frame bulk, with multi-point locking built into the Casement and Tilt & Turn ranges as standard.",
          "As with any window system, the real-world security depends on the glass and hardware installed matching what was specified, so it's worth confirming the full configuration in writing on any project where ground-floor or accessible openings are involved.",
        ],
        bullets: [
          "Internal reinforcement holds structural rigidity despite the narrow visible frame",
          "Multi-point locking standard across Casement and Tilt & Turn configurations",
          "Security performance depends on the installed glass matching the specified configuration",
          "Recommended to confirm the full hardware and glass spec in writing for accessible openings",
        ],
      },
      {
        eyebrow: "LOOK AND FINISH",
        heading: "A Sightline That Should Stay Sharp, Not Just Narrow",
        level: 4,
        paragraphs: [
          "A slim frame draws more attention to its finish than a bulkier one would, there's simply less metal to hide an uneven powder coat or a fading anodised layer behind. Vetro's finish options run through the standard RAL colour range and anodised tones, with the coating quality checked specifically for how it performs on a narrower profile under constant Gulf sun.",
          "Dark colourways are increasingly popular on the slim casement range precisely because the frame reads as a fine line rather than a heavy dark border, but darker finishes do run hotter in direct sun, which is exactly the kind of detail worth flagging at spec stage rather than after installation.",
        ],
        bullets: [
          "Full RAL colour range through Qualicoat-standard powder coating",
          "Anodised finishes available for a metallic, low-maintenance sightline",
          "Dark colourways read as a fine line rather than a heavy border on this profile",
          "Orientation and colour reviewed together, since darker frames run hotter in direct sun",
        ],
      },
      {
        eyebrow: "BUILT SLIM, RECHECKED FOR HEAT",
        heading: "Why a Narrow Frame Needs Extra Scrutiny Here, Not Less",
        level: 4,
        paragraphs: [
          "A wider aluminium frame has more mass to absorb thermal movement, expansion and contraction as it heats and cools through a Gulf day. A slimmer frame has less of that buffer built in, which means the thermal break, gasket compound and glazing bead all need closer scrutiny on a 15mm system than they would on a standard 50mm-plus frame.",
          "That's the review we run before any Vetro system goes to quote, checking how the specific profile, glass thickness and orientation combination behaves under sustained heat rather than treating \"slim\" and \"standard\" frames as needing the same level of check.",
        ],
        bullets: [
          "Narrower profiles have less thermal mass, so gasket and glazing bead performance is checked more closely, not less",
          "Thermal movement reviewed against the specific glass thickness being installed",
          "Orientation and colour reviewed together, since dark finishes on slim frames run hottest",
          "This check is included as standard on every Vetro quote, not billed as an extra",
        ],
      },
      {
        eyebrow: "GLAZING OPTIONS",
        heading: "The Glass Completes the System",
        level: 4,
        paragraphs: [
          "A slim frame only delivers its full visual and comfort benefits when the glass is specified to suit the opening. Vetro can be configured with glazing options selected around the building’s orientation, exposure and performance requirements, rather than treating every elevation the same.",
          "Large west-facing windows, shaded openings and high-level feature glazing can each require a different approach. The result is a window specification that balances the 15mm sightline with solar control, thermal performance and everyday comfort.",
        ],
        bullets: [
          "Glass specification reviewed alongside orientation and exposure",
          "Solar-control options considered for high-heat elevations",
          "Glass thickness matched to the selected Vetro configuration",
          "Large glazed areas assessed as part of the overall elevation design",
        ],
      },
    ],
    faqLevel: 5,
    faqs: [
        {
          q: "Is a 15mm sightline actually stronger, or just visually thinner?",
          a: "The sightline is a visual measurement, not a strength rating on its own, Vetro's profile is internally reinforced to hold structural rigidity at that width, with multi-point locking built in as standard, so it isn't a trade-off between narrow and secure.",
        },
        {
          q: "Can Vetro windows handle direct west or south sun in Dubai?",
          a: "Yes, but a slimmer frame has less thermal mass than a standard-width profile, so we check gasket compound and thermal movement specifically against the glass and orientation before quoting, rather than assuming the same spec fits every elevation.",
        },
        {
          q: "What's the difference between Tilt & Turn and a standard Casement?",
          a: "A Casement opens one way, on a hinge. Tilt & Turn does both, a secure inward tilt for ventilation and a full swing-open turn for cleaning both glass faces from inside, which matters most above ground floor where external access isn't practical.",
        },
        {
          q: "Can Vetro's slim frames match up with other window or door systems on the same building?",
          a: "Yes, the Slim Frame System is built to align fixed and operable sightlines within the Vetro range, and we detail the transition where Vetro windows meet doors or curtain wall from another system so the elevation still reads as one consistent line.",
        },
    ],
    whySwiftrooms: {
      eyebrow: "WHY SWIFTROOMS",
      heading: "A Local Team Fluent in the Full Range",
      level: 5,
      paragraphs: [
        "We don't quote \"Vetro\" as a generic slim window, we specify the exact configuration, Casement, Tilt & Turn or Fixed Light, matched to what a specific opening actually needs to do.",
        "As an authorised partner working from genuine profile stock, every installation carries factory-backed certification rather than a general warranty added on afterward.",
      ],
      bullets: [
        "Authorised access to the full Vetro slim-sightline range",
        "Site-specific technical review against UAE heat, orientation and glass thickness",
        "Free site survey and written specification within 24 hours",
        "Track record across villas, towers and commercial fit-outs UAE-wide",
      ],
    },
    cta: {
      heading: "Free Quote & Site Visit Within 24 Hours",
      body: ["No obligation. Professional survey. Written specification."],
    },
  },
  "vetromax-frameless-glazing": {
    name: "Vetromax",
    metaTitle: "Vetromax Frameless Glazing in Dubai",
    metaDescription:
      "Frameless Vetromax glazing by Swiftrooms for Dubai villas & penthouses, Pivot Doors, uPVC windows and VF35 Facade systems. Get a free quote today.",
    hero: { h1: "Vetromax", tagline: "Frameless glass. Full architecture.", description:
        "Vetromax brings frameless and ultra-slim glazing to contemporary UAE architecture, combining minimal visual framing with expansive glass for residential and commercial spaces." },
    blocks: [
      {
        eyebrow: "WHY FRAMELESS GLAZING NEEDS MORE ENGINEERING, NOT LESS",
        heading: "Why Vetromax Performs Differently on a UAE Elevation",
        level: 2,
        paragraphs: [
          "The instinct with \"frameless\" glazing is to assume there's simply less to engineer, less metal, less complexity. It's the opposite. Every load a visible frame would normally carry, wind pressure, glass weight, thermal movement, security, still has to go somewhere, it just gets hidden inside a slimmer channel or a single pivot point instead of spread across a wide sightline.",
          "That's the actual specialism at Vetromax, systems built to disappear visually while still carrying full structural load, across glass, aluminium and uPVC lines. Getting that combination right in a Gulf climate, where large glazed panels sit under sustained direct heat for months at a time, is where the engineering earns its keep, not just in how the finished opening looks.",
        ],
        bullets: [],
      },
      {
        eyebrow: "SYSTEM RANGE",
        heading: "Three Product Lines, One Design Language",
        level: 2,
        paragraphs: [
          "Vetromax isn't a single glazing type stretched across every opening, it's three distinct product families that share a common thread: minimal visible frame, maximum glass. Pivot Doors handle a building's statement entrance. The uPVC Casement Suite and uPVC Sliding Window & Door bring the same slim-frame philosophy to standard residential openings at a different price point. VF35 Facade scales the whole idea up to a full building elevation.",
          "Picking between them comes down to the opening's role in the building, not simply its size. An entrance door that only opens a handful of times a day can justify a pivot mechanism a standard sliding window never would, while a full residential window schedule is usually better served by the uPVC range's balance of insulation and cost.",
        ],
        bullets: [
          "Vetromax Pivot Door for a building's primary entrance, where a single dramatic opening sets the tone",
          "uPVC Casement Suite for standard residential windows needing strong insulation at accessible cost",
          "uPVC Sliding Window & Door for openings that need to slide rather than swing, without losing thermal performance",
          "VF35 Facade for scaling the same slim-frame language across a full building elevation",
        ],
      },
      {
        eyebrow: "THE PIVOT DOOR",
        heading: "An Entrance That Moves Differently",
        level: 3,
        paragraphs: [
          "A pivot door creates a distinctive entrance by rotating around a concealed pivot point rather than hinges fixed to one edge. This allows larger, heavier door panels while maintaining smooth, controlled movement. The clean geometry also removes the visible hinge line associated with conventional doors, giving the entrance a more architectural appearance.",
          "For UAE villas and premium developments, pivot doors work particularly well where generous proportions and a strong first impression are priorities. Concealed hardware keeps the design clean while reducing exposed components that face constant heat and dust.",
        ],
        bullets: [
          "Concealed pivot mechanism supports oversized door panels",
          "Smooth operation despite increased door weight",
          "Clean, uninterrupted architectural appearance",
          "Ideal for statement villa and building entrances",
        ],
      },
      {
        eyebrow: "UPVC CASEMENT SUITE AND SLIDING WINDOW & DOOR",
        heading: "Where Insulation Matters as Much as the View",
        level: 3,
        paragraphs: [
          "uPVC, or unplasticised PVC, offers natural resistance to heat transfer, making it a practical choice for UAE homes where insulation and indoor comfort matter. Unlike aluminium, uPVC does not conduct exterior heat as readily, reducing the reliance on deep thermal breaks.",
          "The Casement Suite covers hinged, top-hung and tilt-opening windows, while the Sliding Window & Door range suits balconies, terraces and openings where a swinging sash is impractical. Both options maintain a slim visual profile while delivering the everyday functionality expected from modern residential glazing.",
        ],
        bullets: [
          "uPVC's low thermal conductivity resists heat transfer without relying purely on frame depth",
          "Casement Suite covers hinged, top-hung and tilt-opening residential windows",
          "Sliding Window & Door suits balconies, secondary terrace access and space-limited openings",
          "Slimmer sightline than typical uPVC systems, closer to an aluminium profile's visual weight",
        ],
      },
      {
        eyebrow: "WHAT \"FRAMELESS\" ACTUALLY MEANS IN PRACTICE",
        heading: "Reading the Claim Without the Marketing Gloss",
        level: 3,
        paragraphs: [
          "“Frameless” doesn't mean there is no structural support. It means the aluminium framework is recessed, concealed or positioned outside the main sightline, allowing the glass to dominate visually.",
          "On systems such as the Pivot Door and VF35 Facade, this creates cleaner elevations with minimal visible framing. Because less frame is available to accommodate uneven surfaces, installation demands greater accuracy than conventional glazing systems. Floor levels, wall conditions and opening dimensions need to be checked before fabrication to ensure everything aligns correctly.",
        ],
        bullets: [
          "Aluminium support is concealed or recessed",
          "Glass remains the dominant visual element",
          "Requires precise site measurements",
          "Floor and wall levels checked before installation",
        ],
      },
      {
        eyebrow: "VF35 FACADE",
        heading: "Scaling the Same Idea to a Full Elevation",
        level: 4,
        paragraphs: [
          "VF35 takes the slim-frame, glass-forward approach and applies it at building scale, a facade system for developments where the brief calls for a genuinely glass-dominant elevation rather than a conventional grid of visible mullions. It's positioned for projects where the architectural intent is specifically a minimal, glass-heavy facade line, boutique residential buildings, villa developments with large glazed frontages, and select commercial fit-outs.",
          "As with the Pivot Door, minimising visible structure at facade scale means the engineering carries more, not less, load per visible centimetre of aluminium, so wind load and glass thickness calculations get run against the specific building height and exposure before a VF35 specification is finalised, not taken from a generic facade table.",
        ],
        bullets: [
          "Built for elevations where a minimal, glass-dominant look is the specific architectural intent",
          "Wind load and glass thickness calculated against actual building height and exposure",
          "Complements Pivot Door entrances at ground level for a consistent glazing language",
          "Suited to boutique residential and select commercial developments over standard high-rise towers",
        ],
      },
      {
        eyebrow: "SECURITY",
        heading: "A Concealed System Still Needs to Lock Properly",
        level: 4,
        paragraphs: [
          "A frameless or slim-frame opening can raise a fair question around security, a less visible frame can look less secure. In practice, the Pivot Door and uPVC ranges both carry multi-point locking systems built into their respective mechanisms, sized to the panel weight and opening type rather than a generic lock fitted after the fact.",
          "As with any glazing system, the real security performance depends on the glass specification and hardware actually installed matching what was tested and quoted, which is worth confirming in writing on any ground-floor or publicly accessible opening.",
        ],
        bullets: [
          "Multi-point locking built into Pivot Door and uPVC hardware as standard",
          "Lock and hardware sizing matched to actual panel weight and opening type",
          "Security performance depends on installed glass matching the specified configuration",
          "Recommended to confirm the full hardware and glass spec in writing on accessible openings",
        ],
      },
      {
        eyebrow: "LOOK AND FINISH",
        heading: "Frame-Forward Finish, Rethought for Minimal Frame",
        level: 4,
        paragraphs: [
          "With less visible aluminium to work with, finish quality matters more per visible centimetre on a Vetromax system than on a wider-framed product, there's simply nowhere for an uneven coat or fading anodised layer to hide. The range runs through the standard RAL colour palette and anodised options, checked specifically for how they hold up on the slimmer profiles used across the Pivot Door and VF35 lines.",
          "uPVC finishes work differently again, typically a foiled or laminated surface rather than powder coat, and the foil quality is what decides whether a frame still looks crisp after a decade of Gulf sun rather than fading unevenly compared to the aluminium and glass it sits alongside.",
        ],
        bullets: [
          "Full RAL colour range and anodised options across the aluminium and glass ranges",
          "uPVC foil finishes checked for consistent long-term colour match against aluminium companions",
          "Finish quality matters more per visible centimetre given the minimal frame area",
          "Orientation reviewed before colour is finalised, since dark finishes run hotter in direct sun",
        ],
      },
      {
        eyebrow: "BUILT FOR GLASS-FORWARD DESIGN, RECHECKED FOR GULF HEAT",
        heading: "Why Minimal Frame Needs Maximum Scrutiny Here",
        level: 4,
        paragraphs: [
          "A large glazed panel with minimal surrounding frame moves more, thermally, than a smaller pane held in a deep, wide frame, more glass means more expansion and contraction through a Gulf day, and less frame depth means less structure available to absorb that movement. That's the specific risk we check for before any Vetromax system, aluminium, uPVC or glass, is finalised for a UAE site.",
          "We review glass thickness, gasket compound and seal design against the actual panel size, orientation and building exposure, rather than treating a frameless system as needing the same generic check as a conventional framed one.",
        ],
        bullets: [
          "Larger glass panels move more thermally, with less frame depth available to absorb it",
          "Glass thickness and gasket compound reviewed against actual panel size and orientation",
          "Wind load recalculated for coastal or high-rise exposure on VF35 Facade specifications",
          "This check is included as standard on every Vetromax quote, not billed as an extra",
        ],
      },
    ],
    worksWellWith: {
      items: [
        { label: "Aluminium Windows", blurb: "Matched profile families for a consistent elevation.", href: "/catalogue/aluminium-windows" },
        { label: "Curtain Wall Systems", blurb: "Continuous glazing on primary building faces.", href: "/catalogue/curtain-wall" },
        { label: "Skylights & Rooflights", blurb: "Daylight drawn straight into the room below.", href: "/catalogue/skylights" },
      ],
    },
    faqLevel: 5,
    faqs: [
        {
          q: "Is a frameless door actually strong enough for a large villa entrance?",
          a: "Yes, the Pivot Door's concealed rotation point is specifically engineered to carry a larger, heavier panel than a hinged door of the same size, and the load-bearing structure is recessed rather than removed, so the strength doesn't drop just because the frame isn't visible.",
        },
        {
          q: "Why choose uPVC over aluminium for windows in this climate?",
          a: "uPVC's low thermal conductivity resists transferring exterior heat into the room without relying purely on frame depth, which makes it a genuinely strong option for standard residential windows, particularly where budget and insulation both matter alongside the look.",
        },
        {
          q: "What's the difference between a standard curtain wall and VF35 Facade?",
          a: "A standard facade system is built around a visible mullion grid. VF35 is built for elevations where the architectural brief specifically calls for a minimal, glass-dominant look, so it suits boutique and villa-scale developments more than a conventional high-rise grid.",
        },
        {
          q: "Does a frameless or slim-frame system need special installation conditions?",
          a: "Yes, tighter site tolerances than a conventional framed system, since there's less frame depth available to absorb an out-of-level floor or wall. That's why every Vetromax specification includes a site survey before the quote is finalised, not after.",
        },
    ],
    whySwiftrooms: {
      eyebrow: "WHY SWIFTROOMS",
      heading: "A Local Team Fluent in the Full Range",
      level: 5,
      paragraphs: [
        "We don't quote \"Vetromax\" as a single generic glazing product, we specify the actual system, Pivot Door, uPVC range or VF35 Facade, matched to what the opening and the building are actually trying to achieve.",
        "As an authorised partner working from genuine profile stock, every installation carries factory-backed certification rather than a general warranty added on afterward.",
      ],
      bullets: [
        "Authorised access to the full Vetromax range, glass, aluminium and uPVC",
        "Site-specific technical review against UAE heat, wind and glass panel size",
        "Free site survey and written specification within 24 hours",
        "Track record across villas, towers and commercial fit-outs UAE-wide",
      ],
    },
    cta: {
      heading: "Free Quote & Site Visit Within 24 Hours",
      body: ["No obligation. Professional survey. Written specification."],
    },
  },
  "gulf-extrusions-aluminium-systems": {
    name: "Gulf Extrusions",
    metaTitle: "Gulf Extrusions Systems in Dubai",
    metaDescription:
      "Gulf Extrusions aluminium systems by Swiftrooms for Dubai villas, towers & commercial projects, TB600 windows, doors and CW facades. Get a free quote.",
    hero: { h1: "Gulf Extrusions", tagline: "Engineered for extremes. Designed without compromise.", description:
        "Gulf Extrusions delivers regionally engineered aluminium profiles, combining proven Gulf performance with advanced TB600 and CW systems for demanding architectural applications." },
    blocks: [
      {
        eyebrow: "THE ONE DIFFERENCE THAT ACTUALLY MATTERS",
        heading: "Why Gulf Extrusions Doesn't Need the European Recheck",
        level: 2,
        paragraphs: [
          "Almost every premium aluminium brand on the market gets designed and first tested somewhere with a very different climate to this one, then re-verified against UAE heat, humidity and dust before it's fit to spec here. Gulf Extrusions skips that step entirely, because there's no translation to do.",
          "The profiles are designed, extruded and tested in the region they're installed in, against the exact sun exposure, coastal humidity and sand-laden air a Dubai or Abu Dhabi facade actually deals with. That's not a marketing angle, it's a genuine engineering shortcut with a real consequence: less guesswork between a catalogue figure and what a frame actually does after five summers on site, because the catalogue figure was never generated somewhere else to begin with.",
        ],
        bullets: [],
      },
      {
        eyebrow: "SYSTEM RANGE",
        heading: "Purpose-Built Profiles for Each Opening Type",
        level: 2,
        paragraphs: [
          "Gulf Extrusions organises its range around function rather than a single flagship product wearing different names. The TB600 series covers the brand's thermally broken window and door systems, sliding systems handle horizontal-opening windows where a swing sash isn't practical, and the CW range scales the same regional engineering up to full building facades.",
          "The right choice comes down to what the opening needs to do and how it's used day to day, not simply which system sounds more premium. A frequently opened bedroom window and a fixed facade panel thirty storeys up are solving completely different problems, and the range is built to reflect that rather than force one profile to do both jobs.",
        ],
        bullets: [
          "TB600 Tilt & Turn for windows needing both secure ventilation and full interior-side access",
          "TB600 Door for entrance and interior openings sharing the same thermal platform as the windows",
          "Aluminium Sliding Windows for horizontal-opening residential windows in space-limited layouts",
          "CW 50mm for scaling the same engineering up to commercial and mixed-use facades",
        ],
      },
      {
        eyebrow: "TB600: THE PLATFORM BEHIND THE NAME",
        heading: "What \"TB\" Actually Stands For",
        level: 3,
        paragraphs: [
          "TB600 stands for thermally broken, with the thermal break interrupting the aluminium frame to reduce heat transfer from outside to inside. This matters in Gulf conditions, where direct sun can quickly heat conventional aluminium profiles.",
          "Engineered for regional exposure, the TB600 system is designed to improve thermal separation compared with older non-thermally-broken frames, helping maintain greater indoor comfort while supporting modern energy-conscious building design.",
        ],
        bullets: [
          "TB600's thermal break is engineered against regional sun exposure, not adapted from elsewhere",
          "The 600-series depth gives the frame enough structure to hold a proper break without added bulk",
          "Frame face temperature stays noticeably lower than older non-thermally-broken systems in direct sun",
          "Forms the shared platform behind both the TB600 Tilt & Turn window and TB600 Door",
        ],
      },
      {
        eyebrow: "TB600 TILT & TURN",
        heading: "Two Functions on the Same Window",
        level: 3,
        paragraphs: [
          "Tilt & Turn earns its place as a named speciality because it solves two different problems most single-function windows can't. Tilted, the sash opens inward from the top for controlled, secure ventilation, safe to leave open overnight without creating an easy access point. Turned, the same sash swings fully open on a side hinge for full interior-side cleaning of both faces of the glass.",
          "On upper floors of a tower or a villa's second storey, where getting outside safely to clean a window isn't realistic, that turn function tends to be the deciding reason a Tilt & Turn window gets specified over a standard casement, on top of the ventilation benefit it already offers.",
        ],
        bullets: [
          "Tilt position gives secure, restricted ventilation without opening the sash fully",
          "Turn position swings the sash open for full interior-side cleaning of both glass faces",
          "One handle and lock mechanism operates both functions, with nothing extra to specify",
          "Especially relevant above ground floor, where external cleaning access isn't practical",
        ],
      },
      {
        eyebrow: "SLIDING SYSTEMS",
        heading: "Where a Swinging Sash Isn't the Right Answer",
        level: 3,
        paragraphs: [
          "Not every opening suits a hinged or tilting sash. Balconies, compact bedrooms and furniture-heavy spaces often benefit from horizontal sliding windows. Gulf Extrusions' Aluminium Sliding Windows use the same regionally engineered platform as the TB600 range, balancing thermal performance with practical operation.",
          "Their track and roller design is suited to sustained Gulf conditions, including regular dust exposure, helping support smooth, reliable movement and long-term everyday performance.",
        ],
        bullets: [
          "Same thermally broken platform as TB600, in a horizontal-slide configuration",
          "Suits balconies and space-limited rooms where a swinging sash isn't practical",
          "Track and roller design specified against sustained dust exposure, not just smooth first-year operation",
          "Pairs naturally with TB600 windows on the same elevation for a consistent frame line",
        ],
      },
      {
        eyebrow: "CW 50MM: CURTAIN WALL FOR THE REGION",
        heading: "Scaling the Same Engineering to a Full Facade",
        level: 4,
        paragraphs: [
          "On towers and larger mixed-use developments, Gulf Extrusions' engineering scales up into the CW 50mm curtain wall system, the continuous structural glazing grid running down a building's face. Because the underlying thermal and structural principles come from the same regionally tested base as the TB600 window and door range, a building's ground-floor windows and its glazed tower above can share a genuinely matched frame depth and finish, not just a similar colour.",
          "That consistency matters most at the specific point where a lower podium's window line meets a glazed tower rising above it, a junction that reads as either one considered building or two mismatched ones from street level, depending on whether the systems were actually engineered to sit together.",
        ],
        bullets: [
          "CW 50mm built on the same regionally engineered base as the TB600 window and door range",
          "Matched frame depth and finish between podium windows and tower-level curtain wall",
          "Structural and thermal performance calculated against actual building height and coastal exposure",
          "Suits standard commercial and mixed-use facades across Dubai and Abu Dhabi developments",
        ],
      },
      {
        eyebrow: "SECURITY",
        heading: "Regional Engineering Applied to the Lock Cycle",
        level: 4,
        paragraphs: [
          "A window or door's resistance to forced entry comes down to how the frame, glass and locking hardware perform together, not any one part in isolation, and Gulf Extrusions builds multi-point locking into the TB600 window and door hardware as standard rather than offering it as an upgrade. The lock cycle is engineered into the profile itself, so the frame contributes to security rather than simply holding a lock that was designed for a different system entirely.",
          "As with any rated system, the real-world security depends on the glass and hardware installed on site matching what was originally specified, which is worth confirming in writing on any ground-floor or publicly accessible opening.",
        ],
        bullets: [
          "Multi-point locking built into TB600 window and door hardware as standard",
          "Lock cycle engineered into the profile itself, not added as a separate component",
          "Real-world security depends on installed glass matching the specified configuration",
          "Recommended to confirm the full hardware and glass spec in writing for accessible openings",
        ],
      },
      {
        eyebrow: "LOOK AND FINISH",
        heading: "Coatings Tested Against the Climate They're Sold Into",
        level: 4,
        paragraphs: [
          "Colour and finish options across the TB600 and CW ranges run through the standard RAL palette and anodised alternatives found on most premium systems, but the coating itself is where the regional testing shows up most clearly, checked against sustained UV and heat exposure at source rather than assumed to transfer directly from a cooler-climate result.",
          "Retractable Fly Screens, often specified alongside the sliding and Tilt & Turn ranges, are finished to match the surrounding frame rather than treated as a separate accessory, so a screened opening still reads as one considered frame line rather than a window with something bolted onto it afterward.",
        ],
        bullets: [
          "Full RAL colour range through Qualicoat-standard powder coating",
          "Anodised finishes available for a metallic, low-maintenance sightline",
          "Coating durability tested against regional UV and heat exposure at source",
          "Retractable Fly Screens finished to match the frame, not treated as a separate accessory",
        ],
      },
      {
        eyebrow: "ENGINEERED HERE, VERIFIED HERE",
        heading: "Why That Actually Changes the Quoting Process",
        level: 4,
        paragraphs: [
          "Because Gulf Extrusions' published figures already reflect regional conditions, the review we run before quoting looks slightly different to how we'd approach a European or other imported brand. Rather than cross-checking a catalogue number generated somewhere else, we're confirming the published figure against your specific site, orientation and glass selection, closing the gap between a regional average and your particular elevation.",
          "It's a shorter step than the recheck an imported system needs, but it's not a step we skip, a coastal high-rise and an inland villa still see meaningfully different wind load and humidity conditions even within the same broad region.",
        ],
        bullets: [
          "Published thermal and structural figures already reflect regional testing conditions",
          "Site-specific review still run against your particular orientation, glass and exposure",
          "Wind load recalculated for coastal or high-rise sites where exposure differs materially",
          "This check is included as standard on every quote, not billed as an extra",
        ],
      },
    ],
    worksWellWith: {
      items: [
        { label: "Aluminium Doors", blurb: "Matched profile families for a consistent elevation.", href: "/catalogue/aluminium-doors" },
        { label: "Curtain Wall Systems", blurb: "Continuous glazing on primary building faces.", href: "/catalogue/curtain-wall" },
        { label: "Insect Screens", blurb: "Ventilation without compromising on dust or pest control.", href: "/catalogue/insect-screens" },
      ],
    },
    faqLevel: 5,
    faqs: [
        {
          q: "Does \"regionally engineered\" actually mean better performance, or just local manufacturing?",
          a: "Both, in practice. Manufacturing here removes shipping lead time, but the more important part is that the thermal break, gasket compound and coatings are tested against Gulf heat and dust from the start, rather than tested elsewhere and rechecked afterward, so there's less gap between the catalogue figure and site reality.",
        },
        {
          q: "What does TB600 mean, and is it the same across the window and door range?",
          a: "TB stands for thermally broken and 600 refers to the profile's series depth. Both the TB600 Tilt & Turn window and TB600 Door share that same engineered platform, which is why they pair cleanly on the same elevation without a mismatch in frame depth or performance.",
        },
        {
          q: "Is a Tilt & Turn window worth it over a standard sliding window?",
          a: "It depends on the opening. Tilt & Turn adds secure ventilation and full interior-side cleaning access in one unit, genuinely useful above ground floor, while a sliding window suits space-limited rooms or balconies where a swinging sash isn't practical either way.",
        },
        {
          q: "Can CW 50mm curtain wall actually match TB600 windows on the same building?",
          a: "Yes, that's one of the real advantages of a single regional manufacturer, CW 50mm shares its engineering base with the TB600 range, so frame depth and finish stay consistent where a building's window line meets its curtain wall.",
        },
    ],
    whySwiftrooms: {
      eyebrow: "WHY SWIFTROOMS",
      heading: "A Local Team Fluent in the Full Range",
      level: 5,
      paragraphs: [
        "We don't quote \"Gulf Extrusions\" as one generic line item, we work in the actual systems, TB600 windows and doors, sliding ranges, CW facades, matched to what a specific room, elevation or building actually needs.",
        "As an authorised partner working from genuine profile stock, every installation carries factory-backed certification rather than a general warranty added on afterward.",
      ],
      bullets: [
        "Authorised access to the full Gulf Extrusions range, window through curtain wall",
        "Site-specific technical review against orientation, glass selection and coastal exposure",
        "Free site survey and written specification within 24 hours",
        "Track record across villas, towers and commercial fit-outs UAE-wide",
      ],
    },
    cta: {
      heading: "Free Quote & Site Visit Within 24 Hours",
      body: ["No obligation. Professional survey. Written specification."],
    },
  },
  "deceuninck-upvc-windows-doors": {
    name: "Deceuninck",
    metaTitle: "Deceuninck uPVC Windows and Doors",
    metaDescription:
      "Deceuninck uPVC windows and doors by Swiftrooms for Dubai villas & apartments, multi-chamber profiles and UV-stabilised performance. Get a free quote.",
    hero: { h1: "Deceuninck", tagline: "Belgian uPVC. Engineered to last.", description:
        "A specialist in high-performance uPVC window and door profile systems. Deceuninck brings decades of Belgian profile engineering to a material built specifically to resist heat transfer, not just carry a colour and a shape." },
    blocks: [
      {
        eyebrow: "WHY A BELGIAN UPVC BRAND MAKES SENSE IN GULF HEAT",
        heading: "Why Deceuninck Performs Differently to a Standard uPVC Frame",
        level: 2,
        paragraphs: [
          "uPVC is well suited to Gulf conditions because, unlike aluminium, it naturally resists transferring exterior heat into the room without relying solely on a deep thermal break. However, material choice alone does not guarantee performance. Profile quality, formulation and construction determine how well the system handles sustained heat and UV exposure.",
          "Deceuninck profiles are engineered in Belgium with multi-chamber construction and UV-stabilised compound formulations designed for long-term stability. This helps the frames maintain their shape, finish and performance under demanding sunlight. For UAE projects, the difference between properly engineered uPVC and lower-grade alternatives becomes particularly noticeable over years of continuous exposure.",
        ],
        bullets: [],
      },
      {
        eyebrow: "SYSTEM RANGE",
        heading: "A Profile for Every Opening, Not One Frame Stretched Thin",
        level: 2,
        paragraphs: [
          "Deceuninck doesn't sell a single uPVC profile and call it a complete range. Zendow and Zendow neo form the core casement and tilt-and-turn platform for standard residential windows and doors, Legend steps up with a deeper multi-chamber profile for larger openings or projects prioritising maximum insulation, and Elegant brings the same engineering to a slimmer, more contemporary sightline where the look matters as much as the performance.",
          "Choosing between them comes down to what the opening is actually being asked to do. A shaded utility window and a large west-facing bedroom window aren't the same specification problem, and treating every opening in a villa or apartment the same way usually means either overpaying on the shaded side or underspecifying the sun-facing one.",
        ],
        bullets: [
          "Zendow covers standard residential casement and tilt-and-turn windows and doors",
          "Zendow neo steps up insulation and structural depth within the same visual family",
          "Legend suits larger openings or projects where maximum thermal performance is the priority",
          "Elegant offers a slimmer, more contemporary sightline without giving up the multi-chamber build",
        ],
      },
      {
        eyebrow: "WHAT MULTI-CHAMBER CONSTRUCTION ACTUALLY MEANS",
        heading: "Reading a uPVC Profile Without the Jargon",
        level: 3,
        paragraphs: [
          "Cut a Deceuninck profile in cross-section and instead of one hollow channel, you'll find several separate internal chambers running the length of the frame. Each chamber traps a pocket of still air, and still air is a genuinely poor conductor of heat, so more chambers, properly designed rather than just added for a marketing number, means better resistance to heat and sound both passing through the frame.",
          "Zendow neo and Legend both run deeper multi-chamber profiles than the entry Zendow line, which is where their extra thermal performance actually comes from, not from a thicker wall of plastic alone but from more internal air pockets doing the insulating work. It's worth understanding this distinction because a thicker-looking frame with poorly designed chambers can still underperform a slimmer, properly engineered one.",
        ],
        bullets: [
          "Multi-chamber construction traps still air inside the profile, which resists heat transfer",
          "More chambers matter only if they're properly designed, not simply added for a bigger number",
          "Zendow neo and Legend run deeper multi-chamber profiles for stronger insulation than entry Zendow",
          "Sound insulation improves alongside thermal performance, a genuine secondary benefit of the same design",
        ],
      },
      {
        eyebrow: "LEGEND",
        heading: "The Range for When Insulation Is the Priority",
        level: 3,
        paragraphs: [
          "Legend is Deceuninck's deepest residential profile, built for openings and projects where thermal and acoustic performance sit at the top of the brief, a bedroom on a busy road, a west-facing living wall taking hours of direct sun, or simply a client who wants the lowest realistic cooling load a uPVC window can deliver in this market.",
          "The trade-off, as with any deeper profile in any material, is frame width. Legend carries a slightly heavier sightline than Zendow or Elegant, so it tends to get specified where performance is genuinely the deciding factor rather than defaulted to across an entire project regardless of what each opening actually needs.",
        ],
        bullets: [
          "Deepest multi-chamber profile in the range, built for maximum thermal and acoustic performance",
          "Suited to sun-facing elevations, road-facing bedrooms, and performance-first briefs",
          "Carries a slightly wider visible sightline than the slimmer Zendow and Elegant lines",
          "Specified selectively per opening, not defaulted across a full project regardless of exposure",
        ],
      },
      {
        eyebrow: "ELEGANT",
        heading: "Contemporary Sightline, Same Underlying Engineering",
        level: 3,
        paragraphs: [
          "Elegant answers the most common objection raised against uPVC in premium residential projects, that it looks bulkier than a slim aluminium frame. It doesn't abandon the multi-chamber construction the rest of the range relies on, it repackages it into a narrower, more contemporary profile that reads closer to what a client expects from a modern aluminium window while retaining uPVC's thermal advantage.",
          "It suits villa and apartment projects where the brief calls for a clean, minimal frame line but the budget or thermal priority still points toward uPVC over aluminium, a combination that's increasingly common as clients become more aware of the running-cost difference a well-insulated frame makes over a decade of Gulf summers.",
        ],
        bullets: [
          "Narrower, more contemporary sightline than the standard Zendow profile",
          "Retains the same multi-chamber thermal construction as the rest of the range",
          "Suits projects wanting a modern look without moving up to aluminium",
          "A genuine middle ground between visual slimness and uPVC's thermal advantage",
        ],
      },
      {
        eyebrow: "SECURITY",
        heading: "Reinforcement Built Into the Chamber, Not Bolted On",
        level: 4,
        paragraphs: [
          "A fair question with uPVC is whether a plastic-based frame can hold hardware as securely as aluminium or timber. Deceuninck's profiles are designed with internal steel reinforcement running through the main structural chamber specifically to answer that, giving the frame the rigidity to carry multi-point locking hardware properly rather than relying on the uPVC shell alone.",
          "As with any window or door system, the real security outcome depends on the glass and hardware actually installed matching the specified configuration, worth confirming in writing on any ground-floor or easily accessible opening regardless of frame material.",
        ],
        bullets: [
          "Internal steel reinforcement runs through the main structural chamber on core ranges",
          "Multi-point locking hardware specified as standard across the residential range",
          "Reinforcement gives the frame rigidity closer to what aluminium hardware expects",
          "Recommended to confirm the full installed hardware and glass configuration in writing",
        ],
      },
      {
        eyebrow: "LOOK AND FINISH",
        heading: "Why Colour Retention Matters More on uPVC Than Aluminium",
        level: 4,
        paragraphs: [
          "uPVC's finish works differently to aluminium's powder coat or anodising, colour and texture come from the compound itself or from a foil laminate applied over it, rather than a coating layer added afterward. That distinction matters in direct Gulf sun, because a poorly formulated compound doesn't just fade, it can chalk, discolour unevenly or become brittle over time in a way a well-formulated one, like Deceuninck's UV-stabilised range, is specifically engineered to resist.",
          "Foiled woodgrain and dual-colour finishes, a different tone inside to outside, are both available across the range, increasingly popular on villa projects where the interior palette differs from the exterior material scheme, the same reason dual-tone finishes have grown popular on aluminium projects.",
        ],
        bullets: [
          "UV-stabilised compound formulation resists chalking and colour fade under sustained sun",
          "Foiled woodgrain finishes available where a timber look is wanted without timber's upkeep",
          "Dual-colour options for a different interior and exterior tone on the same frame",
          "Finish quality matters more on uPVC than aluminium, since colour comes from the material itself",
        ],
      },
      {
        eyebrow: "BUILT FOR BELGIUM, RECHECKED FOR THE GULF",
        heading: "Why We Don't Just Pass On the European Numbers",
        level: 4,
        paragraphs: [
          "Deceuninck tests its published performance data primarily against European conditions, standard practice across almost every premium uPVC manufacturer and not a shortcoming unique to this brand. The gap that actually matters is between that catalogue figure and a full Dubai or Abu Dhabi summer, where sustained heat, low humidity and intense UV exposure sit well outside what most European testing regimes account for.",
          "We recheck compound performance, reinforcement sizing and glazing bead behaviour against actual UAE site conditions before finalising any quote, rather than handing over the European figure as-is, the same standard we apply across every imported system we specify.",
        ],
        bullets: [
          "European thermal and UV performance data cross-checked against UAE site conditions",
          "Compound and foil finish reviewed specifically for sustained heat, not seasonal European swings",
          "Reinforcement sizing confirmed against the actual glass weight being installed",
          "This check is included as standard, not billed as an extra",
        ],
      },
    ],
    worksWellWith: {
      items: [
        { label: "uPVC Windows & Doors", blurb: "The full uPVC catalogue, alongside Vetromax's uPVC range.", href: "/catalogue/upvc" },
        { label: "Aluminium Doors", blurb: "Matched entrance options where a project mixes materials by opening.", href: "/catalogue/aluminium-doors" },
        { label: "Insect Screens", blurb: "Ventilation without compromising on dust or pest control.", href: "/catalogue/insect-screens" },
      ],
    },
    faqLevel: 4,
    faqs: [
        {
          q: "Does uPVC actually hold up in Dubai heat, or does it degrade faster than aluminium?",
          a: "It depends entirely on compound quality. A well-formulated, UV-stabilised profile like Deceuninck's is specifically engineered to resist the chalking, discolouration and softening that give cheaper uPVC its poor reputation in this market, but the material category alone doesn't guarantee that, the compound does.",
        },
        {
          q: "What's the difference between Zendow, Zendow neo and Legend?",
          a: "Zendow is the standard residential casement and tilt-and-turn platform, Zendow neo steps up insulation and structural depth within the same visual family, and Legend runs the deepest profile in the range for openings where maximum thermal and acoustic performance is the priority.",
        },
        {
          q: "Is Elegant as strong as the standard Zendow range, given the slimmer frame?",
          a: "Yes, it retains the same multi-chamber construction and steel reinforcement as the rest of the range, just repackaged into a narrower, more contemporary sightline, so the reduction is visual rather than structural.",
        },
        {
          q: "Can uPVC windows be specified alongside aluminium doors on the same project?",
          a: "Yes, that's a common approach, uPVC where thermal performance and budget are the priority, aluminium where a slimmer sightline or larger opening is needed, and we detail the transition where the two meet so the elevation still reads as one considered scheme.",
        },
    ],
    whySwiftrooms: {
      eyebrow: "WHY SWIFTROOMS",
      heading: "A Local Team Fluent in the Full Range",
      level: 5,
      paragraphs: [
        "We don't quote \"Deceuninck\" as one generic uPVC line item, we work in the actual profiles, Zendow, Zendow neo, Legend or Elegant, matched to what a specific room, elevation or budget actually needs.",
        "As an authorised partner working from genuine profile stock, every installation carries factory-backed certification rather than a general warranty added on afterward.",
      ],
      bullets: [
        "Authorised access to the full Deceuninck uPVC range",
        "Site-specific technical review against UAE heat, UV exposure and glass weight",
        "Free site survey and written specification within 24 hours",
        "Track record across villas, towers and commercial fit-outs UAE-wide",
      ],
    },
    cta: {
      heading: "Free Quote & Site Visit Within 24 Hours",
      body: ["No obligation. Professional survey. Written specification."],
    },
  },
  "ultraframe-roof-systems": {
    name: "UltraFrame",
    metaTitle: "UltraFrame Roof Systems in Dubai",
    metaDescription:
      "UltraFrame roof systems by Swiftrooms for Dubai villas, with LivinROOF, Ultraroof and glass roof options adapted for Gulf heat. Get a free quote today.",
    hero: { h1: "UltraFrame", tagline: "British roof engineering. Reworked for the sun.", description:
        "A manufacturer of conservatory, orangery and glazed roof systems. UltraFrame brings decades of UK roof engineering to structures whose single biggest job in this climate is keeping the sun's heat out, not just keeping the rain off." },
    blocks: [
      {
        eyebrow: "A ROOF BRAND BUILT FOR A DIFFERENT PROBLEM, SOLVED THE SAME WAY",
        heading: "Why UltraFrame Needs a Genuine Regional Rework, Not Just a Recheck",
        level: 2,
        paragraphs: [
          "UltraFrame's engineering heritage comes from a UK market where a conservatory's job is mostly about capturing scarce sunlight and holding onto heat. In the Gulf, the brief flips completely, the same roof structure now has to reject sustained solar gain for most of the year while still delivering the light-filled room a conservatory or orangery is meant to be. That's a genuinely different design problem, not a smaller version of the same one.",
          "Every UltraFrame roof system we install gets specified against that reversed priority, glazing specification, ventilation strategy and roof pitch all reconsidered for a climate where the sun is the primary load for eight or nine months of the year, not the two or three the original UK engineering assumed.",
        ],
        bullets: [],
      },
      {
        eyebrow: "SYSTEM RANGE",
        heading: "Three Ways to Roof an Extension, Built Around Light Versus Shade",
        level: 2,
        paragraphs: [
          "UltraFrame offers several roof configurations, allowing the structure to be matched to the amount of daylight, shade and insulation a room requires. The Classic Glass Roof maximises natural light for a bright, traditional conservatory feel. LivinROOF combines insulated solid sections with glazed panels, giving greater control over where daylight enters.",
          "Ultraroof provides a fully tiled roof with integrated rooflights, creating a more solid, house-extension feel. For projects with a more architectural character, Orangery & Skyroom systems introduce flat or lantern-style glazed roof options.",
        ],
        bullets: [
          "Classic Glass Roof for maximum daylight and open views",
          "LivinROOF balances glazing with insulated solid sections",
          "Ultraroof offers a fully tiled roof with rooflights",
          "Orangery & Skyroom suit distinctive architectural extensions",
        ],
      },
      {
        eyebrow: "READING A ROOF GLAZING SPEC WITHOUT THE JARGON",
        heading: "What Actually Determines Heat Gain Through a Glass Roof",
        level: 3,
        paragraphs: [
          "A glass roof receives significantly more direct solar exposure than a vertical window, making the glazing specification critical to indoor comfort. The solar heat gain coefficient (SHGC) indicates how much solar energy passes through the glass and contributes to heat inside the room. Standard UK roof glazing is often selected to maximise daylight and warmth, while UAE projects require a different approach.",
          "UltraFrame roofs should therefore be specified with solar-control glazing suited to the building's orientation and exposure. Where appropriate, shading and ventilation can further reduce heat build-up, helping maintain a comfortable space throughout the hotter months.",
        ],
        bullets: [
          "Solar exposure is greater on roof glazing",
          "SHGC directly influences heat gain",
          "Solar-control glazing suits UAE conditions",
          "Orientation should guide the final specification",
        ],
      },
      {
        eyebrow: "LIVINROOF",
        heading: "Controlling Light and Shade in the Same Structure",
        level: 3,
        paragraphs: [
          "LivinROOF combines glazed panels with solid, insulated roof sections, giving homeowners greater control over daylight and solar exposure within one structure. Rather than choosing between a completely glazed or fully solid roof, glazing can be positioned where it provides useful natural light while insulated sections help limit overhead heat gain.",
          "This makes LivinROOF particularly practical for UAE extensions facing strong afternoon sun, where a full glass roof may become uncomfortable. The design can be planned around the room's orientation, layout and intended use, creating a better balance between brightness, insulation and year-round comfort.",
        ],
        bullets: [
          "Combines glazing with insulated solid roof sections",
          "Glazing placement can suit the room's orientation",
          "Helps manage intense overhead solar exposure",
          "Balances daylight with thermal comfort",
        ],
      },
      {
        eyebrow: "ULTRAROOF",
        heading: "When the Room Should Feel Like Part of the House",
        level: 3,
        paragraphs: [
          "Ultraroof takes a different approach again, a fully tiled, solid roof structure with glazed rooflights set into specific locations rather than glass forming the majority of the ceiling. The result reads less like a traditional conservatory and more like a genuine extension of the house, insulated to a level closer to the main roof, with daylight brought in deliberately through rooflights rather than across the entire structure.",
          "It's the strongest option where year-round comfort matters more than maximum glass, a home office, a family room used daily rather than occasionally, or any space where the client has been disappointed by an older, fully glazed conservatory that's too hot to use for half the year.",
        ],
        bullets: [
          "Fully tiled, solid structure with rooflights placed deliberately rather than glass throughout",
          "Insulation performance closer to a standard house roof than a traditional conservatory",
          "Suits daily-use rooms where year-round comfort outweighs maximum glass and view",
          "Often specified as a retrofit answer to an older, underperforming glazed conservatory",
        ],
      },
      {
        eyebrow: "ORANGERY & SKYROOM SYSTEMS",
        heading: "A More Architectural Brief, Still Built Around the Same Principle",
        level: 4,
        paragraphs: [
          "Where the brief calls for a more architectural alternative to a traditional conservatory, UltraFrame's Orangery and Skyroom systems combine solid roof structures with carefully positioned glazing. A flat or lantern-style glazed section can introduce natural light into the centre of the room, while the surrounding solid roof and taller perimeter walls provide greater control over solar exposure.",
          "This creates a space that feels closer to a permanent room extension than a seasonal garden addition. The approach works particularly well for larger UAE villa projects where the extension needs to support year-round living, entertaining and relaxation while complementing the home's existing architecture.",
        ],
        bullets: [
          "Flat or lantern-style glazing creates a stronger architectural statement",
          "Solid roof sections help control direct solar exposure",
          "Taller perimeter walls create a more substantial room-like appearance",
          "Well suited to larger villa extensions and year-round living",
          "Roof glazing is specified according to orientation and solar gain",
        ],
      },
      {
        eyebrow: "SECURITY",
        heading: "A Roof Structure Still Needs to Close the Building Off",
        level: 4,
        paragraphs: [
          "A glazed roof extension forms part of the building's overall security envelope, so its structure must work alongside the doors and windows below. UltraFrame's roof framework is designed to support the required roof loads without relying on the glazing for structural rigidity.",
          "Where the roof connects with bi-fold doors or glazed walls, the security specification should be coordinated across the complete opening rather than treated as separate elements. The final result depends on the glass, locks, hardware and surrounding structure all matching the specified configuration.",
        ],
        bullets: [
          "Roof framework supports structural loads independently of the glazing",
          "Door and window hardware provides the primary opening security",
          "Roof and wall systems should be specified together",
          "Full glass and hardware configuration should be confirmed before installation",
        ],
      },
      {
        eyebrow: "LOOK AND FINISH",
        heading: "A Roof Frame That Still Needs to Handle Direct Overhead Sun",
        level: 4,
        paragraphs: [
          "UltraFrame's structural roof components are finished through the same RAL colour range and coating standards used across premium aluminium systems, but a roof frame faces a harsher version of the same UV exposure a vertical frame deals with, closer to direct overhead sun for most of the day rather than the more oblique angle a wall-mounted window sees. Coating durability matters more here for exactly that reason.",
          "Internally, the roof's finish also affects how the room actually feels day to day, a solid LivinROOF or Ultraroof section finished in a lighter tone reflects more heat back out than a dark one, worth discussing at spec stage alongside the glazing choice rather than as a purely aesthetic decision afterward.",
        ],
        bullets: [
          "Full RAL colour range through the same coating standards as premium aluminium systems",
          "Roof-facing coatings checked against more direct overhead UV exposure than vertical frames see",
          "Lighter external roof tones reflect more heat than dark finishes on solid roof sections",
          "Colour and glazing spec discussed together, not treated as separate decisions",
        ],
      },
      {
        eyebrow: "BUILT FOR THE UK, REBUILT FOR THE SUN",
        heading: "Why We Don't Just Pass On the UK Specification",
        level: 4,
        paragraphs: [
          "UltraFrame tests its published performance data against UK conditions, a market where solar gain is something to capture, not resist, which makes the standard UK specification the wrong starting point for a Gulf roof rather than simply an imperfect one. This isn't a minor recheck the way it might be for a window brand already close to Gulf conditions, it's closer to a full respecification of the glazing and shading strategy for every project.",
          "We rebuild the glazing spec, review roof pitch and orientation against the actual sun path over the specific site, and where useful, bring in additional shading or ventilation strategy before finalising any quote, rather than adjusting a UK-standard design after the fact.",
        ],
        bullets: [
          "UK solar-gain-optimised glazing specification rebuilt for Gulf solar-rejection needs",
          "Roof pitch and orientation reviewed against the actual sun path over the specific site",
          "Additional shading or ventilation strategy considered where the roof design allows it",
          "This rework is included as standard on every quote, not billed as an extra",
        ],
      },
    ],
    worksWellWith: {
      items: [
        { label: "Aluminium Sliding Doors", blurb: "A full-width opening beneath the roof line for genuine indoor-outdoor flow.", href: "/catalogue/aluminium-sliding-doors" },
        { label: "Skylights & Rooflights", blurb: "Additional daylight control alongside a solid or part-glazed roof.", href: "/catalogue/skylights" },
        { label: "Garden Rooms", blurb: "A complete structure where the roof is only one part of the brief.", href: "/catalogue/garden-rooms" },
      ],
    },
    faqLevel: 5,
    faqs: [
        {
          q: "Will a fully glazed conservatory roof actually be usable in a Dubai summer?",
          a: "It can be, but only with a solar control glazing specification matched to the room's orientation, and even then a west or south-facing full-glass roof will need more careful shading or ventilation planning than a north-facing one, worth discussing honestly at spec stage rather than after installation.",
        },
        {
          q: "What's the real difference between LivinROOF and Ultraroof?",
          a: "LivinROOF combines glazed and solid sections within one structure so you can control exactly where light comes in, while Ultraroof is a fully solid, tiled roof with rooflights placed deliberately, closer to a genuine house extension than a traditional glazed conservatory.",
        },
        {
          q: "Can an UltraFrame roof sit above a full sliding or bi-fold glass wall?",
          a: "Yes, that's a common combination, and we specify the roof and the wall-level doors together so the room's overall security and thermal performance is coordinated, rather than treating the roof as a separate scope from what's underneath it.",
        },
        {
          q: "Is UK-spec glazing simply upgraded for UAE projects, or is it a different design altogether?",
          a: "Closer to a different design. UK glazing is chosen to capture and hold heat, the opposite priority to a Gulf project, so we rebuild the glazing and often the shading strategy around solar rejection rather than adjusting the UK specification incrementally.",
        },
    ],
    whySwiftrooms: {
      eyebrow: "WHY SWIFTROOMS",
      heading: "A Local Team Fluent in the Full Range",
      level: 5,
      paragraphs: [
        "We don't quote \"UltraFrame\" as one generic conservatory roof, we work in the actual systems, Classic Glass Roof, LivinROOF, Ultraroof or Orangery, matched to what the room's orientation and use actually demand.",
        "As an authorised partner working from genuine profile stock, every installation carries factory-backed certification rather than a general warranty added on afterward.",
      ],
      bullets: [
        "Authorised access to the full UltraFrame roof system range",
        "Full glazing and shading respecification against UAE sun path and orientation",
        "Free site survey and written specification within 24 hours",
        "Track record across villas, towers and commercial fit-outs UAE-wide",
      ],
    },
    cta: {
      heading: "Free Quote & Site Visit Within 24 Hours",
      body: ["No obligation. Professional survey. Written specification."],
    },
  },
};
