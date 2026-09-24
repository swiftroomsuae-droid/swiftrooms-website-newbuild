// Moves enquiry attachments into LeadOptimizer (GHL) Media Storage.
//
// The browser uploads each file to Vercel Blob first (see /api/upload) because
// Vercel functions can't accept request bodies over ~4.5 MB. Here, server-side,
// each Blob file is copied into GHL Media Storage and then deleted from Blob,
// so the only lasting copy lives in the CRM.
//
// If the GHL copy fails, the Blob file is kept and its URL is used instead, so
// an attachment is never lost.
//
// Server-only env: GHL_PIT_TOKEN (needs medias.write), optional
// GHL_MEDIA_FOLDER_ID (a Media Storage folder to put files in).

import { del } from "@vercel/blob";

const API_BASE = "https://services.leadconnectorhq.com";
const API_VERSION = "2021-07-28";
const MAX_ATTACHMENTS = 5;

export type Attachment = { name: string; url?: string };

/** Only accept files our own /api/upload route put in Blob (prevents SSRF). */
function isOurBlob(url: string): boolean {
  try {
    const u = new URL(url);
    return (
      u.protocol === "https:" &&
      u.hostname.endsWith(".public.blob.vercel-storage.com") &&
      u.pathname.startsWith("/enquiries/")
    );
  } catch {
    return false;
  }
}

async function copyToGhl(att: Required<Attachment>): Promise<string | null> {
  const token = process.env.GHL_PIT_TOKEN;
  if (!token) return null;

  const file = await fetch(att.url, { signal: AbortSignal.timeout(30_000) });
  if (!file.ok) throw new Error(`blob fetch ${file.status}`);
  const blob = await file.blob();

  const form = new FormData();
  form.append("file", blob, att.name);
  form.append("name", att.name);
  form.append("hosted", "false");
  if (process.env.GHL_MEDIA_FOLDER_ID) form.append("parentId", process.env.GHL_MEDIA_FOLDER_ID);

  const res = await fetch(`${API_BASE}/medias/upload-file`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, Version: API_VERSION, Accept: "application/json" },
    body: form,
    signal: AbortSignal.timeout(60_000),
  });
  if (!res.ok) throw new Error(`media upload ${res.status}: ${await res.text().catch(() => "")}`);
  const data = (await res.json()) as { url?: string; fileUrl?: string };
  return data.url || data.fileUrl || null;
}

/**
 * Copy each uploaded attachment into GHL Media Storage and return one line per
 * file for the CRM ("1) plan.pdf — https://…"). Never throws.
 */
export async function storeAttachments(input: unknown): Promise<string> {
  if (!Array.isArray(input)) return "";
  const atts = input
    .filter((a): a is Attachment => !!a && typeof a === "object" && typeof (a as Attachment).name === "string")
    .slice(0, MAX_ATTACHMENTS)
    .map((a) => ({ name: a.name.slice(0, 200), url: typeof a.url === "string" ? a.url : undefined }));

  const lines = await Promise.all(
    atts.map(async (att, i) => {
      const n = `${i + 1}) ${att.name}`;
      if (!att.url || !isOurBlob(att.url)) return `${n} (upload failed — please request from customer)`;
      try {
        const ghlUrl = await copyToGhl({ name: att.name, url: att.url });
        if (!ghlUrl) return `${n} — ${att.url}`;
        await del(att.url).catch((err) => console.error("[ATTACHMENTS] blob delete failed", err));
        return `${n} — ${ghlUrl}`;
      } catch (err) {
        // Keep the Blob copy so the file is still reachable.
        console.error("[ATTACHMENTS] copy to CRM failed", att.name, err);
        return `${n} — ${att.url}`;
      }
    }),
  );
  return lines.join("\n");
}
