// GoHighLevel / LeadConnector lead capture (go.leadoptimizer.co.uk).
//
// Leads are POSTed to a GHL Workflow "Inbound Webhook" trigger URL held in
// GHL_WEBHOOK_URL. When that is unset the call is a no-op — same convention as
// the CallMeBot alert — so local dev and previews need no stubbing.
//
// Two constraints shape this file:
//
//  1. The payload is FLAT and its keys are STABLE. GHL builds its field-mapping
//     UI from one sampled request body; it cannot map nested objects or arrays,
//     and a key that is absent from the sample cannot be mapped later. So every
//     value is a top-level string and every known key is always present (empty
//     string when unused) rather than omitted.
//
//  2. Delivery is best-effort. A CRM outage must never surface to the visitor
//     as a failed submission, so failures are logged and swallowed. The
//     WhatsApp alert and the server log remain the backstop.

import { upsertContactWithFields } from "./ghlApi";

const TIMEOUT_MS = 8_000;

export type CrmLead = Record<string, string | number | boolean | undefined | null>;

/**
 * Best-effort UAE phone normalisation to E.164, which is what GHL needs to
 * dedupe contacts and to dial or WhatsApp them. Anything already carrying an
 * international prefix is passed through untouched — visitors do submit
 * non-UAE numbers and guessing a country code for them would be worse than
 * leaving them alone.
 */
export function normalisePhone(raw?: string): string {
  if (!raw) return "";
  const cleaned = raw.replace(/[\s()\-.]/g, "");
  if (!cleaned) return "";
  if (cleaned.startsWith("+")) return cleaned;
  if (cleaned.startsWith("00")) return `+${cleaned.slice(2)}`;
  if (cleaned.startsWith("971")) return `+${cleaned}`;
  // Local UAE mobile/landline: 0501234567 → +971501234567
  if (cleaned.startsWith("0") && cleaned.length >= 9) return `+971${cleaned.slice(1)}`;
  // Bare subscriber number: 501234567 → +971501234567
  if (/^[1-9]\d{8}$/.test(cleaned)) return `+971${cleaned}`;
  return cleaned;
}

/**
 * GHL stores first and last name separately. Everything after the first token
 * becomes the surname so multi-part names survive intact.
 */
export function splitName(full?: string): { firstName: string; lastName: string } {
  const parts = (full ?? "").trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return { firstName: "", lastName: "" };
  return { firstName: parts[0], lastName: parts.slice(1).join(" ") };
}

/** Arrays arrive from multi-select fields; GHL wants a single readable string. */
export function joinValue(v: unknown): string {
  if (Array.isArray(v)) return v.filter(Boolean).join(", ");
  if (v === undefined || v === null) return "";
  if (typeof v === "boolean") return v ? "Yes" : "No";
  return String(v);
}

/**
 * Push a lead to the CRM. Never throws and never rejects — callers can await it
 * without guarding. Returns whether the webhook accepted the lead, which the
 * routes log but do not surface to the client.
 */
export async function sendToCrm(lead: CrmLead): Promise<boolean> {
  // Write the answers onto the contact as custom fields first (when the API
  // token is configured), so the webhook workflow that follows — which sends
  // the auto-reply — updates the same, already-populated contact.
  const apiOk = await upsertContactWithFields(lead);
  const webhookOk = await sendToWebhook(lead);
  return apiOk || webhookOk;
}

async function sendToWebhook(lead: CrmLead): Promise<boolean> {
  const url = process.env.GHL_WEBHOOK_URL;
  if (!url) return false;

  // Coerce to flat strings and drop nothing — see constraint 1 above.
  const payload: Record<string, string> = {};
  for (const [k, v] of Object.entries(lead)) payload[k] = joinValue(v);

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!res.ok) {
      console.error("[CRM] webhook rejected", res.status, await res.text().catch(() => ""));
      return false;
    }
    return true;
  } catch (err) {
    console.error("[CRM] webhook failed", err);
    return false;
  }
}

// Human labels for the summary, in display order. Keys not listed here (and
// empty values) are left out of the summary.
const SUMMARY_LABELS: [string, string][] = [
  ["source", "Form"],
  ["pageSource", "Page / widget"],
  ["submittedAt", "Submitted"],
  ["fullName", "Name"],
  ["phone", "Phone"],
  ["email", "Email"],
  ["contactMethod", "Preferred contact"],
  ["projectType", "Interested in / project type"],
  ["propertyType", "Property type"],
  ["productsNeeded", "Products needed"],
  ["area", "Area"],
  ["emirate", "Emirate"],
  ["address", "Address"],
  ["location", "Location"],
  ["projectStage", "Project stage"],
  ["budgetScope", "Budget / scope"],
  ["timeline", "Timeline"],
  ["visitType", "Visit purpose"],
  ["preferredTime", "Preferred date/time"],
  ["altDateTime", "Alternative date/time"],
  ["numVisitors", "Visitors"],
  ["visitorRole", "Visitor role"],
  ["resourceTitle", "Resource"],
  ["resourceId", "Resource ID"],
  ["files", "Files"],
  ["notes", "Notes"],
  ["message", "Message"],
  ["marketingConsent", "Marketing consent"],
  ["privacyConsent", "Privacy consent"],
];

/**
 * Every answer as one readable block, so a single "Add Note" action in the GHL
 * workflow ({{inboundWebhookRequest.summary}}) captures the whole enquiry
 * without mapping each field individually.
 */
export function summaryFor(lead: CrmLead): string {
  // `location` is area/emirate/address joined; show it only when the parts
  // themselves weren't sent, so the summary doesn't repeat them.
  const hasParts = ["area", "emirate", "address"].some((k) => joinValue(lead[k]).trim());
  return SUMMARY_LABELS
    .filter(([key]) => !(key === "location" && hasParts))
    .map(([key, label]) => {
      const value = joinValue(lead[key]).trim();
      return value ? `${label}: ${value}` : "";
    })
    .filter(Boolean)
    .join("\n");
}

/**
 * Build the flat payload shared by every form. `source` is the human-readable
 * label shown on the contact in GHL; `formType` is the machine key to branch on
 * inside the workflow. Extra per-form fields are merged on top, and the union of
 * all of them is declared here as empty strings so a single sampled payload
 * exposes every mappable field in the GHL UI.
 */
export function buildLead(
  formType: string,
  source: string,
  body: Record<string, unknown>,
  extra: CrmLead = {},
): CrmLead {
  const name = joinValue(body.name);
  const { firstName, lastName } = splitName(name);

  const lead: CrmLead = {
    // Identity
    formType,
    source,
    submittedAt: new Date().toISOString(),
    fullName: name,
    firstName,
    lastName,
    email: joinValue(body.email),
    phone: normalisePhone(joinValue(body.phone)),
    contactMethod: joinValue(body.contactMethod),

    // Every optional field declared so GHL can see and map it. Per-form values
    // are supplied through `extra`; the rest stay as empty strings.
    pageSource: "",
    projectType: "",
    propertyType: "",
    location: "",
    emirate: "",
    area: "",
    address: "",
    projectStage: "",
    budgetScope: "",
    productsNeeded: "",
    timeline: "",
    visitType: "",
    preferredTime: "",
    altDateTime: "",
    numVisitors: "",
    visitorRole: "",
    resourceTitle: "",
    resourceId: "",
    files: "",
    notes: "",
    message: "",
    marketingConsent: "",
    privacyConsent: "",

    ...extra,
  };

  return { ...lead, summary: summaryFor(lead) };
}
