import AboutGoldenLionCards from "./AboutGoldenLionCards"
import CareersHero from "./Career"
import CareerOpenings from "./CareerOpenings"
import HireReactSteps from "./HireReactSteps"
import ContactUs from "@/app/contact-us/ContactUs"

const page = () => {
    return (
        <div className="mt-24">
            <CareersHero />
            <CareerOpenings />
            {/* <HireReactSteps /> */}
            <AboutGoldenLionCards />
            <ContactUs />
        </div>
    )
}

export default page
