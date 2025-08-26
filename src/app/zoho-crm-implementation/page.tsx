import { CaseStudies } from "./CaseStudies";
import CRMImage from "./CRMImage";
import { FinalCta } from "./FinalCta";
import { Footer } from "./Footer";
import { Header } from "./Header";
import StandalonePage from "./hero";
import { Services } from "./Services";
import { Testimonials } from "./Testimonials";
import { TrustAuthority } from "./TrustAuthority";


export const metadata = {
    title: "Zoho CRM Integration Services | Move to Zoho Seamlessly",
    description: "Integration your existing CRM to Zoho with zero data loss. Our experts ensure smooth, secure CRM Integration tailored to your business workflows.",
};

export default function Standalone() {
    return (
        <div>
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
