import { NextRequest, NextResponse } from "next/server";
import { buildLead, joinValue, sendToCrm } from "@/lib/crm";

const WA_PHONE = "971505269149";

async function notifyWhatsApp(text: string) {
  const apiKey = process.env.CALLMEBOT_API_KEY;
  if (!apiKey) return;
  const url = `https://api.callmebot.com/whatsapp.php?phone=${WA_PHONE}&text=${encodeURIComponent(text)}&apikey=${apiKey}`;
  await fetch(url);
}

// Two forms post here using different key names for the same thing:
// FreeQuoteForm sends location/projectStage/budgetScope/hasFiles, LeadTypeform
// sends area/stage/files. Reconcile them so one GHL field mapping covers both.
function normaliseEnquiry(body: Record<string, unknown>) {
  const location =
    joinValue(body.location) ||
    [body.area, body.emirate, body.address].map(joinValue).filter(Boolean).join(", ");

  // LeadTypeform substitutes the literal "Not provided" for a blank email.
  // That must never reach the CRM as an address.
  const rawEmail = joinValue(body.email).trim();
  const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(rawEmail) ? rawEmail : "";

  return {
    email,
    location,
    projectStage: joinValue(body.projectStage) || joinValue(body.stage),
    budgetScope: joinValue(body.budgetScope) || joinValue(body.budget),
    files: joinValue(body.files) || joinValue(body.hasFiles),
  };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      name, phone, email, contactMethod, message,
      projectType, propertyType, emirate, area, address,
      stage, budget, notes, files,
    } = body;

    const lines = [
      "🏠 *New Quote Enquiry*",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      contactMethod ? `Contact via: ${contactMethod}` : null,
      projectType ? `Project type: ${projectType}` : null,
      propertyType ? `Property type: ${propertyType}` : null,
      emirate ? `Emirate: ${emirate}` : null,
      area ? `Area: ${area}` : null,
      address ? `Address: ${address}` : null,
      stage ? `Stage: ${stage}` : null,
      budget ? `Budget scope: ${budget}` : null,
      notes ? `Notes: ${notes}` : null,
      files ? `Files: ${files}` : null,
      message ? `Message: ${message}` : null,
    ];

    const n = normaliseEnquiry(body);
    const lead = buildLead("quote", "Website — Quote Enquiry", body, {
      email: n.email,
      projectType: joinValue(body.projectType),
      propertyType: joinValue(body.propertyType),
      location: n.location,
      emirate: joinValue(body.emirate),
      area: joinValue(body.area),
      address: joinValue(body.address),
      projectStage: n.projectStage,
      budgetScope: n.budgetScope,
      productsNeeded: joinValue(body.productsNeeded),
      files: n.files,
      notes: joinValue(body.notes),
      message: joinValue(body.message),
      marketingConsent: joinValue(body.marketingConsent),
      privacyConsent: joinValue(body.privacyConsent),
      // Which widget produced the lead: LeadTypeform passes a page-level
      // `source`, FreeQuoteForm identifies itself with `type`.
      pageSource: joinValue(body.source) || joinValue(body.type),
    });

    // Both notifications run concurrently; neither can fail the request.
    const [, crmOk] = await Promise.all([
      notifyWhatsApp(lines.filter(Boolean).join("\n")).catch(() => {}),
      sendToCrm(lead),
    ]);

    console.log("[SWIFTROOMS ENQUIRY]", JSON.stringify({
      timestamp: new Date().toISOString(),
      crmOk,
      ...body,
    }, null, 2));

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
