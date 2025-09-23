"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import Loader from "./Loader";

export function Providers({ children }: { children: React.ReactNode }) {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Hydration completed
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Loader />; // show loader until hydration
  }

  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
}
