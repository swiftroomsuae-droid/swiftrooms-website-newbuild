"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { lockScroll, unlockScroll } from "@/lib/scroll-lock";

export type PendingResource = { id: string; title: string };

/**
 * Download gate for the resources library. Requesting a resource used to be an
 * anonymous fire-and-forget POST; the CRM needs a name and email to create a
 * contact, so the request now collects them first.
 */
export default function ResourceRequestForm({
  resource,
  onClose,
  onSuccess,
}: {
  resource: PendingResource | null;
  onClose: () => void;
  onSuccess: (id: string) => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!resource) return;
    lockScroll();
    return () => unlockScroll();
  }, [resource]);

  // Dismissing clears any stale error so reopening the gate starts clean.
  const close = useCallback(() => {
    setError("");
    onClose();
  }, [onClose]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!resource) return;
    if (!name.trim()) return setError("Please enter your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      return setError("Please enter a valid email address.");

    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/resource-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          resourceId: resource.id,
          resourceTitle: resource.title,
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          marketingConsent,
        }),
      });
      if (!res.ok) throw new Error();
      onSuccess(resource.id);
      setName(""); setEmail(""); setPhone(""); setMarketingConsent(false);
      onClose();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AnimatePresence>
      {resource && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
            onClick={close}
            aria-hidden="true"
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label={`Request ${resource.title}`}
            className="relative w-full max-w-md bg-white shadow-2xl p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute top-4 right-4 text-gray-400 hover:text-[#1c1c1e] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <p className="text-label text-[#007969] mb-2">Request Resource</p>
            <p className="text-title text-[#1c1c1e] mb-2 pr-6">{resource.title}</p>
            <p className="text-[#6b7280] text-sm mb-6">
              Tell us where to send it and we&apos;ll email your copy shortly.
            </p>

            <form onSubmit={submit} className="space-y-4">
              <div>
                <label htmlFor="rr-name" className="block text-xs text-[#6b7280] mb-1.5">
                  Name <span className="text-[#007969]">*</span>
                </label>
                <input
                  id="rr-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  autoComplete="name"
                  className="w-full border border-gray-200 px-3 py-2.5 text-sm text-[#1c1c1e] focus:border-[#007969] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="rr-email" className="block text-xs text-[#6b7280] mb-1.5">
                  Email <span className="text-[#007969]">*</span>
                </label>
                <input
                  id="rr-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  className="w-full border border-gray-200 px-3 py-2.5 text-sm text-[#1c1c1e] focus:border-[#007969] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="rr-phone" className="block text-xs text-[#6b7280] mb-1.5">
                  Phone <span className="text-gray-400">(optional)</span>
                </label>
                <input
                  id="rr-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  autoComplete="tel"
                  className="w-full border border-gray-200 px-3 py-2.5 text-sm text-[#1c1c1e] focus:border-[#007969] focus:outline-none transition-colors"
                />
              </div>

              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={marketingConsent}
                  onChange={(e) => setMarketingConsent(e.target.checked)}
                  className="mt-0.5 accent-[#007969]"
                />
                <span className="text-xs text-[#6b7280] leading-relaxed">
                  Keep me updated with product news and guides from Swiftrooms.
                </span>
              </label>

              {error && <p className="text-xs text-red-600">{error}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="btn-brand w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Sending…" : "Send me this resource"}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
