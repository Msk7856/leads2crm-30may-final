'use client'
import React from 'react'
import AboutCompanyHero from './AboutCompanyHero'
import CentersOfExcellence from './CentersOfExcellence'
import OurEssense from './OurEssense'
import JoinUsSection from './JoinUsSection'
import ExploreMoreSection from './ExploreMoreSection'
import EmpowersStaff from './EmpowersStaff'

const page = () => {
    return (
        <div>
            <AboutCompanyHero />
            <CentersOfExcellence />
            <OurEssense />
            <ExploreMoreSection />
            <EmpowersStaff />
            <JoinUsSection />
        </div>
    )
}

export default page
