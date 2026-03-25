import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getDb } from "@/lib/mongodb";
import nodemailer from "nodemailer";

const contactSchema = z.object({
  fullname: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(6).max(30),
  country: z.string().min(3).max(2000),
  message: z.string().min(2).max(100),
});

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

    const db = await getDb();
    const collection = db.collection("contacts");
    const doc = { ...parsed.data, createdAt: new Date() };
    await collection.insertOne(doc);

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
      text: `Hi ${doc.fullname}, we will contact you soon.`,
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
