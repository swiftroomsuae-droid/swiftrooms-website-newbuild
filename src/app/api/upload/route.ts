import { NextResponse } from "next/server";
import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";

// Issues short-lived tokens so the enquiry forms can upload drawings/photos
// straight from the browser to Vercel Blob. Files never pass through this
// function, so Vercel's 4.5 MB request limit doesn't apply.
//
// Requires BLOB_READ_WRITE_TOKEN (added automatically when a Blob store is
// connected to the project in Vercel → Storage). Without it this returns an
// error and the forms fall back to sending file names only.

const MAX_UPLOAD_BYTES = 25 * 1024 * 1024; // 25 MB per file

const ALLOWED_CONTENT_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  // DWG has no single registered type and browsers often report none.
  "image/vnd.dwg",
  "application/acad",
  "application/x-dwg",
  "application/octet-stream",
];

export async function POST(request: Request) {
  const body = (await request.json()) as HandleUploadBody;

  try {
    const result = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname) => {
        if (!pathname.startsWith("enquiries/")) throw new Error("Invalid upload path");
        return {
          allowedContentTypes: ALLOWED_CONTENT_TYPES,
          maximumSizeInBytes: MAX_UPLOAD_BYTES,
          addRandomSuffix: true,
        };
      },
    });
    return NextResponse.json(result);
  } catch (err) {
    console.error("[UPLOAD] token request rejected", err);
    return NextResponse.json({ error: "Upload not available" }, { status: 400 });
  }
}
