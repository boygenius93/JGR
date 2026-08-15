import type { ContactFormData } from "@/lib/validation";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string): string {
  if (!value) return "";
  return `<tr><td style="padding:6px 0;color:#79766D;font-size:13px;width:160px;vertical-align:top;">${escapeHtml(
    label
  )}</td><td style="padding:6px 0;color:#15161A;font-size:14px;">${escapeHtml(value)}</td></tr>`;
}

/** Internal notification sent to Just Genius when a new lead comes in. */
export function buildNotificationEmail(data: ContactFormData) {
  const subject = `New inquiry: ${data.company} (${data.name})`;
  const html = `
    <div style="font-family:sans-serif;max-width:560px;margin:0 auto;">
      <h2 style="color:#15161A;font-size:18px;">New recruiting inquiry</h2>
      <table style="width:100%;border-collapse:collapse;">
        ${row("Name", data.name)}
        ${row("Work email", data.email)}
        ${row("Company", data.company)}
        ${row("Title", data.title)}
        ${row("Company stage", data.stage)}
        ${row("Industry", data.industry)}
        ${row("Open roles", data.openRoles)}
        ${row("Hiring for", data.hiringFor)}
        ${row("Support needed", data.supportType)}
      </table>
      ${
        data.message
          ? `<p style="color:#79766D;font-size:13px;margin-top:16px;">Message</p><p style="color:#15161A;font-size:14px;white-space:pre-wrap;">${escapeHtml(
              data.message
            )}</p>`
          : ""
      }
    </div>
  `;
  return { subject, html };
}

/** Confirmation sent back to the prospect. */
export function buildConfirmationEmail(data: ContactFormData) {
  const subject = "Thanks for reaching out to Just Genius";
  const html = `
    <div style="font-family:sans-serif;max-width:560px;margin:0 auto;">
      <p style="color:#15161A;font-size:15px;">Hi ${escapeHtml(data.name.split(" ")[0] || data.name)},</p>
      <p style="color:#15161A;font-size:15px;line-height:1.6;">
        Thanks for telling us about ${escapeHtml(data.company)}. We&rsquo;ll review what you shared
        and follow up shortly to see if Just Genius is a fit for your hiring needs.
      </p>
      <p style="color:#15161A;font-size:15px;line-height:1.6;">
        — Derek, Just Genius Recruitment Solutions
      </p>
    </div>
  `;
  return { subject, html };
}
