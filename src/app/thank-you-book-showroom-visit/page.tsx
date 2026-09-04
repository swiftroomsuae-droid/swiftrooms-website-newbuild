import { SITE_URL } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your showroom visit request has been received. Our team will confirm your appointment within 24 hours.",
  alternates: { canonical: `${SITE_URL}/thank-you-book-showroom-visit` },
  robots: { index: false, follow: false },
};

const SHOWROOM_NAME = "4900 Showroom, Jebel Ali";
const SHOWROOM_ADDRESS = "Industrial Area 1, Dubai, UAE";
const SHOWROOM_HOURS = "Sun–Thu 8:30–17:30 · Sat 10:00–14:00";

function CheckIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function ThankYouShowroomVisitPage() {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-28 lg:pt-52 lg:pb-32">
      <div className="max-w-screen-xl mx-auto px-5 md:px-8 lg:px-10">
        <div className="max-w-xl">
          <div className="w-14 h-14 bg-[#1c1c1e] flex items-center justify-center mb-8">
            <CheckIcon className="w-7 h-7 text-white" />
          </div>
          <p className="text-label text-[#007969] mb-3">Booking Requested</p>
          <h1 className="text-headline text-[#1c1c1e] mb-6 leading-snug">
            We&apos;ll confirm within 24 hours.
          </h1>
          <p className="text-body-lg text-[#6b7280] mb-8 leading-relaxed">
            Our showroom team will contact you to confirm your appointment at our Jebel Ali
            showroom.
          </p>
          <div className="bg-[#f8f9fa] p-5 mb-10 max-w-sm text-sm text-[#3a3a3c] leading-relaxed">
            <p className="font-semibold text-[#1c1c1e] mb-1">{SHOWROOM_NAME}</p>
            <p className="text-[#6b7280] text-xs">{SHOWROOM_ADDRESS}</p>
            <p className="text-[#6b7280] text-xs mt-1">{SHOWROOM_HOURS}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/" className="btn-brand">
              Back to Homepage
            </Link>
            <Link href="/showroom" className="btn-outline">
              Showroom Details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
