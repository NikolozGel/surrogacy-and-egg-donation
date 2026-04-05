import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import nodemailer from "nodemailer";
import { contactSchema } from "@/../src/lib/schemas";
import { ContactFormData } from "@/components/modal/ValidationSchema";

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.CLIENTEMAIL,
    private_key: process.env.PRIVATEKEY?.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});
const sheets = google.sheets({ version: "v4", auth });
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;

async function saveLeadToSheet(doc: ContactFormData) {
  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: "Leads!A:E",
    valueInputOption: "RAW",
    requestBody: {
      values: [[doc.fullname, doc.email, doc.phone, doc.country, doc.message]],
    },
  });
}

export async function POST(req: NextRequest) {
  try {
    const text = await req.text();
    let body;
    try {
      body = JSON.parse(text);
    } catch {
      return NextResponse.json(
        { ok: false, error: "Invalid JSON" },
        { status: 400 },
      );
    }

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const doc = { ...parsed.data, createdAt: new Date() };

    await saveLeadToSheet(doc);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact from ${doc.email}`,
      text: `Name: ${doc.fullname}\nEmail: ${doc.email}\nPhone: ${doc.phone}\nCountry: ${doc.country}\nMessage: ${doc.message}`,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: doc.email,
      subject: "We received your message",
      text: `Hi ${doc.fullname}, We'll contact you soon.`,
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (e) {
    console.log("Server error:", e);

    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 },
    );
  }
}
