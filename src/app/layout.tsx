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
        <meta
          name="google-site-verification"
          content="T8TJAnB3DzozT9RGtMeL8hEwaq6uZY2pHYX-K2tvORQ"
        />

        {/* Google Analytics Script */}
        <Script
          strategy="beforeInteractive"
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

        {/* <!-- Google Tag Manager --> */}
        {/* GTM Head Snippet */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id=GTM-KWPB4NGN'+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KWPB4NGN');
          `}
        </Script>
        {/* <!-- End Google Tag Manager --> */}
      </head>

      {/* <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}> */}
      <body className={`bg-[#FFFFFF]  ${inter.className}`}>
        {/* <!-- Google Tag Manager (noscript) --> */}
        {/* GTM Body Snippet */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KWPB4NGN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}

        <Providers>
          <AnalyticsListener />
          {/* <TopBar/> */}
          {/* <TopBar/> */}
          {/* <Header /> */}
          {!isStandalone && <Header />}
          {children}
          {!isStandalone && <Footer />}
          {/* <Footer /> */}
          {!isStandalone && <ScrollToTop />}
          {/* <ScrollToTop /> */}
          <Analytics />
        </Providers>

      </body>
    </html>
  );
}
