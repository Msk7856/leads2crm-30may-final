
import React from "react";
import ZohoCrmAuditHero from "./ZohoCrmAuditHero";
import Login from "@/components/animate/Login";
import ZohoCrmAudit from "./ZohoCrmAudit";
import FAQ from '@/app/zoho-crm-audit/FAQ'
import WhyChooseUs from "./WhyChooseUs";
import Testimonial from "@/components/Testimonials/Testimonial";
import HowItWorks from "./HowItWorks";
import Head from "next/head";

export const metadata = {
    title: "Free Zoho CRM Audit | Optimize Your CRM Effectively",
    description:
        "Claim your free Zoho CRM audit today. Get a personalized report, expert recommendations, and discover how to optimize your CRM for better results.",
    keywords: [
        "Zoho CRM Audit",
        "Free CRM Audit",
        "CRM Optimization",
        "Zoho CRM Review",
        "Zoho CRM Consulting",
        "Improve Zoho CRM",
        "CRM Audit Service",
        "Free CRM Report",
    ],
    openGraph: {
        title: "Free Zoho CRM Audit | Personalized CRM Optimization Report",
        description:
            "Boost your Zoho CRM efficiency with our free audit. Analyze, optimize, and grow your business with expert CRM insights.",
        url: "https://www.leads2crm.com/zoho-crm",
        type: "website",
        images: [
            {
                url: "https://www.leads2crm.com/zoho-crm.png",
                width: 1200,
                height: 630,
                alt: "Zoho CRM Audit Preview",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Free Zoho CRM Audit | Optimize Your CRM Effectively",
        description:
            "Get expert insights on your Zoho CRM with our free audit. Personalized report and consultation included.",
        images: ["https://www.leads2crm.com/zoho-crm.png"],
    },
};


const FreeZohoCRMAuditLandingPage = () => {
    return (
        <>

            <Head>
                <title>Free Zoho CRM Audit | Optimize Your CRM Effectively</title>
                <meta
                    name="description"
                    content="Claim your free Zoho CRM audit today. Get a personalized report, expert recommendations, and discover how to optimize your CRM for better results."
                />
                <meta
                    name="keywords"
                    content="Zoho CRM Audit, Free CRM Audit, CRM Optimization, Zoho CRM Review, Zoho CRM Consulting, Improve Zoho CRM, CRM Audit Service, Free CRM Report"
                />
                <meta property="og:title" content="Free Zoho CRM Audit | Personalized CRM Optimization Report" />
                <meta
                    property="og:description"
                    content="Boost your Zoho CRM efficiency with our free audit. Analyze, optimize, and grow your business with expert CRM insights."
                />
                <meta property="og:image" content="https://www.leads2crm.com/zoho-crm.png" />
                <meta property="og:url" content="https://www.leads2crm.com/zoho-crm" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Free Zoho CRM Audit | Optimize Your CRM Effectively" />
                <meta
                    name="twitter:description"
                    content="Get expert insights on your Zoho CRM with our free audit. Personalized report and consultation included."
                />
                <meta name="twitter:image" content="https://www.leads2crm.com/zoho-crm.png" />
            </Head>


            <ZohoCrmAuditHero />
            <HowItWorks />
            <WhyChooseUs />
            <ZohoCrmAudit />
            <Testimonial />
            <FAQ />
        </>
    );
};

export default FreeZohoCRMAuditLandingPage;
