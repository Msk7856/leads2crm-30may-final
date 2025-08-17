import Script from "next/script";

export default function SchemaLD() {
  return (
    <Script
      id="schema-ld-organization"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Leads2CRM",
          url: "https://www.leads2crm.com",
          logo: "https://www.leads2crm.com/_next/image?url=%2Fimages%2Flogo%2FLeads2crm.jpg&w=256&q=75",
          email: "info@leads2crm.com",
          sameAs: ["https://www.linkedin.com/company/leads2crm"],
          department: [
            {
              "@type": "LocalBusiness",
              name: "Leads2CRM Riyadh Office",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Saudi Arabia",
                addressLocality: "Riyadh",
                addressCountry: "SA",
              },
              telephone: "+966-559034101",
            },
            {
              "@type": "LocalBusiness",
              name: "Leads2CRM Madhubai Office",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Saudi Arabia, Riyadh,",
                addressLocality: "Delhi",
                addressCountry: "IN",
              },
              telephone: "+91 9470244795",
            },
          ],
        }),
      }}
    />
  );
}
