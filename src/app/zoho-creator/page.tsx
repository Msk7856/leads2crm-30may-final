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

const page = () => {
    return (
        <div>
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
