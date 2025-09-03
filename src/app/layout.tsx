"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Providers } from "./providers";
import TopBar from "@/components/topbar";
import { usePathname } from "next/navigation";
import Script from "next/script";
import AnalyticsListener from "./AnalyticsListener";
import { Analytics } from "@vercel/analytics/next"


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({

  children,
}: {
  children: React.ReactNode;
}) {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const pathname = usePathname();

  // If pathname is not ready yet, fallback to showing layout
  const isStandalone = pathname?.startsWith("/zoho-crm-implementation");

  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <meta name="google-site-verification" content="T8TJAnB3DzozT9RGtMeL8hEwaq6uZY2pHYX-K2tvORQ" />

        {/* Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-SR0XTSY1B3"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SR0XTSY1B3', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>

      {/* <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}> */}
      <body className={`bg-[#FFFFFF]  ${inter.className}`}>


        <Providers>
          <AnalyticsListener />
          {/* <TopBar/> */}
          {/* <TopBar/> */}
          {/* <Header /> */}
          {!isStandalone && <Header />}
          {children}
          <Analytics />
          {!isStandalone && <Footer />}
          {/* <Footer /> */}
          {!isStandalone && <ScrollToTop />}
          {/* <ScrollToTop /> */}
        </Providers>

      </body>
    </html>
  );
}
