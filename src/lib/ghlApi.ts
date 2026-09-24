// Direct GoHighLevel / LeadConnector API delivery (go.leadoptimizer.co.uk).
//
// The inbound webhook only stores fields someone maps by hand inside the GHL
// workflow. This writes every form answer straight onto the contact as a
// custom field instead, so the answers show under "All fields" on the lead
// with no workflow mapping at all.
//
// Server-only env (Vercel → Settings → Environment Variables):
//   GHL_PIT_TOKEN    — Private Integration token with contacts.readonly,
//                      contacts.write, locations/customFields.readonly and
//                      locations/customFields.write
//   GHL_LOCATION_ID  — the sub-account id (the id after /location/ in the URL)
//
// When either is unset this is a no-op, same convention as the webhook.

import type { CrmLead } from "./crm";
import { joinValue } from "./crm";

const API_BASE = "https://services.leadconnectorhq.com";
const API_VERSION = "2021-07-28";
const TIMEOUT_MS = 8_000;

type DataType = "TEXT" | "LARGE_TEXT";

// Lead key → custom field shown on the contact. Matched by name, so fields the
// team already created by hand with these names are reused, not duplicated.
const FIELDS: [key: string, name: string, dataType: DataType][] = [
  ["projectType", "Interested In", "TEXT"],
  ["propertyType", "Property Type", "TEXT"],
  ["productsNeeded", "Products Needed", "TEXT"],
  ["area", "Area", "TEXT"],
  ["emirate", "Emirate", "TEXT"],
  ["address", "Address", "TEXT"],
  ["location", "Project Location", "TEXT"],
  ["projectStage", "Project Stage", "TEXT"],
  ["budgetScope", "Budget / Scope", "TEXT"],
  ["timeline", "Timeline", "TEXT"],
  ["contactMethod", "Preferred Contact", "TEXT"],
  ["visitType", "Visit Purpose", "TEXT"],
  ["preferredTime", "Preferred Visit Date/Time", "TEXT"],
  ["altDateTime", "Alternative Visit Date/Time", "TEXT"],
  ["numVisitors", "Number of Visitors", "TEXT"],
  ["visitorRole", "Visitor Role", "TEXT"],
  ["resourceTitle", "Requested Resource", "TEXT"],
  ["files", "Files", "TEXT"],
  ["notes", "Project Notes", "LARGE_TEXT"],
  ["message", "Message", "LARGE_TEXT"],
  ["source", "Enquiry Form", "TEXT"],
  ["pageSource", "Enquiry Page / Widget", "TEXT"],
  ["submittedAt", "Enquiry Submitted At", "TEXT"],
  ["summary", "Enquiry Summary", "LARGE_TEXT"],
];

function env() {
  return { token: process.env.GHL_PIT_TOKEN, locationId: process.env.GHL_LOCATION_ID };
}

async function ghl(path: string, init: RequestInit = {}): Promise<Response> {
  return fetch(`${API_BASE}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${env().token}`,
      Version: API_VERSION,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
}

const normaliseName = (n: string) => n.trim().toLowerCase();

// Field name → id, cached per server instance so warm invocations skip the
// lookup. Reset on failure so a transient error doesn't stick.
let fieldIds: Promise<Map<string, string>> | null = null;

async function loadFieldIds(locationId: string): Promise<Map<string, string>> {
  const res = await ghl(`/locations/${locationId}/customFields?model=contact`);
  if (!res.ok) throw new Error(`customFields list ${res.status}: ${await res.text().catch(() => "")}`);
  const data = (await res.json()) as { customFields?: { id: string; name: string }[] };

  const ids = new Map<string, string>();
  for (const f of data.customFields ?? []) ids.set(normaliseName(f.name), f.id);

  // Create any missing fields — only happens once per location. Small parallel
  // batches keep the first lead fast while staying under GHL's burst limit.
  const missing = FIELDS.filter(([, name]) => !ids.has(normaliseName(name)));
  for (let i = 0; i < missing.length; i += 5) {
    await Promise.all(
      missing.slice(i, i + 5).map(async ([, name, dataType]) => {
        const created = await ghl(`/locations/${locationId}/customFields`, {
          method: "POST",
          body: JSON.stringify({ name, dataType, model: "contact" }),
        });
        if (!created.ok) {
          console.error("[CRM API] could not create field", name, created.status, await created.text().catch(() => ""));
          return;
        }
        const body = (await created.json()) as { customField?: { id: string }; id?: string };
        const id = body.customField?.id ?? body.id;
        if (id) ids.set(normaliseName(name), id);
      }),
    );
  }
  return ids;
}

function getFieldIds(locationId: string) {
  fieldIds ??= loadFieldIds(locationId).catch((err) => {
    fieldIds = null;
    throw err;
  });
  return fieldIds;
}

/** True when the API credentials are configured. */
export function ghlApiConfigured(): boolean {
  const { token, locationId } = env();
  return Boolean(token && locationId);
}

/**
 * Upsert the contact with every answer as a custom field. Never throws —
 * returns whether GHL accepted it. Upsert dedupes on email/phone, so the
 * webhook workflow's own Create/Update Contact lands on the same record.
 */
export async function upsertContactWithFields(lead: CrmLead): Promise<boolean> {
  const { locationId } = env();
  if (!ghlApiConfigured() || !locationId) return false;

  const email = joinValue(lead.email).trim();
  const phone = joinValue(lead.phone).trim();
  if (!email && !phone) return false; // GHL needs one of them to upsert

  try {
    const ids = await getFieldIds(locationId);
    const customFields = FIELDS.flatMap(([key, name]) => {
      const id = ids.get(normaliseName(name));
      const value = joinValue(lead[key]).trim();
      return id && value ? [{ id, field_value: value }] : [];
    });

    const res = await ghl("/contacts/upsert", {
      method: "POST",
      body: JSON.stringify({
        locationId,
        firstName: joinValue(lead.firstName) || undefined,
        lastName: joinValue(lead.lastName) || undefined,
        name: joinValue(lead.fullName) || undefined,
        email: email || undefined,
        phone: phone || undefined,
        source: joinValue(lead.source) || "Website",
        tags: ["website-lead", `form-${joinValue(lead.formType) || "enquiry"}`],
        customFields,
      }),
    });
    if (!res.ok) {
      console.error("[CRM API] upsert rejected", res.status, await res.text().catch(() => ""));
      return false;
    }
    return true;
  } catch (err) {
    console.error("[CRM API] upsert failed", err);
    return false;
  }
}
