"use server"
import { APP_NAME } from "@/constants/app.constants";
import { resendClient } from "@/lib/resend-client";
import { ContactFormValues } from "@/schemas/contact.schema";
import { ErrorResponse } from "resend";

interface ContactRequest {
    name: string;
    email: string;
    subject: string;
    message: string;
    service?: string;
}

const buildEmailHtml = ({ name, email, subject, message, service }: ContactRequest) => `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>New Contact Form Submission</title>
</head>
<body style="margin:0;padding:0;background-color:#f5f7f4;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f7f4;padding:40px 20px;">
<tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(26,37,23,0.08);">

  <!-- Header -->
  <tr>
    <td style="background: linear-gradient(135deg, #1a2e1a 0%, #2a3f28 50%, #1a2e1a 100%); padding: 44px 48px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td>
            <table role="presentation" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding-right:14px;vertical-align:middle;">
                  <div style="width:36px;height:36px;border-radius:10px;background:rgba(140,180,130,0.2);border:1px solid rgba(140,180,130,0.3);text-align:center;line-height:36px;font-size:16px;">🌿</div>
                  <img src="/assets/brand/logo.png" class="width:auto;height:50px;" />
                </td>
                <td style="vertical-align:middle;">
                  <p style="margin:0;font-size:13px;font-weight:600;color:rgba(172,200,162,0.9);letter-spacing:1px;">${APP_NAME}</p>
                </td>
              </tr>
            </table>
            <h1 style="margin:20px 0 0;font-size:24px;font-weight:700;color:#ffffff;line-height:1.3;font-family:Georgia,'Times New Roman',serif;">New Contact Inquiry</h1>
            <p style="margin:8px 0 0;font-size:13px;color:rgba(255,255,255,0.5);">Someone reached out through your website</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- Accent bar -->
  <tr>
    <td style="height:3px;background:linear-gradient(90deg,#8cb482,#acc8a2,#8cb482);"></td>
  </tr>

  <!-- Sender Info Card -->
  <tr>
    <td style="padding:32px 48px 0;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8faf7;border-radius:12px;border:1px solid #e8ede6;">
        <tr>
          <td style="padding:24px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td width="52" valign="top">
                  <div style="width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,#8cb482,#6a9960);text-align:center;line-height:48px;color:#fff;font-size:20px;font-weight:700;font-family:Georgia,'Times New Roman',serif;">
                    ${name.charAt(0).toUpperCase()}
                  </div>
                </td>
                <td style="padding-left:16px;" valign="middle">
                  <p style="margin:0;font-size:17px;font-weight:600;color:#1a2e1a;font-family:Georgia,'Times New Roman',serif;">${name}</p>
                  <p style="margin:4px 0 0;font-size:13px;color:#6b7a68;">
                    <a href="mailto:${email}" style="color:#6a9960;text-decoration:none;">${email}</a>
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- Details -->
  <tr>
    <td style="padding:28px 48px 0;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        ${service ? `
        <tr>
          <td style="padding-bottom:22px;">
            <p style="margin:0 0 8px;font-size:10px;letter-spacing:2.5px;text-transform:uppercase;color:#8a9a86;font-weight:600;">Service Interested In</p>
            <p style="margin:0;display:inline-block;padding:6px 16px;background-color:#eef3ec;color:#3d6635;border-radius:20px;font-size:13px;font-weight:500;border:1px solid #d6e3d2;">${service}</p>
          </td>
        </tr>` : ''}
        <tr>
          <td style="padding-bottom:22px;">
            <p style="margin:0 0 8px;font-size:10px;letter-spacing:2.5px;text-transform:uppercase;color:#8a9a86;font-weight:600;">Subject</p>
            <p style="margin:0;font-size:16px;color:#1a2e1a;font-weight:600;font-family:Georgia,'Times New Roman',serif;">${subject}</p>
          </td>
        </tr>
        <tr>
          <td>
            <p style="margin:0 0 8px;font-size:10px;letter-spacing:2.5px;text-transform:uppercase;color:#8a9a86;font-weight:600;">Message</p>
            <div style="padding:22px;background-color:#fafcf9;border-radius:12px;border:1px solid #e8ede6;border-left:3px solid #8cb482;">
              <p style="margin:0;font-size:14px;color:#374a34;line-height:1.8;white-space:pre-wrap;">${message}</p>
            </div>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- Reply CTA -->
  <tr>
    <td style="padding:32px 48px;">
      <table role="presentation" cellpadding="0" cellspacing="0">
        <tr>
          <td style="border-radius:10px;background:linear-gradient(135deg,#3d6635,#527a49);">
            <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" style="display:inline-block;padding:14px 36px;font-size:14px;font-weight:600;color:#ffffff;text-decoration:none;letter-spacing:0.5px;">
              Reply to ${name.split(' ')[0]} →
            </a>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- Footer -->
  <tr>
    <td style="padding:28px 48px;background-color:#1a2e1a;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td>
            <p style="margin:0 0 6px;font-size:12px;color:rgba(172,200,162,0.8);font-weight:500;">T-Solutions</p>
            <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.35);">
              This email was sent from the contact form on <strong style="color:rgba(255,255,255,0.5);">t-solutions.com</strong>
            </p>
          </td>
        </tr>
      </table>
    </td>
  </tr>

</table>
</td></tr>
</table>
</body>
</html>
`;

export const sendEmail = async (data: ContactFormValues) => {
    try {
        const resp = await resendClient.emails.send({
            from: `T-Solutionz Contact <info@t-solutionz.com>`,
            to: 'info@t-solutionz.com',
            replyTo: data.email,
            subject: 'New Contact Form Message',
            html: buildEmailHtml({...data})
        });

        return resp

    } catch (error) {
        const err = error as ErrorResponse;
        console.log("Error Sending Emails", err);
        throw err
    }
};

