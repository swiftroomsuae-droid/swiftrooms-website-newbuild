"use client";

import { upload } from "@vercel/blob/client";
import type { Attachment } from "./enquiryAttachments";

// Uploads attached drawings/photos to Vercel Blob (temporary holding spot) and
// returns { name, url } per file. The server then moves each file into
// LeadOptimizer Media Storage (see enquiryAttachments.ts). A file that fails
// to upload comes back without a url, so the enquiry itself is never lost.

function safeName(name: string): string {
  return name.replace(/[^\w.\-]+/g, "_").slice(-100) || "file";
}

export async function uploadEnquiryFiles(files: File[]): Promise<Attachment[]> {
  return Promise.all(
    files.map(async (file) => {
      try {
        const blob = await upload(`enquiries/${safeName(file.name)}`, file, {
          access: "public",
          handleUploadUrl: "/api/upload",
          contentType: file.type || "application/octet-stream",
        });
        return { name: file.name, url: blob.url };
      } catch (err) {
        console.error("[UPLOAD] failed", file.name, err);
        return { name: file.name };
      }
    }),
  );
}
