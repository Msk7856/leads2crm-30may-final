'use client'
import React from 'react'
import ZohoCreatorHero from './ZohoCreatorHero'
import ZiaHero from './ZiaHero'
import AIBanner from './AIBanner'
import ContactUs from '../contact-us/ContactUs'
import JoinUsSection from '../about-us/JoinUsSection'
import FAQSection from './FAQSection'
import AppIntegrationHero from './AppIntegrationHero'
import AutomateBusinessProcesses from './AutomateBusinessProcesses'
import SchemaLD from '@/components/SEO/SchemaLD'
import Script from 'next/script'

const page = () => {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Zoho Creator",
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
                id="zoho-creator"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <SchemaLD />
            <ZohoCreatorHero />
            {/* <ZiaHero /> */}
            <AIBanner />
            <AppIntegrationHero />
            <AutomateBusinessProcesses />
            {/* <JoinUsSection /> */}
            <FAQSection />
            <ContactUs />
        </div>
    )
}

export default page
