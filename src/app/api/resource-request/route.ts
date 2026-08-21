import { NextRequest, NextResponse } from "next/server";
import { buildLead, joinValue, sendToCrm } from "@/lib/crm";

const WA_PHONE = "971505269149";

async function notifyWhatsApp(text: string) {
  const apiKey = process.env.CALLMEBOT_API_KEY;
  if (!apiKey) return;
  const url = `https://api.callmebot.com/whatsapp.php?phone=${WA_PHONE}&text=${encodeURIComponent(text)}&apikey=${apiKey}`;
  await fetch(url);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { resourceId, resourceTitle, name, email, phone } = body;

    // Name and email are collected by the download gate, so a request without
    // them is malformed rather than merely sparse — reject it instead of
    // creating an unusable nameless contact in the CRM.
    const cleanEmail = joinValue(email).trim();
    if (!joinValue(name).trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      return NextResponse.json({ ok: false, error: "name and email required" }, { status: 400 });
    }

    const message = [
      "📄 *Resource Request*",
      `Resource: ${resourceTitle}`,
      `ID: ${resourceId}`,
      `Name: ${joinValue(name)}`,
      `Email: ${cleanEmail}`,
      phone ? `Phone: ${joinValue(phone)}` : null,
    ].filter(Boolean).join("\n");

    const lead = buildLead("resource", "Website — Resource Download", body, {
      email: cleanEmail,
      resourceId: joinValue(resourceId),
      resourceTitle: joinValue(resourceTitle),
      marketingConsent: joinValue(body.marketingConsent),
    });

    const [, crmOk] = await Promise.all([
      notifyWhatsApp(message).catch(() => {}),
      sendToCrm(lead),
    ]);

    console.log("[SWIFTROOMS RESOURCE REQUEST]", {
      resourceId, resourceTitle, name, email: cleanEmail, crmOk,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
