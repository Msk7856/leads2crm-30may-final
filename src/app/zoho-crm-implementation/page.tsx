import SchemaLD from "@/components/SEO/SchemaLD";
import { CaseStudies } from "./CaseStudies";
import CRMImage from "./CRMImage";
import { FinalCta } from "./FinalCta";
import { Footer } from "./Footer";
import { Header } from "./Header";
import StandalonePage from "./hero";
import { Services } from "./Services";
import { Testimonials } from "./Testimonials";
import { TrustAuthority } from "./TrustAuthority";
import Script from "next/script";


export const metadata = {
    title: "Zoho CRM Integration Services | Move to Zoho Seamlessly",
    description: "Integration your existing CRM to Zoho with zero data loss. Our experts ensure smooth, secure CRM Integration tailored to your business workflows.",
};

export default function Standalone() {

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Zoho CRM Migration",
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
        "description": "Migrate your existing CRM to Zoho with zero data loss. Our experts ensure smooth, secure CRM migration tailored to your business workflows."
    };

    return (
        <div>
            <Script
                id="zoho-crm-migration-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <SchemaLD />
            <Header />
            <StandalonePage />
            <TrustAuthority />
            <Services />
            <CRMImage />
            <CaseStudies />
            <Testimonials />
            <FinalCta />
            {/* <Footer /> */}
        </div>
    );
}
