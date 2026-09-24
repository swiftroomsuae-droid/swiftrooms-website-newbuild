import { NextRequest, NextResponse } from "next/server";

// Receives one enquiry attachment at a time and stores it in LeadOptimizer
// (GHL) Media Storage, returning the CRM-hosted link. Nothing is kept on
// Vercel. Vercel caps request bodies at ~4.5 MB, hence the 4 MB file limit.
//
// Server-only env: GHL_PIT_TOKEN (needs medias.write), optional
// GHL_MEDIA_FOLDER_ID (a Media Storage folder to file uploads under).

const API_BASE = "https://services.leadconnectorhq.com";
const API_VERSION = "2021-07-28";
const MAX_BYTES = 4 * 1024 * 1024;
const ALLOWED_EXT = /\.(pdf|jpe?g|png|webp|gif|dwg)$/i;

// The separate landing-page app (swiftrooms-landingpage project) uploads its
// attachments here too, so it doesn't need its own copy of the CRM token.
// Extra origins can be added via UPLOAD_ALLOWED_ORIGINS (comma-separated).
const LANDING_ORIGINS = [
  "https://landingpage.swiftrooms.ae",
  "https://swiftrooms-landingpage.vercel.app",
  ...(process.env.UPLOAD_ALLOWED_ORIGINS ?? "").split(",").map((o) => o.trim()).filter(Boolean),
];
const LANDING_PREVIEW = /^https:\/\/swiftrooms-landingpage-[a-z0-9-]+-swiftroomsuae-2242s-projects\.vercel\.app$/;

function allowedCrossOrigin(origin: string | null): string | null {
  if (!origin) return null;
  return LANDING_ORIGINS.includes(origin) || LANDING_PREVIEW.test(origin) ? origin : null;
}

function corsHeaders(origin: string | null): Record<string, string> {
  return origin ? { "Access-Control-Allow-Origin": origin, Vary: "Origin" } : {};
}

export async function OPTIONS(req: NextRequest) {
  const origin = allowedCrossOrigin(req.headers.get("origin"));
  if (!origin) return new NextResponse(null, { status: 403 });
  return new NextResponse(null, {
    status: 204,
    headers: { ...corsHeaders(origin), "Access-Control-Allow-Methods": "POST", "Access-Control-Max-Age": "86400" },
  });
}

export async function POST(req: NextRequest) {
  // Our own pages, or the landing-page app. Nothing else.
  const origin = req.headers.get("origin");
  const host = req.headers.get("host");
  const cross = allowedCrossOrigin(origin);
  const fail = (status: number, error: string) =>
    NextResponse.json({ error }, { status, headers: corsHeaders(cross) });
  if (origin && host && new URL(origin).host !== host && !cross) return fail(403, "Forbidden");

  const token = process.env.GHL_PIT_TOKEN;
  if (!token) return fail(503, "Uploads not configured");

  let file: File | null = null;
  try {
    const form = await req.formData();
    const f = form.get("file");
    if (f instanceof File) file = f;
  } catch {
    return fail(400, "Invalid upload");
  }
  if (!file) return fail(400, "No file");
  if (!ALLOWED_EXT.test(file.name)) return fail(415, "File type not allowed");
  if (file.size > MAX_BYTES) return fail(413, "File too large");

  const name = file.name.slice(0, 200);
  const upstream = new FormData();
  upstream.append("file", file, name);
  upstream.append("name", name);
  upstream.append("hosted", "false");
  if (process.env.GHL_MEDIA_FOLDER_ID) upstream.append("parentId", process.env.GHL_MEDIA_FOLDER_ID);

  try {
    const res = await fetch(`${API_BASE}/medias/upload-file`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, Version: API_VERSION, Accept: "application/json" },
      body: upstream,
      signal: AbortSignal.timeout(60_000),
    });
    if (!res.ok) {
      console.error("[UPLOAD] CRM rejected", res.status, await res.text().catch(() => ""));
      return fail(502, "Upload failed");
    }
    const data = (await res.json()) as { url?: string; fileUrl?: string };
    const url = data.url || data.fileUrl;
    if (!url) {
      console.error("[UPLOAD] CRM response had no url", data);
      return fail(502, "Upload failed");
    }
    return NextResponse.json({ name, url }, { headers: corsHeaders(cross) });
  } catch (err) {
    console.error("[UPLOAD] CRM unreachable", err);
    return fail(502, "Upload failed");
  }
}
