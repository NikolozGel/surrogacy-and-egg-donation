import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import nodemailer from "nodemailer";
import { contactSchema } from "@/../src/lib/schemas";
import { ContactFormData } from "@/components/modal/ValidationSchema";
import credentials from "@/../service.account.json";

// Google Sheets setup
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});
const sheets = google.sheets({ version: "v4", auth });
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;

async function saveLeadToSheet(doc: ContactFormData) {
  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: "Leads!A:E", // spreadsheet-ში 5 column
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [
            doc.fullname ?? "",
            doc.email ?? "",
            doc.phone ?? "",
            doc.country ?? "",
            doc.message ?? "",
          ],
        ],
      },
    });
  } catch (err) {
    console.error("Sheets append error:", err);
    throw err;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const doc = parsed.data; // ⚠️ ნუ აყენებ createdAt, თუ sheet-ში 5 column გაქვს

    // Save to Google Sheets
    await saveLeadToSheet(doc);

    // Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    // To admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact from ${doc.email}`,
      text: `Name: ${doc.fullname}\nEmail: ${doc.email}\nPhone: ${doc.phone}\nCountry: ${doc.country}\nMessage: ${doc.message}`,
    });

    // To user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: doc.email,
      subject: "We received your message",
      text: `Hi ${doc.fullname}, We'll contact you soon.`,
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (e) {
    console.error("Server error:", e);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 },
    );
  }
}
