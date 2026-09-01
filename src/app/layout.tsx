import { SITE_URL } from "@/lib/site";
import type { Metadata } from "next";
import { draftMode } from "next/headers";
import Script from "next/script";
import { VisualEditing } from "next-sanity/visual-editing";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/layout/LenisProvider";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { CTAFormProvider } from "@/components/forms/CTAFormProvider";
import { SanityLive } from "@/sanity/lib/live";
import { getSiteSettings } from "@/lib/site-settings";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Swiftrooms — Performance Windows & Doors, UAE",
    template: "%s | Swiftrooms",
  },
  description:
    "Premium aluminium windows, doors, curtain wall and glazing systems for UAE residential and commercial projects. Engineered to perform. Built to outlast. Authorised Cortizo, Vetromax, Vetro and Gulf Extrusions partners.",
  keywords: [
    "aluminium windows Dubai",
    "aluminium doors UAE",
    "performance windows UAE",
    "Cortizo UAE",
    "sliding doors Dubai",
    "bi-fold doors UAE",
    "uPVC windows Dubai",
    "glazing contractor Dubai",
    "Swiftrooms",
  ],
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: "Swiftrooms",
    title: "Swiftrooms — Performance Windows & Doors, UAE",
    description:
      "Premium aluminium windows, doors, curtain wall and glazing systems for UAE residential and commercial projects. Authorised Cortizo, Vetromax, Vetro and Gulf Extrusions partners.",
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
  twitter: {
    card: "summary_large_image",
    site: "@SWIFTROOMS",
    creator: "@SWIFTROOMS",
    title: "Swiftrooms — Performance Windows & Doors, UAE",
    description:
      "Premium aluminium windows, doors, curtain wall and glazing systems for UAE residential and commercial projects.",
    images: [`${SITE_URL}/brand/og-default.jpg`],
  },
};

const BASE = SITE_URL;

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE}/#website`,
  name: "Swiftrooms",
  url: BASE,
  publisher: { "@id": `${BASE}/#business` },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Reading isEnabled keeps every route STATIC/ISR for normal visitors and only
  // switches to dynamic rendering when the Draft Mode cookie is present, so
  // Visual Editing + live updates load exclusively inside Presentation/preview.
  const { isEnabled: isDraft } = await draftMode();
  const settings = await getSiteSettings();
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
      </head>
      <body className="bg-white text-[#1c1c1e] antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TD4BV3QB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {/* Google Tag Manager — deferred until after hydration so it can't block LCP/TBT */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TD4BV3QB');`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <CTAFormProvider>
          <LenisProvider>
            <Navbar nav={settings.navigation} quoteLabel={settings.cta.quoteLabel} />
            <main>{children}</main>
            <Footer />
            <StickyMobileCTA />
            <WhatsAppFloat />
          </LenisProvider>
        </CTAFormProvider>
        {/* Visual Editing overlays + live preview — only mounted in Draft Mode
            (inside the Presentation tool). No effect on the published site. */}
        {isDraft && (
          <>
            <VisualEditing />
            <SanityLive />
          </>
        )}
      </body>
    </html>
  );
}
