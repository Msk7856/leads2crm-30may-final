// /pages/api/verify-certificate.js

import admin from "firebase-admin";
import { cert } from "firebase-admin/app";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    }),
  });
}

const db = admin.firestore();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { reference, dob } = req.body;

  if (!reference || !dob) {
    return res.status(400).json({ error: "Reference and DOB are required" });
  }

  try {
    const snapshot = await db
      .collection("certificates")
      .where("id", "==", reference)
      .get();

    if (snapshot.empty) {
      return res.status(404).json({ error: "Certificate not found" });
    }

    const cert = snapshot.docs[0].data();

    if (cert.dob !== dob) {
      return res.status(404).json({ error: "DOB does not match" });
    }

    return res.status(200).json({ certificate: cert });
  } catch (error) {
    console.error("Error verifying certificate:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
