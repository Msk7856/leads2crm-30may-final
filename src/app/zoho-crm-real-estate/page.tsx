import SchemaLD from '@/components/SEO/SchemaLD';
import FreeZohoCRMAuditLandingPage from '../zoho-crm-audit/page'
import Script from 'next/script';

export const metadata = {
    title: "Zoho CRM for Real Estate | Automate Sales & Lead Tracking",
    description: "Leverage Zoho CRM for real estate to manage leads, automate follow-ups, and close deals faster. Tailored CRM solutions for property businesses.",
};


const page = () => {

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
            <FreeZohoCRMAuditLandingPage />
        </div>
    )
}

export default page
