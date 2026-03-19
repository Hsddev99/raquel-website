import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, interest, preferredLanguage, message } = body;

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Send email notification to Raquel
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const emailBody = `
🏡 New Lead from RaquelSellsHomes.com

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || "Not provided"}
Interest: ${interest || "Not specified"}
Preferred Language: ${preferredLanguage || "Not specified"}

Message:
${message || "No message provided"}

---
This lead was submitted via raquelsellshomes.com contact form.
Follow up within 1 hour for best results.
    `.trim();

    // Only send email if SMTP is configured
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail({
        from: `"RaquelSellsHomes.com" <${process.env.SMTP_USER}>`,
        to: "raquel.moran@bairdwarner.com",
        cc: process.env.CC_EMAIL || undefined,
        subject: `🏡 New Lead — ${firstName} ${lastName} — ${interest || "General Inquiry"}`,
        text: emailBody,
      });
    }

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
        // Don't fail the request if sheet append fails
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
