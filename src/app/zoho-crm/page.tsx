'use client'
import ZohoCrm from "@/components/zoho/ZohoCrm"
import TakeUsForASpin from "./TakeUsForASpin"
import FAQSlider from "./FAQSlider"
import ZohoBanner from "./ZohoBanner"
import ZohoCRMIndustry from "./ZohoCRMIndustry"
import ZohoCreatorCustomApp from "./ZohoCreatorCustomApp"
import ZohoCrmHero from "./ZohoCrmHero"
import DeskHeroSignup from "./DeskHeroSignup"
// import ContactUs from "@/components/Contact-us/ContactUs"
import ContactUs from "@/app/contact-us/ContactUs"
import ZohoEcosystemAnimated from "./ZohoEcosystemAnimated"
import EstimateProjectBanner from "@/components/EstimateProjectBanner/EstimateProjectBanner"
import InteriorDesignCRMHero from "./InteriorDesignCRMHero"
import CRMHomeBuyerJourney from "./CRMHomeBuyerJourney"
import SchemaLD from "@/components/SEO/SchemaLD"
import Script from "next/script"


const page = () => {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Zoho CRM",
        "provider": {
            "@type": "Organization",
            "name": "Leads2CRM",
            "url": "https://www.leads2crm.com",
            "logo": "https://www.leads2crm.com/_next/image?url=%2Fimages%2Flogo%2FLeads2crm.jpg&w=256&q=75",
            "email": "info@leads2crm.com"
        },
        "areaServed": [
            { "@type": "Country", "name": "Saudi Arabia" },
            { "@type": "Country", "name": "United Arab Emirates" }
        ],
        "description": "Implementation your existing CRM to Zoho with zero data loss. Our experts ensure smooth, secure CRM migration tailored to your business workflows."
    };
    return (
        <div>
            <Script
                id="zoho-crm"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <SchemaLD />
            {/* <ZohoCrm /> */}
            <ZohoCrmHero />
            {/* <DeskHeroSignup /> */}
            <CRMHomeBuyerJourney />
            <InteriorDesignCRMHero />
            <ZohoBanner />
            {/* <EstimateProjectBanner /> */}
            <ZohoCRMIndustry />
            <ZohoCreatorCustomApp />
            <ZohoEcosystemAnimated />
            <ContactUs />
            {/* <TakeUsForASpin /> */}
            <FAQSlider />
        </div>
    )
}

export default page
