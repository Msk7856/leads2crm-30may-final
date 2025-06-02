'use client'
import React from "react";
import ZohoCrmAuditHero from "./ZohoCrmAuditHero";
import Login from "@/components/animate/Login";
import ZohoCrmAudit from "./ZohoCrmAudit";
import FAQ from '@/app/zoho-crm-audit/FAQ'
import WhyChooseUs from "./WhyChooseUs";
import Testimonial from "@/components/Testimonials/Testimonial";
import HowItWorks from "./HowItWorks";

const FreeZohoCRMAuditLandingPage = () => {
    return (
        // <main className="w-full mx-auto font-sans">
        //     {/* Header Section */}
        //     <ZohoCrmAuditHero />


        // </main>

        <>
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
