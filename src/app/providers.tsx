"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import Loader from "./Loader";

export function Providers({ children }: { children: React.ReactNode }) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader for 3s (customizable)
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />; // show loader until hydration
  }

  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
}
