// Formats enquiry attachments for the CRM. Files are already stored in
// LeadOptimizer Media Storage by /api/upload; this turns the { name, url }
// list the form sends into one line per file ("1) plan.pdf — https://…"),
// which flows into the CRM field, note and emails.

const MAX_ATTACHMENTS = 5;

export type Attachment = { name: string; url?: string };

function isHttps(url: string): boolean {
  try {
    return new URL(url).protocol === "https:";
  } catch {
    return false;
  }
}

export function formatAttachments(input: unknown): string {
  if (!Array.isArray(input)) return "";
  return input
    .filter((a): a is Attachment => !!a && typeof a === "object" && typeof (a as Attachment).name === "string")
    .slice(0, MAX_ATTACHMENTS)
    .map((a, i) => {
      const n = `${i + 1}) ${a.name.slice(0, 200)}`;
      return typeof a.url === "string" && isHttps(a.url)
        ? `${n} — ${a.url}`
        : `${n} (upload failed — please request from customer)`;
    })
    .join("\n");
}
