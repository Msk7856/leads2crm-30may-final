
import ContactUs from "@/app/contact-us/ContactUs"
import CareersHero from "../hire-talent/Career"
import CareerOpenings from "../hire-talent/CareerOpenings"
import AboutGoldenLionCards from "../hire-talent/AboutGoldenLionCards"

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
