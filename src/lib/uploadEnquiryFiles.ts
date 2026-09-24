"use client";

import type { Attachment } from "./enquiryAttachments";

// Sends each attached file to /api/upload, which stores it in LeadOptimizer
// Media Storage and returns the CRM link. A file that fails comes back without
// a url, so the enquiry itself is never lost.

export const MAX_UPLOAD_BYTES = 4 * 1024 * 1024; // matches /api/upload

export async function uploadEnquiryFiles(files: File[]): Promise<Attachment[]> {
  return Promise.all(
    files.map(async (file) => {
      try {
        const form = new FormData();
        form.append("file", file);
        const res = await fetch("/api/upload", { method: "POST", body: form });
        if (!res.ok) throw new Error(`upload ${res.status}`);
        const { url } = (await res.json()) as { url?: string };
        return url ? { name: file.name, url } : { name: file.name };
      } catch (err) {
        console.error("[UPLOAD] failed", file.name, err);
        return { name: file.name };
      }
    }),
  );
}
