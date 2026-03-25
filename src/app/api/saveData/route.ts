import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();
    const client = new MongoClient(process.env.MONGODB_URI as string);
    await client.connect();
    const database = client.db("suroggacy-and-egg-donation");
    const collection = database.collection("surrogacy");

    await collection.insertOne(formData);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "nikolozgelenidze9@gmail.com",
        pass: process.env.PASSWORD,
      },
    });

    const mailForMe = {
      from: `${formData.name}<${formData.email}>`,
      to: "nikolozgelenidze9@gmail.com",
      subject: `Email from ${formData.email}`,
      text: `${formData.text}`,
    };
    await transporter.sendMail(mailForMe);

    const mailForUser = {
      from: `nikolozgelenidze9@gmail.com`,
      to: `${formData.email}`,
      subject: `Thank you for your Response`,
      text: `Hi ${formData.name}, thanks for your Response. we will contact you as soon as possible.`,
    };
    await transporter.sendMail(mailForUser);

    return NextResponse.json(
      { message: "Data saved and email sent successfully!" },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 },
    );
  }
}
