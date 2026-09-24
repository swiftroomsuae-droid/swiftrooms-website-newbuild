"use client";

import { upload } from "@vercel/blob/client";

// Uploads attached drawings/photos to Vercel Blob and returns one line per
// file for the CRM: "name — https://…". A file that fails to upload is still
// listed by name (marked as not uploaded) so the enquiry itself is never lost.

function safeName(name: string): string {
  return name.replace(/[^\w.\-]+/g, "_").slice(-100) || "file";
}

export async function uploadEnquiryFiles(files: File[]): Promise<string> {
  if (!files.length) return "";

  const results = await Promise.all(
    files.map(async (file, i) => {
      try {
        const blob = await upload(`enquiries/${safeName(file.name)}`, file, {
          access: "public",
          handleUploadUrl: "/api/upload",
          contentType: file.type || "application/octet-stream",
        });
        return `${i + 1}) ${file.name} — ${blob.url}`;
      } catch (err) {
        console.error("[UPLOAD] failed", file.name, err);
        return `${i + 1}) ${file.name} (upload failed — please request from customer)`;
      }
    }),
  );

  return results.join("\n");
}
