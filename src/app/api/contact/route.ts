import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, interest, preferredLanguage, message } = body;

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const smtpPass = process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS;

    if (!smtpPass) {
      console.error("No SMTP password configured (GMAIL_APP_PASSWORD or SMTP_PASS)");
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER || "hassan@hsdcreative.com",
        pass: smtpPass,
      },
    });

    const emailBody = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  🏡  NEW LEAD — raquelsellshomes.com
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name:               ${firstName} ${lastName}
Email:              ${email}
Phone:              ${phone || "Not provided"}
Interest:           ${interest || "Not specified"}
Preferred Language: ${preferredLanguage || "Not specified"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${message || "No message provided"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted: ${new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })} CT
Follow up within 1 hour for best results.
    `.trim();

    await transporter.sendMail({
      from: `"Raquel Sells Homes" <hassan@hsdcreative.com>`,
      to: "raquel.moran@bairdwarner.com, alessa.phi@ez-digitalsolutions.com",
      replyTo: email,
      subject: `New Lead — ${firstName} ${lastName} | raquelsellshomes.com`,
      text: emailBody,
    });

    // Append to Google Sheet if configured
    if (process.env.GOOGLE_SHEET_ID && process.env.GOOGLE_SERVICE_ACCOUNT_KEY) {
      try {
        const { google } = await import("googleapis");
        const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);
        const auth = new google.auth.GoogleAuth({
          credentials,
          scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });
        const sheets = google.sheets({ version: "v4", auth });

        await sheets.spreadsheets.values.append({
          spreadsheetId: process.env.GOOGLE_SHEET_ID,
          range: "Sheet1!A:H",
          valueInputOption: "USER_ENTERED",
          requestBody: {
            values: [
              [
                new Date().toISOString(),
                firstName,
                lastName,
                email,
                phone || "",
                interest || "",
                preferredLanguage || "",
                message || "",
              ],
            ],
          },
        });
      } catch (sheetErr) {
        console.error("Google Sheets error:", sheetErr);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
