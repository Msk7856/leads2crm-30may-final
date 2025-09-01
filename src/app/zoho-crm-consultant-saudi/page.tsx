import SchemaLD from '@/components/SEO/SchemaLD';
import FreeZohoCRMAuditLandingPage from '../zoho-crm-audit/page'
import Script from 'next/script';

export const metadata = {
    title: "Zoho CRM Consultant in Saudi Arabia | CRM Strategy & Support",
    description: "Work with experienced Zoho CRM consultants in Saudi Arabia. Optimize your CRM strategy, workflows, and customer engagement with Leads2CRM.",
};


const page = () => {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Zoho CRM Consultation Saudi",
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
                id="zoho-crm-consultation-saudi"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <SchemaLD />
            <FreeZohoCRMAuditLandingPage />
        </div>
    )
}

export default page
