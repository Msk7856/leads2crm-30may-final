// components/AnalyticsInitializer.jsx
'use client'
import { useEffect } from "react";
import { getAnalytics, isSupported } from "firebase/analytics";
import { app } from "@/lib/firebase";

export default function AnalyticsInitializer() {
  useEffect(() => {
    // Only run in browser
    isSupported().then((supported) => {
      if (supported) {
        getAnalytics(app);
      }
    });
  }, []);
  return null;
}
