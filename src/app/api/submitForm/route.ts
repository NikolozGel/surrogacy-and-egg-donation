import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const client = new MongoClient(process.env.MONGODB_URI as string);
    await client.connect();
    const db = client.db("suroggacy-and-egg-donation");
    const collection = db.collection("surrogacy");
    await collection.insertOne(data);

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully!",
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong!" },
      { status: 500 },
    );
  }
}
