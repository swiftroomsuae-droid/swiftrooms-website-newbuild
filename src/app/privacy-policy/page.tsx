import { SITE_URL } from "@/lib/site";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/pageSettings";

const baseMetadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Swiftrooms' privacy policy — how and why we collect, use and store your personal data when you visit swiftrooms.ae.",
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  openGraph: {
    type: "website",
    title: "Privacy Policy | Swiftrooms",
    description:
      "Swiftrooms' privacy policy — how and why we collect, use and store your personal data when you visit swiftrooms.ae.",
    url: `${SITE_URL}/privacy-policy`,
  },
};

export const generateMetadata = () => pageMetadata("/privacy-policy", baseMetadata);

export default async function PrivacyPolicyPage() {
  const base = SITE_URL;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: base },
      { "@type": "ListItem", position: 2, name: "Privacy Policy", item: `${base}/privacy-policy` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="pt-32 pb-16 md:pt-44 md:pb-20 lg:pt-52 lg:pb-28">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8 lg:px-10">
          <p className="text-label text-[#007969] mb-3 md:mb-4">Legal</p>
          <h1 className="text-headline text-[#1c1c1e] mb-8 max-w-3xl">Privacy Policy</h1>

          <div className="max-w-3xl space-y-6 text-[#6b7280] leading-relaxed">
            <p>
              Your privacy is of the utmost importance to Swiftrooms. This policy explains when,
              why and how we collect personal information from you across our website
              swiftrooms.ae. We only collect, use and store your personal data as described in
              this Privacy Policy.
            </p>
            <p>We reserve the right to amend this Privacy Policy from time to time without prior notice.</p>

            <h2 className="text-title text-[#1c1c1e] pt-4">1. Information we collect</h2>

            <h3 className="font-semibold text-[#1c1c1e]">Log data</h3>
            <p>
              When you visit our website, our servers may automatically log the standard data
              provided by your web browser. This may include your computer&apos;s Internet
              Protocol (IP) address, your browser type and version, the pages you visit within the
              website, the time and date of your visit and how long you spent on each page, along
              with other details.
            </p>

            <h3 className="font-semibold text-[#1c1c1e]">Device data</h3>
            <p>
              Data about the device you are using to access our website may also be collected.
              This may include the device type used to access our website, the operating system
              used, unique device identifiers, device settings, and geo-location data. The data we
              collect can depend on the individual settings of your device and software.
              Swiftrooms recommends that you check the policies of your device manufacturer and/or
              software provider to learn what information they make available to us.
            </p>

            <h2 className="text-title text-[#1c1c1e] pt-4">2. Why we collect your personal data</h2>
            <p>
              Swiftrooms will process your personal information securely, lawfully and in a
              transparent manner. We collect and process your personal information based on the
              legitimate business interests of Swiftrooms, who supply and fabricate windows and
              doors, glass rooms, garden rooms and extensions.
            </p>

            <h2 className="text-title text-[#1c1c1e] pt-4">3. Collection and use of information</h2>
            <p>
              Swiftrooms may collect, hold, use and disclose information for the following
              purposes, and personal information will not be further processed in a manner that is
              incompatible with these purposes:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>to enable you to customise or personalise your experience of our website; and</li>
              <li>to contact and communicate with you.</li>
            </ul>

            <h2 className="text-title text-[#1c1c1e] pt-4">4. Changes to this policy</h2>
            <p>
              Swiftrooms may change this privacy policy to reflect current acceptable practices.
              Where applicable, we will take reasonable steps to let our users know about changes
              via our website. Continued use of this site after any changes to this policy will be
              regarded as acceptance of our practices around privacy and personal information.
            </p>
            <p>
              If we make a significant change to this privacy policy — for example, changing a
              lawful basis on which we process your personal information — we will ask you to
              re-consent to the amended privacy policy.
            </p>

            <p className="text-sm text-gray-400 pt-6">This policy is effective as of May 2021.</p>
          </div>
        </div>
      </section>
    </>
  );
}
