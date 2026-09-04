import { SITE_URL } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your free quote request has been received. A member of the Swiftrooms team will be in touch shortly.",
  alternates: { canonical: `${SITE_URL}/thank-you` },
  robots: { index: false, follow: false },
};

function CheckIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function ThankYouPage() {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-28 lg:pt-52 lg:pb-32">
      <div className="max-w-screen-xl mx-auto px-5 md:px-8 lg:px-10">
        <div className="max-w-xl">
          <div className="w-14 h-14 bg-[#1c1c1e] flex items-center justify-center mb-8">
            <CheckIcon className="w-7 h-7 text-white" />
          </div>
          <p className="text-label text-[#007969] mb-3">Request Submitted</p>
          <h1 className="text-headline text-[#1c1c1e] mb-6 leading-snug">
            Thank you. We&apos;ll be in touch.
          </h1>
          <p className="text-body-lg text-[#6b7280] mb-10 leading-relaxed">
            Your quote request has been received. A member of our team will review your project
            details and contact you within one business day to discuss next steps.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/" className="btn-brand">
              Back to Homepage
            </Link>
            <Link href="/catalogue" className="btn-outline">
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
