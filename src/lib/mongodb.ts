import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("Missing MONGODB_URI");

const globalForMongo = globalThis as unknown as {
  _mongoClientPromise?: Promise<MongoClient>;
};

const clientPromise: Promise<MongoClient> =
  process.env.NODE_ENV !== "production"
    ? (globalForMongo._mongoClientPromise ??
      (globalForMongo._mongoClientPromise = new MongoClient(uri).connect()))
    : new MongoClient(uri).connect();

export async function getDb(): Promise<Db> {
  try {
    const client = await clientPromise;
    return client.db();
  } catch (e) {
    console.error("MongoDB connection error:", e);
    throw e;
  }
}
